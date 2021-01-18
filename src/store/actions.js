import axios from 'axios';
import { router } from '../main';

const CREATE_FORM_DATA = (object) => {
    const keys = Object.keys(object);
    const formData = new FormData();

    keys.forEach(key => {
        formData.append(`${key}`, object[key]);
    });

    return formData;

}


export const signIn = ({ commit }, payload) => {//context on=bjet was destructured

    commit('UPDATE_LOADER', true);

    payload['event'].preventDefault();

    const { _id, email, password } = payload.userInfo;

    axios.post('http://localhost:8080/api/auth/signin', {
        id: _id,
        email,
        password
    }).then(({ data }) => {

        localStorage.setItem('token', data.token);
        localStorage.setItem('expiresIn', data.expiresIn);
        //on login success, navigate to the user dashboard
        commit('USER_IS_AUTHORIZED', true);
        commit('UPDATE_USER_EMAIL', '');
        commit('UPDATE_USER_PASSWORD', '');
        commit('UPDATE_LOADER', false);
        commit('UPDATE_USER_DETAIL', data.data);

        if (data.data.status === 'admin') {
            commit('USER_IS_ADMIN', true)
        }
        //navigate to user dashboard
        router.push('/dashboard')

    })
        .catch(error => {
            
           if(error){
            commit('SHOW_ERROR_SIGNIN_MESSAGE', "Invalid email or password, kindly try again.")
            setTimeout(()=>{
                commit('SHOW_ERROR_SIGNIN_MESSAGE', "")

            }, 5000)
           }
            commit('USER_IS_AUTHORIZED', false);
            commit('UPDATE_USER_EMAIL', '');
            commit('UPDATE_USER_PASSWORD', '');
            commit('UPDATE_LOADER', false);
            
            throw error;
        });
}

export const singUp = (context, { event, getUserDetail }) => {

    event.preventDefault();
    context.commit('UPDATE_LOADER', true);

    const formData = CREATE_FORM_DATA(getUserDetail);

    axios.post('http://localhost:8080/api/auth/signup', formData
    ).then(res => {

        if (res.status === 201 || res.status === 200) {
            signIn(context, { event, userInfo: res.data.data })
            context.commit('UPDATE_LOADER', false);

        }

    })
        .catch(err => { throw err; })
}


export const updateEmail = ({ commit }, payload) => {

    commit('UPDATE_USER_EMAIL', payload);
}
export const updatePassword = ({ commit }, payload) => {

    commit('UPDATE_USER_PASSWORD', payload);
}

export const updateUserDetail = ({ commit }, payload) => {

    commit('UPDATE_USER_DETAIL', payload)
}

export const userIsAuth = ({ commit }, payload) => {

    commit('USER_IS_AUTHORIZED', payload)
}
export const updateUserIsAdmin = ({ commit }, payload) => {

    commit('USER_IS_Admin', payload)
}

export const createVideo = ({ commit }, { event, getVideoDetails }) => {

    event.preventDefault();
    let token = localStorage.getItem('token');

    let formData = CREATE_FORM_DATA(getVideoDetails)

    fetch('http://localhost:8080/api/admin/video',
        {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
    )
        .then(res => {
            return res.json()
        })
        .then(result => {
           
            commit('create_video',
                {
                    description: "",
                    Image: '',
                    price: 0,
                    title: '',
                    year: ''
                }
            )
        }).catch(err => { throw err })
}



export const logout = ({ commit }) => {

    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
    commit('USER_IS_AUTHORIZED', false);
    commit('USER_IS_ADMIN', false)
    commit('UPDATE_USER_DETAIL', {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        imageUrl: "",
        imgUrl: '',
        cart: [],
        orders: [],
        status:''
    })
    router.push('/')
}

export const processPayment = ({getters}, payload) => { 

    //on succesful payment, create the order and send to the server
    let order = {
        videos:getters.Carts,
        customerId: getters.getUserDetail._id,
        total: getters.getTotal,
        paystackReference: payload.reference,
        shippingMode: getters.getShippingFee == 10 ? 'Fast' : 'Standard',
        shippingFee: getters.getShippingFee
    };

    let token = localStorage.getItem('token');

    axios('http://localhost:8080/api/orders/order', {
        method:'POST',
        data: {
            ...order
        },
        headers:{
            'Authorization': 'Bearer ' + token,
            'Content-Type':'application/json'
        }
    } )
 }
