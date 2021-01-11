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
          <th>ID</th>
          <th>Order Date</th>
          <th>Total($)</th>
          <th>Invoice</th>
        </thead>

        <tbody class="table-body">
          <tr v-for="order in getUserDetail['orders']" :key="order._id">
            <td>####</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-12 col-lg-6">
      <div class="my-3" v-if="getUserDetail['cart'].length < 1">
        <p class="text-muted text-center lead font-weight-bold"> You need to add items to your cart...</p>
      </div>
      <table v-else class="table table-bordered table-hover">
        <caption>
          Cart Items
        </caption>
        <thead class="thead-dark">
          <th>Movie title</th>
          <th>Qty</th>
          <th>Unit price($)</th>
          <th>Sum($)</th>
        </thead>

        <tbody class="table-body">
          <tr v-for="order in getUserDetail['orders']" :key="order._id">
            <td>####</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getUserDetail"]),
  },
};
</script>
<style scoped>
</style>