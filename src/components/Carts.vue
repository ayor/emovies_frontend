<template>
  <div>
    <app-top-nav location="carts"></app-top-nav>
    <div class="row _cart mt-2 p-5 vh-75">
      <div class="col-12 col-md-8 col-xl-9 col-lg-8">
        <div class="cart_details">
          <p class="h3 text-dark">Shopping Cart</p>
          <div class="d-flex headers justify-content-between p-3">
            <h6 class="lead text-dark w-100">Item Details</h6>
            <h6 class="lead text-dark text-right w-100">Qty</h6>
            <h6 class="lead text-dark text-right w-100">Price</h6>
            <h6 class="lead text-dark text-right w-100">TOTAL</h6>
          </div>
          <div class="items_area">
            <p class="lead my-5" v-if="Carts.length == 0">
              Your cart is currently empty...
            </p>

            <div
              v-else
              v-for="video in Carts"
              :key="video._id"
              class="d-flex border-bottom justify-content-between align-items-center"
            >
              <div class="img d-flex py-3">
                <img
                  :src="returnImgUrl(video.imageUrl)"
                  class="image rounded mr-3"
                  height="120"
                  width="120"
                />
                <div class="d-flex flex-column">
                  <p class="text-muted h6 mb-2"> Title: {{ video.title }}</p>
                  <p class="text-muted h6 mb-2"> Year: {{ video.year }}</p>
                  <p class="text-muted h6 mb-2"> Id: {{ video._id }}</p>
                  <a class="text-danger h6 delete mt-2" @click="deleteItem(index)">Remove item</a>
                </div>
              </div>
              <div class="title text-center">
                <h6 class="h4 text-dark font-weight-bold">
                 <div class="input-group w-50 mx-auto">
                  <div class="input-group-prepend">
                    <button
                      class="input-group-text"
                      @click="decrementQty(video)"
                    >
                      -
                    </button>
                  </div>

                  <input
                    type="number"
                    class="form-control text-center"
                    v-model="video.qty"
                  />
                  <div class="input-group-append">
                    <button
                      class="input-group-text"
                      @click="incrementQty(video)"
                    >
                      +
                    </button>
                  </div>
                </div>
                </h6>
              </div>
              <div class="unitprice   d-flex flex-column">
                <div>
                  <p class="font-weight-bold mr-5 pr-5 text-muted lead">
                    ₦{{
                      video.price
                    }}
                  </p>
                </div>
              </div>
              <div class="unitprice  d-flex flex-column">
                <div >
                  <p class="font-weight-bold  text-primary mr-2 lead">
                    ₦{{
                      (video.price * video.qty).toFixed(2)
                    }}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <router-link to="/movies" class="text-muted">Continue Shopping</router-link>
      </div>
      <div class="col-12 col-md-4 col-xl-2 col-lg-3 checkout_area">
        <div class="d-flex flex-column h-100">
          <div class="form h-75">
            <h1 class="h4 ml-2 my-4 ">Order Summary</h1>
            <hr>
 
             <div class="row my-3">
               <div class="col">
                 <p class="h6">
                   
                  Videos:
                   
                 
                   
                   {{Carts.length}}
                   
                  </p>
                </div>
               
             </div>
             <div class="row my-3">
               <div class="col">
                 <p class="h6">
                   
                  Total:
                   
                 
                   
                   ₦{{getTotal}}
                   
                  </p>
                </div>
               
             </div>
             <hr>
             <div class="row my-3">
               <div class="col">
                 <p class="h6 mb-3">Shipping Method</p>
                <select name="" id="" class="custom-select custom-select-sm" v-model="shippingFee">
                  <option value="4">Standard Shipping ₦4</option>
                  <option value="10">Fast Shipping ₦10</option>
                </select>
                </div>
               
             </div>
             <hr>
            <!-- * 100 -->

          </div>
                      <paystack
                      v-if="getUserDetail['email']"
              :amount="parseInt(getTotal*100)"
              :email="getUserDetail['email']"
              :paystackkey="get_paystack_details['PUBLIC_KEY']"
              :reference="reference"
              :callback="processPayment"
              :close="get_paystack_details['close']"
              class="btn btn-dark w-100 mt-5"
            >
              Pay ₦{{getTotal}}
            </paystack>
            <router-link to="/login" class="btn btn-dark mt-5" v-else
            >Login to CheckOut</router-link
          >
          <!-- <div class="total d-flex justify-content-end p-2">
            <h3>Total:</h3>
            &nbsp;&nbsp;&nbsp;
            <h3>₦{{ total }}</h3>
          </div> -->

          <!-- proceed to checkoout button pops up the modal checkout modal view -->
          <!-- <button
            class="btn btn-warning"
            v-if="true"
            data-toggle="modal"
            data-target="#checkout"
          >
            Proceed to Checkout
          </button>
           -->
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>
<script>
import TopNav from "./TopNav";
import { mapGetters, mapActions } from "vuex";
import paystack from "vue-paystack";
import appFooter from './Lapa/footer'
export default {
  components: {
    appTopNav: TopNav,
    paystack,
    appFooter
  },
  data() {
    return {
      changedDays: false,
      selected: [],
      qty: 1,
      email: "dosumuayomide@gmail.com",
     shippingFee: 4
    };
  },
  computed: {
    ...mapGetters(["Carts",
     "get_paystack_details",
     "getUserDetail",
     "getTotal"]),
    
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
  },
  methods: {
    ...mapActions(["processPayment"]),
    returnImgUrl(path) {
      return `https://emovies-ng-api.herokuapp.com/${path}`;
    },
    changeCartItem(event, cart, index) {
      const selectedDay =
        event.currentTarget.options[event.currentTarget.selectedIndex].value;

      const cartObject = this.selected[index];

      cartObject.days = selectedDay;
    },

    getSelectedPrice(ind) {
      const selectedCart = this.selected.find((element, index) => index == ind);

      return parseInt(selectedCart.days);
    },

    deleteItem(index) {
      this.$store.dispatch("removeCart", index);
    },

    subTotal(price, index) {
      return price * this.getSelectedPrice(index);
    },

    calculateTotal() {
      let sum = 0;
      this.Carts.forEach((element) => {
        element.subTotal = element.price * element.qty;
        sum += element.subTotal;
      });

      this.$store.commit('UPDATE_TOTAL', (+sum + +this.shippingFee).toFixed(2))
      this.$store.commit('UPDATE_SHIPPING_FEE', (+this.shippingFee).toFixed(2))
     // this.total = (+sum + +this.shippingFee).toFixed(2);
    },
    incrementQty(video) {
      let newqty = video.qty + 1;
      this.$store.dispatch("updateCartItemAction", { ...video, qty: newqty });
    },
    decrementQty(video) {
      if (video.qty == 1) {
        return;
      }
      let newqty = video.qty - 1;
      this.$store.dispatch("updateCartItemAction", { ...video, qty: newqty });
    },
  },
  created() {
    this.calculateTotal();
  },

  updated() {
    this.calculateTotal();
  },
};
</script>
<style scoped>
._cdBody {
  padding: 0 !important;
}
label {
  font-size: 20px;
  vertical-align: middle;
  color: rgb(71, 45, 45);
}
input[type="radio"] {
  vertical-align: middle;
  margin-right: 10px;
}
._ct {
  border-bottom: 1px solid rgb(95, 35, 35);
}
.cart {
  height: 2%;
  margin-bottom: 2%;
}
._cart {
  margin-top: 7% !important;
}
.headers {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.cart_details {
  margin: 1% auto;
  padding: 2%;
  height: 500px;
  overflow: auto;
  border-radius: 1%;
  /* box-shadow: 4px 4px 8px 2px rgb(190, 176, 176); */
}
.cart > div > div {
  width: 20%;
}
.img {
  margin: 1% 0% !important;
  /* padding: 0 5%; */
}

/* .title > h6 {
  margin: 30% auto;
  text-align: center;
} */
h3 {
  font-style: oblique;
  font-weight: bolder;
  color: rgb(134, 9, 97);
}
/* .unitprice > p {
  color: darkorange;
  font-size: 18px;
  width: 100%;
}
.unitprice {
  padding: 4% 5%;
} */
.subtotal {
  padding: 4% 5%;
  border-right: 1px solid rgb(236, 231, 231);
  font-size: 18px;
  font-weight: bold;
  color: darkorange;
}

.checkout_area {
  background-color: #eee;
  margin: 1% auto;
  height: 500px;
  box-shadow: 1px 2px 4px 1px rgb(153, 135, 135);
}
.checkout_area > a,
.checkout_area > button {
  margin: 1%;
  box-shadow: 4px 4px 8px 2px rgb(78, 78, 78);
}

.qty > input {
  width: 30%;
  height: 30%;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.delete {
  cursor: pointer;
}
</style>