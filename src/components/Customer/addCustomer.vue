<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" class="form-control" v-model="userData.name" />
        </div>
        <div class="form-group">
          <label for="address">Address</label>
          <input type="text" id="userAddress" class="form-control" v-model="userData.address" />
        </div>
        <div class="form-group">
          <label for="roles">Role</label><br>
          <select name="roles" v-model="userData.role" class="custom-select custom-select-sm">
            <option>Admin</option>
            <option>Customer</option>
          </select>
        </div>
        <div class="form-group">
          <label for="pasword">Password</label>
          <input type="password" id="custPassWord" class="form-control" v-model="userData.password" />
        </div>
        <div>
          <span style="color: green;" v-if="statusText == 'OK'">
            <p>{{message}}</p>
          </span>
          <span v-else style="color: red">{{message}}</span>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-primary" @click="submit">Submit</button>

    <!-- <button type="submit" class="btn btn-primary" @click.prevent="getData">getData</button> -->
  </div>
</template>

<script>
//import axios from "axios";
// import { threadId } from 'worker_threads';
export default {
  data() {
    return {
      userData: {
       
        name: "",
        address: "",
        password: "",
        role:''
        
      },
      message: "",
      statusText: ""
    };
  },
  methods: {
    // submit() {
      
      
    //       // post user to database
    //       axios.post(
    //           "https://localhost:44351/api/Customer",
    //           this.userData
    //         )
    //         .then(response => {
    //           this.statusText = response.statusText;
    //           if (response.status == 200) {
    //             this.message = "Successfully Added Customer";
    //           } else {
    //             this.message = "Something wrong happened";
    //           }
    //           setTimeout(() => {
    //             (this.userData = {
                  
    //               name: "",
    //               address: "",
    //               password: "",
    //               role:''
                  
    //             }),
    //               (this.message = "");
    //           }, 3000);
    //         });

    // }
  }
};
</script>
<style>
</style>
