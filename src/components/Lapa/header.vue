<template>
  <header class="banner row">
    <app-nav :links="link"></app-nav>
    <app-banner></app-banner>
  </header>
</template>
<script>
import appNav from "./nav";
import appBanner from "./banner";

export default {
  data() {
    return {
      link: [
         {
          linkName: "Get Movies",
          linkUrl: "/movies",
        },
        {
          linkName: this.$store.getters.getAuthState ? '' : "Sign In",
          linkUrl: this.$store.getters.getAuthState ? '' : "/login",
        }       
      ],
    };
  },
  components: {
    appNav,
    appBanner,
  },
};
</script>

<style scoped>
/* nav styles */
.banner {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)),
    url(../../assets/img/header-img.jpg) no-repeat center / cover;

  height: 100vh;
  overflow: hidden;
}

/* nav styles end */
</style>