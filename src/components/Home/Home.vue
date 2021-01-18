<template>
  <div>
    <app-header></app-header>
    <app-About></app-About>
    <app-Footer></app-Footer>
    <!-- <app-body></app-body> -->
  </div>
</template>
<script>
import appHeader from "../Lapa/header";
import appAbout from "../Lapa/About";
import appFooter from "../Lapa/footer";
export default {
  components: {

    appHeader,
    appAbout,
    appFooter
  },
  mounted(){
    
    const expiresIn = localStorage.getItem("expiresIn");
    let expDate = Date.parse(expiresIn);
    if(expDate){
      if(expDate < Date.now()){
        this.$store.commit('USER_IS_AUTHORIZED', false)
      }
    }
    
  }
};
</script>
<style scoped>
</style>