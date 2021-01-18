<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-12 col-lg-2 side-menu text-light">
        <app-side-nav location="summary"></app-side-nav>
      </div>
      <div class="col-12 col-md-12 col-lg-10">
        <app-top-nav location="dashboard"></app-top-nav>
        <app-summary></app-summary>
        <app-movies></app-movies>
      </div>
    </div>
  </div>
</template>
<script>
import sideNav from "../Sidenav";
import topNav from "../TopNav";
import Summary from "./Summary";
import movie from "./MovieSumm";
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    appSideNav: sideNav,
    appTopNav: topNav,
    appSummary: Summary,
    appMovies: movie,
  },

  mounted() {
    let token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/api/customer/userinfo", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        this.updateUserDetail(response.data.data);
        this.userIsAuth(true);
      })
      .catch((error) => {
        //  if(error.statusCode === )
        throw error;
      });
  },
  methods: {
    ...mapActions(["userIsAuth", "updateUserDetail"]),
  },
  computed: {
    ...mapGetters(["getUserDetails"]),
  },
  beforeRouteEnter(to, from, next) {
    const expiresIn = localStorage.getItem("expiresIn");
    let expDate = Date.parse(expiresIn);
    if (expDate) {
      if (expDate > Date.now()) {
        next();
      }else{
  next("/login");
      }
    
    } else {
      next("/login");
    }
  },
};
</script>
<style scoped>
.side-menu {
  height: 100vh;
  background: linear-gradient(
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.8)
    ),
    url(../../assets/img/side-menu-bg1.jpg) center / cover;
  /* src\assets\img\side-menu-bg1.jpg */
}
</style>