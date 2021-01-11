<template>
  <div>
    <div class="m-auto text-center sign-in-form">
      <form
        @submit="
          (event) => signIn({ event: event, userInfo: { email, password } })
        "
        class
      >
        <div class="form-header">
          <h1 class="display-4 text-muted font-weight-bold text-left mb-2">
            Sign In
          </h1>
        </div>
        <div class="input-group my-2">
          <input
            type="text"
            placeholder="Email"
            class="form-control form-input"
            id="input-3"
            v-model="email"
          />
        </div>
        <div class="input-group my-2">
          <input
            type="password"
            placeholder="Password"
            class="form-control form-input"
            id="input-4"
            v-model="password"
          />
        </div>
        <button class="btn btn-outline-danger w-75 submit-btn">
          <span v-if="!getLoaderState"> Sign in </span>
          <span
            v-if="getLoaderState"
            class="spinner-border spinner-border-sm text-muted"
            role="status"
          >
            <span class="sr-only">Loading...</span>
          </span>
        </button>
      </form>
      <div class="my-2">
        <p class="text-light">
          <router-link to="/login/singup" class="text-muted lead"
            >Sign up here</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>

import { mapActions, mapGetters } from "vuex";
export default {
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
    ...mapActions(["signIn"]),
  },
  computed: {
    ...mapGetters(["getAuthState", "getLoaderState"]),
    email: {
      get() {
        return this.$store.getters.getEmail;
      },
      set(email) {
        this.$store.dispatch("updateEmail", email);
      },
    },
    password: {
      get() {
        return this.$store.getters.getPassword;
      },
      set(password) {
        this.$store.dispatch("updatePassword", password);
      },
    },

  }
};
</script>
<style scoped>
.form-body {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url(../../../assets/img/sign-in-bg.jpg) center / cover;
}
.sign-in-form {
  padding: 20px 10px;
  background: rgba(0, 0, 0, 0.8);
  margin: auto;
  width: 35%;
  border-radius: 5px;
}
@media (max-width: 1024px) {
  .sign-in-form {
    width: 55%;
  }
}
.form-header {
  animation: sign-in 0.5s;
}

.form-input {
  background: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 1px groove rgb(146, 146, 146);
  transition: all 0.2s;
}

.submit-btn {
  animation: btn 1.2s;
}

#input-3 {
  animation: sign-in 0.5s ease-out;
}
#input-4 {
  animation: sign-in 0.5s ease-out;
  animation-delay: 0.2s;
  animation-fill-mode: backwards;
}

.form-input:focus {
  background: transparent;
  border: none;
  border-bottom: 1px solid rgb(146, 146, 146);
  box-shadow: none;
  transform: translate(-3px, -3px);
}
@keyframes sign-in {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes btn {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>