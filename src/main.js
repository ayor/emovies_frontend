import Vue from 'vue'
import App from './App.vue';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router';
import { routes } from "./routes";
import Axios from 'axios';
import Resource from 'vue-resource'
import Vuex from "vuex";
import {store} from './store/store'
//import app from './app.js'

Vue.use(Resource);
Vue.use(VueRouter);
Vue.use(Axios);
Vue.use(Vuex);

//Vue.use(app)
export const router = new VueRouter({
  routes,
  //the mode specifies what time of url mode .. either hash or history
  //the hash mode sends the domain name(ie before the #) to the server www.example.com/#/customer.html 
  //and handles the other section of the url on the client side (/customer)
  //for this to work on the history mode, the configuration on the server as return the index.html whenever a request to another page 
  //is made so as to prevent a 404 error
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App),
})


