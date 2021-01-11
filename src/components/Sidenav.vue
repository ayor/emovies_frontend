<template>
    <nav class="side-nav fixed-left">
            <div class="user-info justify-content-center d-flex my-5">
      <!-- <img :src="getUserImg('assets/img/cartoon.png')" class="rounded" alt="User Image"> -->
      <div class="user-detail text-center pb-1">
        <h1 class="display-5">{{getUserDetail.firstname + " " + getUserDetail.lastname}}</h1>
        <small class="text-muted lead">{{getUserDetail.Email}}</small>
      </div>
    </div>
    <div class=" side-navs-list text-center">
      <ul class="navbar-nav w-100">
                <li :class=" + (location === 'home') ? 'nav-item p-2 m-2 side-nav-active' : 'nav-item p-2 m-2'"> <i class="fa fa-home text-light"></i> <router-link to='/'>Home</router-link></li>
        <li :class="(location === 'summary') ? 'nav-item p-2 m-2 side-nav-active' : 'nav-item p-2 m-2'"> <i class="fa fa-user text-light"></i> <router-link to='/dashboard' active-class="">Summary</router-link> </li>
        <li :class="(location === 'orders') ? 'nav-item p-2 m-2 side-nav-active' : 'nav-item p-2 m-2'"> <i class="fa fa-line-chart text-light"></i> <router-link to='/orders'>My Orders</router-link> </li>
        <li :class="(location === 'savedItems') ? 'nav-item p-2 m-2 side-nav-active' : 'nav-item p-2 m-2'"> <i class="fa fa-shopping-bag text-light"></i> <router-link to='/items'>My Saved Items</router-link> </li>
        <li :class="(location === 'profile') ? 'nav-item p-2 m-2 side-nav-active' : 'nav-item p-2 m-2'"> <i class="fa fa-cog text-light"></i> <router-link to='/settings'>Profile Settings</router-link> </li>

        <li :class="(location === 'savedItems') ? 'nav-item p-2 m-2 side-nav-active' : 'nav-item p-2 m-2'"> <i class="fa fa-play text-light"></i> <router-link to='/'>My Saved Items</router-link> </li>
      </ul>
    </div>
    <img :src='getUserImg()' class=" m-4 rounded-circle " width="210" height="200" alt="user image">
    </nav>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data(){
      return{
        img:'img/cartoon.png'
      }
    },
    computed:{
      ...mapGetters(["getUserDetail"])
    },
    props:["location"],
    methods:{
      getUserImg(){
        return `http://localhost:8080/${this.getUserDetail['imageUrl'].split('\\').join('/')}`
      }
    },

}
</script>
<style scoped>
/* .side-nav{
  position: absolute;
  top:0;
  left: 0;
} */
.side-navs-list ul li{
  /* background-color: #f33; */
  border-radius: 10px;
  cursor: pointer;
  transition: all .3s;
}
.side-navs-list ul li a{
  color: white;
  margin: 0 8px;
  text-decoration: none;
}
.side-navs-list ul li:hover{
  background-color: #f54;

}
.side-nav-active{
 background-color: #43d;
}
.user-detail{

  border-bottom: 1px #ccc solid;
}
</style>