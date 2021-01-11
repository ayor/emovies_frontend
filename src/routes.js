import Customer from './components/Dashboard/Dashboard.vue';
import Movies from './components/Movies/Movies.vue';
import MovieDetail from './components/Movies/MovieDetail.vue';
import Home from './components/Home/Home.vue';
import addCustomer from './components/Customer/addCustomer.vue';
// import complaints from './components/Customer/complaints.vue';
import createVideoPage from './components/Admin/CreateVideo';
import loginPage from './components/Home/SignIn/SignUpPage';
import signIn from './components/Home/SignIn/SignIn';
import signUp from './components/Home/SignIn/SignUp';
import Carts from './components/Carts';

export const routes = [
    {
        path:'',
        component:Home
    },
    {
        path:'/dashboard/',
        component: Customer,
        // beforeEnter:(to, from, next) =>{

        // }
    },
    {
        path:'/movies',
        component:Movies
    },
    {
        path:'/movies/:id',
        component:MovieDetail
    },
    {
        path: '/addCustomer',
        component: addCustomer
    },
    {
        path: '/carts',
        component: Carts
    },   
    {
        path:'/login',
        component: loginPage,
        children:[
            {
                path:'',
                component:signIn
            },
            {
                path:'/login/singup',
                component:signUp
            }
        ]
    },
    {
        path:'/add-video',
        component: createVideoPage,
    }
]