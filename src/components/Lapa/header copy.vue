<template>
  <div>
    <!-- header -->
    <!-- header end -->

    <div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="cartModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Cart Details</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div
                v-for="(cart, index) in Carts"
                :key="cart.id"
                class="my-2 d-flex justify-content-between"
              >
                <div>
                  <img :src="getImgUrl(cart.imageSrc)" height="100" width="80" />
                </div>
                <div style="width: 150px;">
                  <h6>{{cart.title}}</h6>

                  <p style="margin-bottom: 2px;">
                    <b>$ {{cart.price}}</b>
                  </p>
                  <div class="d-flex" style="vertical-align: middle">
                    <label for="days" class="mr-3">
                      <b>Days</b>
                    </label>
                    <select
                      class="custom-select custom-select-sm"
                      name="days"
                      v-model="numberOfDays"
                      style="width: 60px;"
                      @change="changeEventHandler(index)"
                    >
                      <option v-for="range in (range(1,10))" :key="range" :value="range">{{range}}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <button class="btn btn-danger" @click="remove(index)">Remove</button>
                </div>
                <!-- <input type="number" hidden :value="totalPrice = ( [cart.price] * days)">
                <input type="number" hidden >-->
              </div>
            </div>
            <div class="modal-footer d-flex justify-content-between">
              <div class="d-flex justify-content-between">
                <h6 class="mr-5">Total</h6>
                <h6>$ {{totalPrice}}</h6>
              </div>
              <div>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- login popup page -->
    <div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="userLogin"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="userLoginCentered">Log In</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div>
                <div class="login_Panel">
                  <div class="form-group">
                    <label for="username">Username</label>
                    <br />
                    <input
                      type="text"
                      id="email"
                      name="username"
                      placeholder="enter username"
                      class="form-control"
                      v-model="loginDetails.name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <br />
                    <input
                      type="password"
                      id="userPassword"
                      placeholder="password"
                      class="form-control"
                      name="password"
                      v-model="loginDetails.password"
                    />
                  </div>

                  <hr />
                </div>
              </div>
            </div>
            <div class="modal-footer d-flex justify-content-between">
              <button class="btn btn-primary" @click="loginUser">
                <span v-show="spinnerIsVisible" class="spinner-grow spinner-grow-sm" role="status"></span> Login
              </button>
              <button class="btn btn-info">
                <span class="signUpLink">Sign Up here</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import navHeader from "../Lapa/nav";
export default {
  components: {
    navHeader,
  },
  computed: {
    ...mapGetters(["Carts", "loginDetails"]),
  },
  data() {
    return {
      logOnUser: {},
      days: 1,
      totalPrice: 0,
      value: 1,
      numberOfDays: Number,
      spinnerIsVisible: false,
    };
  },
  methods: {
    ...mapActions(["loginUser"]),
    getImgUrl(imgSrc) {
      return require("../../assets/" + imgSrc);
    },
    remove(index) {
      this.$store.dispatch("removeCart", index);
    },
    changeEventHandler(index) {
      let value = this.numberOfDays;
      this.$store.dispatch("updateDay", { index, value });
    },
    range(start, end) {
      let arr = [];
      for (let i = start; i <= end; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  updated() {
    let sum = 0;
    this.Carts.forEach((element) => {
      sum += element.price * element.days;
    });
    this.totalPrice = sum;
    // this.logOnUser = { ...this.$store.getters.authorizedUser };
  },
};
</script>
<style scoped>
/* navbar */
#counter {
  background-color: orange;
  border-radius: 50%;
  padding: 1px 7px 3px;
  color: white;
}
.headerToggles:hover {
  cursor: pointer;
  background-color: #eee;
}
h6 {
  font-family: fantasy;
}
/* input {
  width: 40px;
  height: 30px;
  text-align: center;
} */
.login_Panel {
  margin: 0 auto;
  background-color: rgb(229, 246, 252);
  padding: 15px;
  width: 100%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

</style>

        <!-- <ul class="navbar-nav">   
                  <span v-if="logOnUser.role == 'admin'">
            <li class="nav-item">
              <router-link to="/customers" class="nav-link">Customers</router-link>
               <a class="nav-link" >Features</a> -->
            <!-- </li> 
          </span>
          <span v-if="logOnUser.role == 'admin'">
            <li class="nav-item">
              <router-link to="/Videos" class="nav-link">Videos</router-link>
            </li>
          </span>
           <span v-if="logOnUser.role == 'admin'"> -->
         
          <!-- </span> 
        </ul>-->

              <ul class="navbar-nav">
        <!-- <li class="nav-item">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </li>-->
        
      //   <li class="nav-item mr-3">
      //     <span class="headerToggles" data-toggle="modal" data-target="#userLogin">
      //       <i class="fa fa-user" aria-hidden="true"></i> Login
      //     </span>
      //   </li>
      //   <li class="nav-item mr-3">
      //     <span class="headerToggles">
      //       <i class="fa fa-search" aria-hidden="true"></i> Search
      //     </span>
      //   </li>
      //   <li class="nav-item">
      //     <span class="headerToggles" data-toggle="modal" data-target="#cartModal">
      //       <i class="fa fa-shopping-cart"></i> Cart
      //       <span id="counter">{{Carts.length}}</span>
      //     </span>
      //   </li>
      // </ul>

       <!-- <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <!-- <span class="navbar-toggler-icon"></span> -->
        </button> -->