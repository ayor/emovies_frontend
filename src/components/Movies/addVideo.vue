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
    }
  },
   beforeRouteEnter(to, from, next) {
    const expiresIn = localStorage.getItem("expiresIn");
    let expDate = Date.parse(expiresIn);
    if (expDate) {
      if (expDate > Date.now()) {
        next();
      }else{
  next("/login");
      }
    
    } else {
      next("/login");
    }
  }
};
// );
</script>
<style scoped>
.pBody {
  border: 1px solid #ccc;
}
</style>