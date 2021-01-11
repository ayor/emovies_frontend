// import axios from 'axios';

// const customerMethods = {
//     async asyncGetCustomerList(commit, payload) {

//         await (axios.get('https://localhost:44351/api/Customer')
//             .then(({ data }) => {

//                 if (data != []) {
//                     payload = [...data]
//                 }
//             }).catch(err => console.log(err)))

//         commit('init_Customers', payload)
//     },
//     async postCustomerToDatabase(commit,getters, payload) {
//         await (
//             axios.post("https://localhost:44351/api/Customer/", payload)
//                 .then(response => {
//                     if (response.status == 200) {
//                         commit('message', "Successfully Added Customer");
//                     } else {
//                         commit('message', "Something wrong happened");
//                     }
//                     setTimeout(() => {
//                         (getters.userData = {
//                             name: "",
//                             address: "",
//                             password: ""
//                         }),
//                             (getters.message = "");
//                         commit("signUp", false);
//                     }, 3000);
//                 })
//                 .catch(err => alert(err))
//         )
//     }

// }

// export const initialize_Customers = ({ commit }) => {

//     const payload = []
//     customerMethods.asyncGetCustomerList(commit, payload)

// }

// export const loginUser = ({ commit, getters }) => {
//     commit('isAuthorizedUser')

//     if (getters.isAuthorizedUser) {

//         commit('loginSuccess', true)

//         // eventBus.$emit("loggedIn", existingUser)
//     } else {
//         //show sign up page 
//         commit('displaySignUp', true)
//     }

// }

// export const display_SignUp = ({ commit }) => {
//     commit('displaySignUp', true)
// };


// export const signUp = ({ commit, getters }, payload) => {
//     //add new customer to list of customers
//     commit('addCustomer', payload)

//     customerMethods.postCustomerToDatabase(commit, getters, payload)

// }
