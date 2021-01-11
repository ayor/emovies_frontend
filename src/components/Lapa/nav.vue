<template>
  <nav class="navbar navbar-expand-md nav-menu fixed-top nav-menu">
    <a class="navbar-brand">
      <span class="text-danger font-italic h3">e</span>
      <span class="text-uppercase text-white h2 font-weight-bold">Movies</span>
    </a>
    <button
      type="button"
      data-target="#Nav"
      data-toggle="collapse"
      class="navbar-toggler"
    >
      <span class="line1"></span>
      <span class="line2"></span>
      <span class="line3"></span>
    </button>

    <div class="navbar-collapse collapse justify-content-end" id="Nav">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="(link, ind) in links" :key="ind">
          <router-link
            :to="link.linkUrl"
            class="nav-link text-danger font-weight-bold text-uppercase mx-3"
            >{{ link.linkName }}</router-link
          >
        </li>
      </ul>
    </div>

    <!-- <div class="collapse navbar-collapse" id="navbarNav">
       
    </div>-->
  </nav>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["logout"]),
  },
  data() {
    return {};
  },
  props: ["links"],
};
</script>

<style scoped>
.banner-button {
  width: 100px;
}
.line1,
.line2,
.line3 {
  margin: 1px;
  border: 1px solid #f42;
}
.nav-menu {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5));
}
</style>