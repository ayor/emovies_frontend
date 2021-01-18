<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <app-top-nav location="movies"></app-top-nav>

        <div class="row mt-3">
          <div class="col-12 col-md-6 col-lg-6">
            <img
              class="rounded img-display"
              :src="getImage(Video.imageUrl)"
              alt="Card image cap"
            />
          </div>
          <div class="col-12 col-md-6 text-center py-3 col-lg-6">
            <h3 class="display-md-3 display-1 font-weight-bold text-muted">
              {{ Video.title }}
            </h3>
            <!-- selects the first 15 characters of the description  -->
            <h2 class="h2 font-weight-bold">${{ Video.price ? Video.price.toFixed(2) : null }}</h2>
            <p class="lead my-3">
              {{ Video.description }}
            </p>
            <button
              data-target="#alert"
              data-toggle="alert"
              class="btn btn-dark w-75"
              @click="addToCart(Video)"
            >
              <i class="fa fa-shopping-basket mr-3"></i> Add to Cart
            </button>
            <small class="text-muted font-weight-bold d-block my-3"
              ><b>Delivery time depends on timezone and location </b></small
            >
            <div
              v-show="added_to_cart"
              id="alert"
              class="mt-2 alert alert-success alert-dismissible added-alert fade show"
              role="alert"
            >
              Added to Cart
              <button
                @click="toggleCartStatus"
                type="button"
                class="close"
                aria-label="Close"
              >
                <span aria-hidden="true"><i class="fa fa-times"></i></span>
              </button>
            </div>
          </div>
        </div>
        <div class="row border-top border-bottom mt-3">
          <div class="col text-center">
            <h3 class="lead my-2 text-muted">Videos you may like</h3>
            <div class="d-md-flex justify-content-center">
              <div
                @click="navigateToPage(video._id)"
                v-for="video in similarVideos"
                :key="video.movieID"
                class="m-3 col-lg-2 col-md-2 col-12 h-25 vid-sim"
              >
                <img
                  :src="getImage(video.imageUrl)"
                  class="card-img-top"
                  height="230"
                  :alt="video.title + ' image'"
                />
                <h6 class="card-title">{{ video.title }}</h6>
                <p class="card-text font-weight-bold">
                  ${{ video.price ? video.price.toFixed(2) : null }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopNav from "../TopNav";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      Video: {},
      similarVideos: [],
    };
  },
  computed: {
    ...mapGetters(["added_to_cart","getVideoDetails"]),
  },
  methods: {
    ...mapActions(["addToCart", "toggleCartStatus"]),
    navigateToPage(id) {
      this.getVideo(id);
    },
    getVideo(id) {
      axios.get("http://localhost:8080/api/video/" + id).then((res) => {
       
        this.Video = { ...this.getVideoDetails, ...res.data.video };
      });

      axios.get("http://localhost:8080/api/video").then((res) => {
        let data = [...res.data.videos];
        this.similarVideos = data
          .filter(
            (el) => el.year == this.Video.year && el._id !== id
          )
          .splice(0, 5);
      });
    },
    getImage(path){
        
        return 'http://localhost:8080/'+ path
    }
  },
  components: {
    appTopNav: TopNav,
  },
  mounted() {
    this.getVideo(this.$route.params.id);
  },
};
</script>
<style scoped>
.vid-sim:hover {
  cursor: pointer;
}
.added-alert {
  animation: showAlert 2s ease-in-out;
  transition: all;
}
.img-display {
  width: 500px;
  height: 740px;
}
@media (max-width: 1024px) {
  .img-display {
    width: 350px;
    height: 500px;
  }
}
@media (max-width: 750px) {
  .img-display {
    width: 350px;
    height: 500px;
  }
}
@media (max-width: 575px) {
  .img-display {
    width: 250px;
    height: 500px;
  }
}

@keyframes showAlert {
  0% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>