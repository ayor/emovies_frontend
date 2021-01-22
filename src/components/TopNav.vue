<template>
  <div class>
    <nav class="navbar navbar-expand-lg  fixed-top top-nav">
      <button type="button" class="navbar-toggler" aria-controls="topNav"  data-toggle="collapse" data-target="#topNav">
       <span class="line1"></span>
       <span class="line2"></span>
       <span class="line3"></span>
      </button>
      <div class="navbar-collapse collapse justify-content-end" id="topNav">
        <ul class="navbar-nav text-uppercase font-weight-bold">
          <li class="nav-item top-nav-links">
            <router-link to="/" class="text-danger" :active-class="location === '' ? 'current' : null">Home</router-link>
          </li>
          <li class="nav-item top-nav-links">
            <router-link to="/movies" class="text-danger" :active-class="location === 'movies' ? 'current' : null">Videos</router-link>
          </li>
          <li class="nav-item top-nav-links">
            <router-link to="/dashboard" class="text-danger" :active-class="location === 'dashboard' ? 'current' : null">Profile</router-link>
          </li>
          <li v-if="getUserDetail['status'] === 'admin' && getAuthState" class="nav-item top-nav-links">
            <router-link to="/add-video" class="text-danger" :active-class="location === 'add-video' ? 'current' : null">Add a Video</router-link>
          </li>
          <li class="nav-item top-nav-links">
            <router-link to="/carts" class="text-danger icon-bullet" :active-class="location === 'carts' ? 'current' : null">Cart <span class="text-white cart ">{{Carts.length }}</span></router-link>
          </li>
          <li class="nav-item top-nav-links" v-show="!getAuthState">
            <router-link to="/login" class="text-danger" >Sign In</router-link>
          </li>
          <li class="nav-item top-nav-links" v-show="getAuthState">
            <a  class="text-danger" @click="logout">logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props:["location", "authState"],
  computed:{
    ...mapGetters(["getAuthState","getUserDetail", "Carts"])
  },
  methods:{
    ...mapActions(['userIsAuth', "logout"]),
    
  }
};
</script>

<style scoped>
.top-nav {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1));
}

.line1, .line2, .line3 {
 margin: 1px;
 border: 1px solid #f42;
}

.current {
  border-bottom: 1px groove #f42;
  padding-bottom: 9px;
}
.top-nav-links {
  margin: 0 20px;
  padding: 10px;
  height: 100%;
  cursor: pointer;
  letter-spacing: 2px;
  transition: all 0.4s;
}
.top-nav-links:hover {
  background-color: rgba(97, 96, 96, 0.4);
}
.top-nav-links a:hover {
  text-decoration: none;
}
.cart{  
  font-size:12px; 
 position: absolute;
 top: 4px;
  padding: 5px;
  margin-left: -5px;  
  animation: cart 2s ease-in-out;
  transition: all 1s;
}

@media (max-width:1024px ){
  .cart{  
  font-size:12px; 
 position: absolute;
 top: 167px;
  padding: 5px;
  margin-left: -5px;  
  animation: cart 2s ease-in-out;
  transition: all 1s;
  }
}

@keyframes cart {
  0%{
    transform: scale(-1,1);
  }
  50%{
    transform: scale(0,1);
  }
  100%{
    transform: scale(1,1);
  }
}
</style>