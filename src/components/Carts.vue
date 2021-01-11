<template>
  <div>
    <app-top-nav location="carts"></app-top-nav>
    <div
      class="modal fade"
      id="checkout"
      tabindex="-1"
      role="dialog"
      aria-labelledby="checkoutTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title" id="checkoutTitle">
              <h5>Checkout</h5>
              &nbsp;&nbsp;&nbsp;
              <h5>Total : ${{total}}</h5>
            </div>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="card p-3 my-2">
              <div class="card-title _ct">
                <h6>Shipping Info</h6>
              </div>
              <div class="card-body _cdBody">
                <h6>Deliver to this address</h6>
                <!-- <h6>{{.name}}</h6>
                <h6>{{.address}}</h6> -->
              </div>
            </div>
            <div class="card p-3 my-2">
              <div class="card-title _ct">
                <h6>Payment Method</h6>
              </div>
              <div class="card-body _cdBody">
                <!-- <p>{{.name}}</p>
                <p>{{.address}}</p>-->

                <label for="raidoButton">
                  <input
                    type="radio"
                    name="radioButton"
                    checked
                    class="_rdButton"
                  />
                  Pay on delivery</label
                >
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger w-100"
              data-dismiss="modal"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="cart text-center pt-1 mt-5">
      <div class="headers d-flex justify-content-around p-3">
        <h6>ITEM</h6>
        <h6>TITLE</h6>
        <h6>SUB-TOTAL</h6>        
        <h6>Remove Item</h6>        
      </div>
      <div v-for="(video, index) in Carts" :key="video.movieID" class="d-flex">
        <div class="img py-3 ">
          <img :src="returnImgUrl(video.imageUrl)" class="image rounded"  height="100" width="80" />
        </div>
        <div class="title">
          <h6>{{ video.title }}</h6>
        </div>
        <div class="unitprice">
          <p>
            <b>${{ video.price ? (video.price * video.qty).toFixed(2) : null }}</b>
          </p>
          <div class="input-group">
            <div class="input-group-prepend">
              <button class="input-group-text" @click="decrementQty(video)">
                -
              </button>
            </div>

            <input type="number" class="form-control" v-model="video.qty" />
            <div class="input-group-append">
              <button class="input-group-text" @click="incrementQty(video)">
                +
              </button>
            </div>
          </div>
        </div>
        <div class=" delete m-auto">
          <i class="fa fa-times fa-2x" @click="deleteItem(index)">          
          </i>
        </div>
      </div>
      <div class="total d-flex justify-content-end p-2">
        <h3>Total:</h3>
        &nbsp;&nbsp;&nbsp;
        <h3>${{ total }}</h3>
      </div>
      <div class="checkout_area d-flex justify-content-end">
        <router-link to="/" class="btn btn-primary"
          >Continue Shopping</router-link
        >
        <!-- proceed to checkoout button pops up the modal checkout modal view -->
        <button
          class="btn btn-warning"
          v-if="true"
          data-toggle="modal"
          data-target="#checkout"
        >
          Proceed to Checkout
        </button>
        <router-link to="/login" class="btn btn-light" v-else
          >Login to CheckOut</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import TopNav from "./TopNav";
import { mapGetters } from "vuex";
export default {
  components: {
    appTopNav: TopNav,
  },
  data() {
    return {
      changedDays: false,
      selected: [],
      qty: 1,
      total: 0,
    };
  },
  computed: {
    ...mapGetters(["Carts"]),
  },
  methods: {
    returnImgUrl(path) {
      return `http://localhost:8080/${path}`;
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

      this.total = sum.toFixed(2);
    },
    incrementQty(video) {
      let newqty = video.qty + 1;
      this.$store.dispatch("updateCartItemAction", { ...video, qty: newqty });
    },
    decrementQty(video) {
      if (video.qty == 1) {
        return;
      }
      let newqty = video.qty  - 1;
      this.$store.dispatch("updateCartItemAction", { ...video, qty: newqty });
    },
  },
  created() {
    this.calculateTotal();
  },

  mounted() {
    this.selected = [...this.Carts];
    // this.calculateTotal();
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
.cart > div {
  box-shadow: 4px 4px 8px 2px rgb(224, 220, 220);
  margin: 1% 20% 1%;
}
.cart > aside {
  margin: 2% 20% -1%;
  color: rgb(179, 174, 174);
}
.cart > div > div {
  width: 20%;
}
.img {
  margin: 1% 0% !important;
  /* padding: 0 5%; */
}
.title {
  border-right: 1px solid rgb(223, 220, 220);
  border-left: 1px solid rgb(223, 220, 220);
  padding: 0.5% 3%;
}
.title > h6 {
  margin: 30% auto;
  text-align: center;
}
h3 {
  font-style: oblique;
  font-weight: bolder;
  color: rgb(134, 9, 97);
}
.unitprice > p {
  color: darkorange;
  font-size: 18px;
  width: 100%;
}
.unitprice {
  padding: 4% 5%;
  border-right: 1px solid rgb(223, 220, 220);
}
.subtotal {
  padding: 4% 5%;
  border-right: 1px solid rgb(223, 220, 220);
  font-size: 18px;
  font-weight: bold;
  color: darkorange;
}

.days {
  padding: 4% 3%;
  border-right: 1px solid rgb(223, 220, 220);
}
.checkout_area {
  background-color: rgb(223, 222, 222);
  margin: 2% auto;
  box-shadow: 4px 4px 8px 2px rgb(153, 135, 135);
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
.delete{
  cursor: pointer;
}
</style>