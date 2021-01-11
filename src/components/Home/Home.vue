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
  }
};
</script>
<style scoped>
</style>