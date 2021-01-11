<template>
  <div class="row mt-5 pt-5" >
    <app-top-nav location="add-video"></app-top-nav>
    <div class="col ">
    <div class="m-auto text-center sign-in-form">
      <form @submit="(event) => createVideo({ event, getVideoDetails })">
        <!--UserDetail:{Firstname, Lastname, Email, Password, ConfirmPassword}} -->
        <div class="form-header">
          <h1 class="display-4 text-muted text-center font-weight-bold text-left mb-3">
            Add Video
          </h1>
        </div>

        <div class="input-group my-2">
          <input
            type="text"
            placeholder="Video Title"
            class="form-control form-input"
            id="input-1"
            v-model="title"
          />
        </div>
        <div class="input-group my-2">
          <textarea
            rows="5"
            col="10"
            placeholder="Description"
            class="form-control form-input"
            id="input-2"
            v-model="description"
          />
        </div>
        <div class="input-group my-2">
          <input
            type="Number"
            placeholder="Price"
            class="form-control form-input"
            id="input-3"
            step="0.01"
            v-model="price"
          />
        </div>
        <div class="input-group my-2">
          <label class="lead" for="year">Year</label>
         <select class="w-100 dropdown" name="year" v-model="year">
           <option >2021</option>
           <option >2020</option>
           <option >2019</option>
           <option >2018</option>
         </select>
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
        <img :src="DataURL" class="d-block mx-auto mb-4" alt="" width="150px" height="150px" />

        <button class="btn btn-outline-secondary w-75 submit-btn" type="submit">
          <span v-if="!getLoaderState">Create Video</span>
          <span
            v-if="getLoaderState"
            class="spinner-border spinner-border-sm text-muted"
            role="status"
          >
            <span class="sr-only">Loading...</span>
          </span>
        </button>
      </form>
    </div>
    </div>
  </div>
</template>
<script>
import topNav from "../TopNav";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    appTopNav: topNav,
  },
  computed: {
    ...mapGetters(["getVideoDetails", "getLoaderState", "getAuthState"]),
    title: {
      get() {
        return this.$store.getters.getVideoDetails["title"];
      },
      set(value) {
        this.$store.dispatch("update_video", { title: value });
      },
    },
    description: {
      get() {
        return this.$store.getters.getVideoDetails["description"];
      },
      set(value) {
        this.$store.dispatch("update_video", { description: value });
      },
    },
    email: {
      get() {
        return this.$store.getters.getVideoDetails["price"];
      },
      set(value) {
        this.$store.dispatch("update_video", { price: value });
      },
    },
    Image: {
      get() {
        return this.$store.getters.getVideoDetails["Image"];
      },
      set(value) {
        this.$store.dispatch("update_video", { Image: value });
      },
    },
    price: {
      get() {
        return this.$store.getters.getVideoDetails["price"];
      },
      set(value) {
        this.$store.dispatch("update_video", { price: value });
      },
    },
    year: {
      get() {
        return this.$store.getters.getVideoDetails["year"];
      },
      set(value) {
        this.$store.dispatch("update_video", { year: value });
      },
    },
  },
  data() {
    return {
      links: [
        {
          linkName: "Create Video",
          linkUrl: "/add-video",
        },
      ],
      DataURL: "",
      errorMessage: "",
    };
  },
  methods: {
    ...mapActions(["createVideo"]),

    upload(event) {
      const file = event.target.files[0];
      let url = URL.createObjectURL(file);
      this.$store.dispatch("update_video", { Image: file });
      this.DataURL = url; 
    },
  },
};
</script>
<style scoped>
/* .form-body {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url(../../../assets/img/sign-in-bg.jpg) center / cover;
} */
.sign-in-form {
  padding: 20px 10px;
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
 
  border-radius: 0;
  border-bottom: 1px groove rgb(146, 146, 146);
  transition: all 0.2s;
}

.submit-btn {
  animation: btn 1.2s;
}

#input-1,
#input-2,
#input-3,
#input-4,
#input-5 {
  animation: sign-in 0.5s ease-out;
}

#input-2,
#input-3,
#input-4,
#input-5 {
  animation-fill-mode: backwards;
}
#input-2 {
  animation-delay: 0.2s;
}
#input-3 {
  animation-delay: 0.4s;
}
#input-4 {
  animation-delay: 0.6s;
}
#input-5 {
  animation-delay: 0.8s;
}

.form-input:focus {

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