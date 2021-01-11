<template>
  <div class="text-light banner-body text-center"><!--text-md-left -->
    <h1 class="display-3 banner-heading">
      Welcome to
      <span class="text-danger font-italic">e</span>
      <span class="text-uppercase text-white font-weight-bold">Movies</span>
    </h1>
    <p
      class="lead banner-par"
    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, iste.</p>
    <router-link to='/movies' class="btn btn-danger banner-button w-50 text-center "> Get Movies<i class="fa fa-arrow-circle-o-right ml-3"></i>  </router-link>
    <!-- <div class="input-group banner-input-group mt-5">
      <i class></i>
      <input type="text" placeholder="Search" class="form-control text-muted banner-input" />
      <button class="btn banner-button m-0 btn-danger input-group-append">Search</button>
    </div> -->
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.banner-body{
  position: absolute;
  top:35%;
  left: 28%;
}
.banner-heading{
  animation: anim .6s ease-in-out forwards;
}
.banner-par{
    animation: anim .7s .2s  ease-in-out backwards;
}
.banner-button{
  width: 100px;
}

.banner-input {
background-color: transparent;
border: none;
border-bottom: 1px groove #d33;
transition: all 1s;
}
.banner-button{

animation: anim-input .6s .4s ease-out backwards;

}
.banner-input:focus{
box-shadow: none;
background-color: transparent;
border: none;
border-bottom: 1px groove #d33;
transform: scale(1.1);
}
.nav-menu {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3));
  padding: 5px;
}

@keyframes anim {
  0%{
    transform: translateX(100px);
    opacity:0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes anim-input {
  0%{
    transform: translateY(100px);
    opacity:0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}

</style>