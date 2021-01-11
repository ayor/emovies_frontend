<template>
  <div class="m-auto text-center sign-in-form">
    <form @submit="(event) => singUp({ event, getUserDetail })">
      <!--UserDetail:{Firstname, Lastname, Email, Password, ConfirmPassword}} -->
      <div class="form-header">
        <h1 class="display-4 text-muted font-weight-bold text-left mb-3">
          Sign Up
        </h1>
      </div>

      <div class="input-group my-2">
        <input
          type="text"
          placeholder="First Name"
          class="form-control form-input"
          id="input-1"
          v-model="firstname"
        />
      </div>
      <div class="input-group my-2">
        <input
          type="text"
          placeholder="Last Name"
          class="form-control form-input"
          id="input-2"
          v-model="lastname"
        />
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
      <div class="input-group my-2 justify-content-center">
        <input
          style="display: none"
          type="file"
          placeholder="Upload Image"
          class="form-control form-input"
          id="input-6"
          @change="upload"
          ref="uploadFile"
        />
        <!-- style="display:none" -->
        <button
          type="button"
          class="btn btn-secondary"
          @click="$refs.uploadFile.click()"
        >
          Upload Image
        </button>
      </div>
      <img :src="ImgUrl" alt="" width="150px" height="150px" />
      <div class="input-group my-2">
        <input
          type="password"
          placeholder="Password"
          class="form-control form-input"
          id="input-4"
          v-model="password"
        />
      </div>
      <div class="my-2">
        <input
          type="password"
          placeholder="Confirm Password"
          class="form-control form-input"
          id="input-5"
          v-model="confirmPassword"
          @keyup="validate"
        />
        <p class="text-danger submit-btn">{{ errorMessage }}</p>
      </div>

      <button class="btn btn-outline-danger w-75 submit-btn" type="submit">
        <span v-if="!getLoaderState">Sign Up</span> 
          <span v-if="getLoaderState"  class="spinner-border  spinner-border-sm  text-muted" role="status">
          <span class="sr-only">Loading...</span>
        </span>
      </button>
    </form>
    <div class="my-2">
      <p class="text-light">
        <router-link to="/login" class="text-muted lead"
          >Sign In here
        </router-link>
      
      </p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getUserDetail","getLoaderState","getAuthState"]),
    firstname: {
      get() {
        return this.$store.getters.getUserDetail["firstname"];
      },
      set(value) {
        this.$store.dispatch("updateUserDetail", { firstname: value });
      },
    },
    lastname: {
      get() {
        return this.$store.getters.getUserDetail["lastname"];
      },
      set(value) {
        this.$store.dispatch("updateUserDetail", { lastname: value });
      },
    },
    email: {
      get() {
        return this.$store.getters.getUserDetail["email"];
      },
      set(value) {
        this.$store.dispatch("updateUserDetail", { email: value });
      },
    },
    Image: {
      get() {
        return this.$store.getters.getUserDetail["imageUrl"];
      },
      set(value) {
        this.$store.dispatch("updateUserDetail", { imageUrl: value });
      },
    },
    password: {
      get() {
        return this.$store.getters.getUserDetail["password"];
      },
      set(value) {
        this.$store.dispatch("updateUserDetail", { password: value });
      },
    },
    confirmPassword: {
      get() {
        return this.$store.getters.getUserDetail["confirmPassword"];
      },
      set(value) {
        this.$store.dispatch("updateUserDetail", { confirmPassword: value });
      },
    },
    ImgUrl: {
      get() {
        return this.$store.getters.getUserDetail["ImgUrl"];
      },
    },
  },
  data() {
    return {
      links: [
        {
          linkName: "Home",
          linkUrl: "/",
        },
      ],
      DataURL: "",
      errorMessage: "",
    };
  },
  methods: {
    ...mapActions(["singUp"]),
    dataURL(dU) {
      this.$store.dispatch("updateUserDetail", { ImgUrl: dU });
    },
    upload(event) {
      const file = event.target.files[0];
      let url = URL.createObjectURL(file);
      this.$store.dispatch("updateUserDetail", { Image: file });
      this.dataURL(url);
    },
    validate() {
      this.errorMessage =
        this.Password !== this.ConfirmPassword ? "Passwords do not match" : "";
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
@media (max-width:1024px){
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
  transition: all 0.6s;
}

.submit-btn {
  animation: btn 1s;
}

#input-1,
#input-2,
#input-3,
#input-4,
#input-5 {
  animation: sign-in 0.3s ease-out;
}

#input-2,
#input-3,
#input-4,
#input-5 {
  animation-fill-mode: backwards;
}
#input-2 {
  animation-delay: 0.1s;
}
#input-3 {
  animation-delay: 0.2s;
}
#input-4 {
  animation-delay: 0.4s;
}
#input-5 {
  animation-delay: 0.6s;
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