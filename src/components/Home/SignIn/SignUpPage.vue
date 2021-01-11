<template>
  <div>
    <app-nav :links="links"></app-nav>
    <div class="form-body vh-100 row align-items-center">
      <!-- <div v-if="getLoaderState" class="loader-background"></div> -->
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import appNav from "../../Lapa/nav";
import { mapGetters } from 'vuex'
export default {
  components: {
    appNav,
  },
  data() {
    return {
      links: [
        {
          linkName: "Home",
          linkUrl: "/",
        },
      ],
    };
  },
  methods: {
    dosomething() {},
  },
  computed:{
       ...mapGetters(['getLoaderState'])
  }
};
</script>
<style scoped>
.form-body {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url(../../../assets/img/sign-in-bg.jpg) center / cover;
}
/* start spinner */
.loader-background {
  background-color: rgba(63, 63, 63, 0.4);
  z-index: 100;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
/* spinner ends */
</style>