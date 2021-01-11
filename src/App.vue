<template>
  <div class="container-fluid">
    <router-view></router-view>
  </div>
</template>

<script>
// import appImageView from "./components/Home/imageView";

import { mapGetters } from "vuex";

export default {
  components: {
    // appLoginPage,
    //  appSignUp,
    // appImageView,
  },
  computed: {
    ...mapGetters(["loginSuccess", "singUpPage", "loginDetails"]),
  },
  mounted() {
    //  this.$store.dispatch("initialize_Customers");
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#weatherApp {
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
#header {
  position: fixed;
}

.cont {
  /* margin: 0 auto; */
}
.login {
  margin: 20% 25%;
}
.fade-enter {
  /* margin-top: 100%; */
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 2.5s;
  /* opacity: 1; */
  /* animation-name: slideIn;
  animation-duration: 2s; */
}
.fade-leave-active {
  transition: opacity 1.5s;
  opacity: 0;
}
.fade-leave {
}

@keyframes slideIn {
  from {
    margin-top: 100%;
  }
  to {
    margin-top: 0%;
  }
}

@media (max-width: 1313px) {
  .cont {
    width: 1000px;
  }
}
</style>
