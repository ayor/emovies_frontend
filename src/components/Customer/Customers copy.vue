<template>
  <div>
    <div v-show="!isVisible">
     <div class="viewCustomerButton">
      <button class="btn btn-primary" @click="getCustomers">View Customers</button>
    </div>
    <div class="list-group customerButtons">
      <!-- <router-link
        
        class="list-group-item list-group-item-action"
        @click="getCustomers"
      >View Customer List</router-link>-->
      <hr />
      <router-link to="/addCustomer" class="list-group-item list-group-item-action">Add Customer</router-link>
      <hr />
      <router-link to="/complaints" class="list-group-item list-group-item-action">File a Complaint</router-link>
    </div>
    <section>
      <div class="footer-copyright text-center py-3">
        <button class="btn btn-primary" @click="navigateHome">Go to Home</button>
      </div>
    </section>
    </div>
   
    <div class="row" v-show="isVisible">
      <div class="col" v-if="customers">
            <app-customer-list :customers="customers"
              v-on:showCustomerPage="isVisible = !isVisible">
      
    </app-customer-list>
      </div>
    </div>

  </div>
</template>    
<script>
import customerList from "./viewCustomer.vue";
//import Axios from 'axios'
//import { eventBus } from './../../main.js';
export default {
  components: {
    appCustomerList: customerList
  },
  props: [],
  data() {
    return {
      ID: this.$route.params.id,
      customers: [],
      isVisible: false
    };
  },
  watch: {
    $route(to) {
      this.ID = to.params.id;
    }
  },
  methods: {
    navigateHome() {
      this.$router.push("/");
    },
    // getCustomers() {
    //   Axios.get("https://videorental-5bce1.firebaseio.com/data.json")
    //   .then(({data})=>{
    //     for(let key in data){
    //       this.customers.push(data[key])
    //     }
    //   })
    //   this.isVisible = !this.isVisible
    // } 
      //this.router.push(`/viewCustomers/${this.customers}`);
    }
};
</script>

<style scoped>
.customerButtons {
  width: 50%;
  margin: 3% 25% 0;
}
.viewCustomerButton {
  margin-left: 25%;
  margin-top: 5%;
}
</style>