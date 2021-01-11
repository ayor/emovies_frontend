<template>
  <div>
    <div class="container">
      <div class="row">
        <h4>Add Video</h4>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="title">Title</label>
            <input
              class="form-control"
              id="title"
              type="text"
              v-model="videoData.Title"
              :disabled="isDisabled"
            />
          </div>
          <div class="form-group">
            <label for="format">Format</label>
            <br />
            <select
              class="custom-select custom-select-sm"
              v-model="videoData.Format"
              :disabled="isDisabled"
            >
              <option disabled selected>Select an Option</option>
              <option v-for="format in Formats" :key="format">{{format}}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="stock">Stock</label>
            <input
              class="form-control"
              id="stock"
              type="number"
              v-model="videoData.Stock"
              :disabled="isDisabled"
            />
          </div>
          <div v-show="isSubmitted">
            <p v-if="postStatus == '200'" style="color: green;">Successfully Added</p>
            <p v-else style="color: red; ">Something went wrong</p>
          </div>
          <button class="btn btn-primary" @click="preview">Preview!</button>
        </div>
      </div>
      <div class="row my-5" v-show="isPreviewed">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="panel panel-default pBody p-3">
            <div class="panel-heading bg-light">
              <h3 style>Summary</h3>
            </div>
            <div class="panel-body">
              <p>Video Title: {{videoData.title}}</p>
              <p>Video Title: {{videoData.format}}</p>
              <p>Video Title: {{videoData.stock}}</p>
            </div>
            <div class="flex">
              <button class="btn btn-primary mr-4" @click="submit">Submit!</button>
              <button class="btn btn-primary" @click="back">Back!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import Axios from "axios";
export default {
  data() {
    return {
      videoData: {        
        Title: "",
        Format: "",
        Stock: 10
      },
      isPreviewed: false,
      postStatus: "",
      isSubmitted: false,
      isDisabled: false,
      Formats: ["Blueray", "Hd-Rip", "Cam-Rip"]
    };
  },
  methods: {
    preview() {
      switch (this.isPreviewed == false) {
        case this.videoData.Title == "" &&
          this.videoData.Format == "" &&
          this.videoData.Stock <= 0:
          alert(
            "kindly enter the Title of the video\nkindly select the format of the video\nkindly input the quantity of the video"
          );
          break;
        case this.videoData.Title == "":
          alert("kindly enter the Title of the video");
          break;
        case this.videoData.Format == "":
          alert("kindly select the format of the video");
          break;
        case this.videoData.Stock <= 0:
          alert("kindly input the quantity of the video");
          break;
        default:
          this.isPreviewed = true;
          this.isDisabled = true;
          break;
      }
    },
    back() {
      this.isPreviewed = !this.isPreviewed;
      this.isDisabled = !this.isDisabled;
    },
    // submit() {
    //   /*
    //     on submit, 
    //     1- increment the video ID
    //       **get the number of videos available in the repo and store in an array, and increment the array length by 1

    //     2- post the videoData to firebase. 

    //   */
    //   let videoList = [];
    //   var me =this
    //   Axios.get("https://localhost:44351/api/video").then(
    //     ({ data }) => {
    //       for (let key in data) {
            
    //         videoList.push(data[key]);
    //       }
    //       //increment id

        
    //       //post videoData
    //       Axios.post(
    //         "https://localhost:44351/api/video",
    //         this.videoData
    //       ).then(
    //         response => {
    //           this.postStatus = response.status;
    //           // console.log(this.postStatus);
    //         });
    //     }
    //   ),
    //     setTimeout(function displaySuccessMessage() {
    //       me.isSubmitted = true;
    //       setTimeout(function reloadPage() {
    //         //reset page
    //         me.videoData.Title = "";
    //         me.videoData.Format = "";
    //         me.videoData.Stock = 10;
    //         (me.isSubmitted = false), (me.isPreviewed = false),(me.isDisabled = !me.isDisabled);
    //       }, 3000);
    //     }, 1000);
    // }
  }
};
// );
</script>
<style scoped>
.pBody {
  border: 1px solid #ccc;
}
</style>