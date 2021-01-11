import Vue from 'vue'
import Vuex from 'vuex'
import videos from './modules/videos'
import Carts from './modules/Carts'
import videoDetails from './modules/videoDetails'
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        LoaderState: false,
        isAuthorized: false,
        isSignedUp: false,
        isAdmin: false,
        email: '',
        password: '',
        UserDetail: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: '',
            imageUrl: "",
            imgUrl: '',
            cart: [],
            orders: []
        }
    },
    actions,
    getters,
    mutations,
    modules: {
        videos,
        videoDetails,
        Carts
    }
})