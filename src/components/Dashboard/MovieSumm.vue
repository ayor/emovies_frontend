<template>
  <div class="row mt-3 p-2">
    <div class="col-12 col-lg-6">
      <div class="my-3" v-if="getUserDetail['orders'].length < 1">
        <p class="text-center text-muted lead font-weight-bold"> You have made no orders...</p>
      </div>
      <table v-else class="table table-dark table-striped table-hover">
        <caption>
          Top Orders
        </caption>
        <thead class="thead-light">
         
          <th>Paystack Reference</th>
          <th>Order Date</th>
          <th>Total(₦)</th>
          <th>Invoice</th>
        </thead>

        <tbody class="table-body">
          <tr v-for="order in getUserDetail['orders']" :key="order._id">
            
            <td>{{order.paystackReference}}</td>
            <td>{{new Date(order.createdAt).toLocaleString()}}</td>
            <td>₦{{order.total}}</td>
            <td><a  :href="'https://emovies-ng-api.herokuapp.com/invoices/invoice-'+ order._id+'.pdf'" target='_blank'>Download Invoice</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-12 col-lg-6">
      <div class="my-3" v-if="Carts.length < 1">
        <p class="text-muted text-center lead font-weight-bold"> You need to add items to your cart...</p>
      </div>
      <table v-else class="table table-bordered table-hover">
        <caption>
          Cart Items
        </caption>
        <thead class="thead-dark">
          <th>Movie title</th>
          <th>Qty</th>
          <th>Unit price(₦)</th>
          <th>Total(₦)</th>
        </thead>

        <tbody class="table-body">
          <tr v-for="video in Carts" :key="video._id">
            <td>{{video.title}}</td>
            <td>{{video.qty}}</td>
            <td>{{video.price}}</td>
            <td>{{video.price * video.qty}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from 'axios';
export default {
  data(){
    return{
      invoiceLink:''
    }
  },
  computed: {
    ...mapGetters(["getUserDetail","Carts"]),
  },
  methods:{
    getInvoice(orderId){
      const token  = localStorage.getItem('token');

        axios.get('https://emovies-ng-api.herokuapp.com/invoice/invoice-'+ orderId+'.pdf', {
          headers:{
            'Authorization':'Bearer '+ token
          }
        }).
        then(res=> {
          if(res.statusCode === 200){
            this.invoiceLink = 'https://emovies-ng-api.herokuapp.com/invoice/invoice-'+ orderId+'.pdf'
          }
        })
    }
  }
    
};
</script>
<style scoped>
</style>