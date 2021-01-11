<template>
  <div>
    <div v-show="isVisible">
      <div class>
        <button class="btn btn-primary viewVideoButton" @click="getVideos">View Videos</button>
      </div>
      <div class="list-group videoButtons">
        <router-link to="/addVideo" class="list-group-item list-group-item-action">Add Video</router-link>
        <br />
        <router-link to="/checkOut" class="list-group-item list-group-item-action">CheckOut Video</router-link>
        <br />
        <router-link to="/checkIn" class="list-group-item list-group-item-action">CheckIn Video</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div v-show="!isVisible">
          <app-video-table :videos="videos" v-on:showVideoPage="isVisible = !isVisible "></app-video-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import videoTable from "./viewVideos";
//import Axios from "axios";

export default {
  data() {
    return {
      isVisible: true,
      videos: []
    };
  },
  components: {
    appVideoTable: videoTable
  },
  methods: {
    // getVideos() {
    //   Axios.get("https://videos-523c6.firebaseio.com/data.json")
    //     .then(response => {

    //       for (var key in response.data) {
    //         this.videos.push(response.data[key]);
    //       }
    //     })
    //     .catch(error => {
    //     alert(error);
    //     });
    //   this.isVisible = !this.isVisible;
    // }
  }
};
</script>
<style scoped>
.videoButtons {
  width: 50%;
  margin: 3% 25% 0;
}
.viewVideoButton {
  margin-left: 25%;
  margin-top: 5%;
}
</style>