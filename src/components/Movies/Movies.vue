<template>
  <div class="row">
    <div class="col">
      <app-top-nav location="movies" class="mb-5"></app-top-nav>
      <button
        type="button"
        ref="modal_btn_ref"
        style="display: none"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <app-modal v-show="errorOccurred"></app-modal>

      <div v-if="getVideos.length < 1 && !errorOccurred" class="row">
        <div class="col my-5 d-flex justify-content-center">
          <span
            class="spinner-border spinner-border-lg text-muted"
            role="status"
          >
            <span class="sr-only">Loading...</span></span
          >
        </div>
      </div>

      <div v-else class="row">
        <transition name="fade">
          <div class="mt-3 col-12 d-flex justify-content-center flex-wrap">
            <!-- v-for="vid in video"  :key="vid.id"-->
            <div
              v-for="(vid, ind) in getVideos"
              :key="ind"
              class="m-3 col-md-4 col-lg-3 col-xl-2 text-center"
              style="width: 28rem"
            >
            <router-link :to="'/movies/' + vid._id">
             <a :href="loaderImage" :class="replace">
                <img
                  :class="imgClass"
                  :src="returnImgUrl(vid.imageUrl)"
                  alt="Card image cap"
                  height="349"
                />
              </a>
            </router-link>
             
              <div class="card-body">
                <h3 class="card-title">{{ vid.title }}</h3>
                <!-- selects the first 15 characters of the description  -->
                <div class=" ">
                  <!-- {{ vid.movieDescription.split(" ").splice(0, 15).join(" ") }} -->

                  <button
                    class="btn btn-outline-success"
                    @click="addToCart({ ...vid, qty: 1 })"
                  >
                    Add to cart ${{vid.price.toFixed(2)}}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <nav aria-label="Page navigation ">
        <ul class="pagination justify-content-center">
          <li class="page-item" v-if="page > 1">
            <a class="page-link" @click="previous" tabindex="-1">Previous</a>
          </li>
          <li class="page-item" v-if="numberOfVideos > 10">
            <a class="page-link" @click="next">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import appTopNav from "../TopNav";
import axios from "axios";
import modal from "../Modal/Modal";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    appTopNav,
    appModal: modal,
  },
  data() {
    return {
      page: 1,
      numberOfVideos: 0,
      showPagination: false,
      loaderImage: "../../assets/img/loader.png",
      replace: "progressive replace",
      imgClass: "card-img-top rounded preview",
      errorOccurred: false,
    };
  },
  computed: {
    ...mapGetters(["getVideos"]),
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/video?page=" + this.page)
      .then(({ data }) => {
        this.setVideosAction([...data.videos]);
        this.numberOfVideos = data.numberOfVideos;
        this.errorOccurred = false;
        setTimeout(() => {
          this.loaderImage = "#";
          this.imgClass = "card-img-top rounded reveal";
        }, 2000);
      })
      .catch((err) => {
        this.loadError();
        throw err;
      });
  },
  methods: {
    ...mapActions(["addToCart", "setVideosAction"]),
    returnImgUrl(path) {
      return `http://localhost:8080/${path}`;
    },
    loadError() {
      this.errorOccurred = true;
      this.$refs["modal_btn_ref"].click();
    },
    previous() {
      if (this.page <= 1) {
        return;
      }
      this.loaderImage = "../../assets/img/loader.png";
      this.imgClass = "card-img-top rounded preview";
      this.page -= 1;
      axios
        .get("http://localhost:8080/api/video?page=" + this.page)
        .then(({ data }) => {
          this.setVideosAction([...data.videos]);
          setTimeout(() => {
            this.loaderImage = "#";
            this.imgClass = "card-img-top rounded reveal";
          }, 2000);
        });
    },
    next() {
      if (this.numberOfVideos <= 10) {
        return;
      }
      this.loaderImage = "../../assets/img/loader.png";
      this.imgClass = "card-img-top rounded preview";
      this.page += 1;
      axios
        .get("http://localhost:8080/api/video?page=" + this.page)
        .then(({ data }) => {
          this.setVideosAction([...data.videos]);
          setTimeout(() => {
            this.loaderImage = "#";

            this.imgClass = "card-img-top rounded reveal";
          }, 2000);
        });
    },
  },
};
</script>
<style scoped>
.fade-enter,
.fade-leave {
  opacity: 0;
  transition: all 8s ease;
}
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all 8s ease;
}
.daily-photo {
  background: url(../../assets/img/sign-up-bg.jpg) no-repeat center / cover;
}
.page-link {
  cursor: pointer;
}
a.progressive {
  
  position: relative;
  display: block;
  overflow: hidden;
  outline: none;
}
a.progressive:not(.replace) {
  cursor: default;
}
a.progressive img {
  display: block;
  width: 100%;
  max-width: none;
  height: auto;
  border: 0 none;
  animation: entry 2.3s ease-in;
}
a.progressive img.preview {
  filter: blur(2vw);
  transform: scale(1.05);
}
img.reveal {
  
  animation: reveal 1.5s ease-out;
  animation-delay: 2.8s;
}

@keyframes reveal {
  0% {
    transform: scale(1.05);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes entry {
  0% {
    transform: translateY(-80px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>