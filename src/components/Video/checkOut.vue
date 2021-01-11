<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="form-group mt-3">
            <select class="custom-select custom-select-sm" v-model="selectedVideo">
              <option disabled selected>Select Video of your choice</option>
              <option
                v-for="(video, index) in videos"
                :value="video"
                :key="video[index]"
              >{{video.title}}</option>
            </select>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="qty">Select Qty</label>
                <br />
                <input type="number" v-model="requestedStock" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="Format">Format</label>
                <br />
                <select class="custom-select custom-select-sm" v-model="selectedFormat">
                  <option selected disabled>Select an Option</option>
                  <option
                    v-for="(format, index) in Formats"
                    :key="index"
                    :value="format"
                  >{{format.formats}}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <transition>
                <div class="alert alert-info" v-show="message!=''">{{message}}</div>
              </transition>

              <button class="btn btn-primary my-3" @click="checkOut">Check Out Video</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  data() {
    return {
      videos: [],
      selectedFormat: "",
      selectedVideo: {},
      requestedStock: "",
      message: "",
      Formats: [],
      customers: [],
      style: {
        color: ""
      }
    };
  },
  props: {
    user: Object
  },
  methods: {
    // checkOut() {
    //   /* 
    //     - Oncheck Out, get the userid, videoId, VideoName, format, and rentedQty
    //   */
    //   let rentalData = {
    //     VideoID: this.selectedVideo.id,
    //     CustomerID: this.user.id,
    //     VideoTitle: this.selectedVideo.title,
    //     CustomerName: this.user.name,
    //     RentedQuantity: this.requestedStock,
    //     RentalDate: new Date(),
    //     ReturnDate: null
    //   };

    //   // Post data to api
    //   this.$http
    //     .post("https://localhost:44351/api/Rental", rentalData)
    //     .then(res => {
    //       if (res.status == 200) {
    //         this.message = "Check Out Successful";
    //         this.style.color = "Green";
    //       } else {
    //         this.message = "An error Occured";
    //         this.style.color = "red";
    //       }
    //     })
    //     .catch(err => {
    //       alert(err);
    //     });
    //   setTimeout(() => {
    //     this.selectedVideo = "";
    //     this.selectedFormat = "";
    //     this.requestedStock = "";
    //     this.message = "";
    //   }, 3000);
    // },
    // getFormats() {
    //   axios
    //     .get("https://localhost:44351/api/Formats")
    //     .then(res => {
    //       this.Formats = [...res.data];
    //     })
    //     .catch(err => {
    //       alert(err);
    //     });
    // },
    // getVideos() {
    //   axios
    //     .get("https://localhost:44351/api/video")
    //     .then(res => {
    //       this.videos = [...res.data];
    //     })
    //     .catch(err => {
    //       alert(err);
    //     });

    //   //this.$emit('getVideoList',videoList)
    // },

    // getCustomers() {
    //   axios
    //     .get("https://localhost:44351/api/customer")
    //     .then(res => {
    //       this.customers = [...res.data];
    //     })
    //     .catch(err => {
    //       alert(err);
    //     });

    //   // this.$emit('getCustomers',customerList)
    // }
  }
};
</script>
<style scoped>
.fade-enter{
opacity: 0;
}
.fade-enter-active{
  transform: opacity 1s;
}
.fade-leave{

}
.fade-leave-active{
  opacity: 1;
}
</style>