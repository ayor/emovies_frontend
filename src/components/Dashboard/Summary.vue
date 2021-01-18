<template>
  <div class="row mt-5 pt-2">
    <div class="col-12 col-lg-4">
      <div class="card mt-3 mx-2">
        <div class="card-header">
          <h1 class="card-title lead font-weight-bold">Total Orders</h1>
        </div>
        <div class="card-body">
          <div class="card-text d-flex justify-content-between">
            <p class="h2">{{getUserDetail['orders'].length}}</p>
            <i class="fa fa-line-chart fa-2x text-danger"></i>
          </div>
        </div>
        <div class="card-footer">
          <i class="fa fa-refresh text-muted"></i> Refresh
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-4">
      <div class="card mt-3 mx-2">
        <div class="card-header">
          <h1 class="card-title lead font-weight-bold">Saved Videos</h1>
        </div>
        <div class="card-body">
          <div class="card-text d-flex justify-content-between">
            <p class="h2">20</p>
            <i class="fa fa-play fa-2x text-danger"></i>
          </div>
        </div>
        <div class="card-footer">
          <i class="fa fa-refresh text-muted"></i> Refresh
        </div>
      </div>
    </div>
    <div class="col-12  col-lg-4">
      <div class="card mt-3 mx-2">
        <div class="card-header">
          <h1 class="card-title lead font-weight-bold">Cart</h1>
        </div>
        <div class="card-body">
          <div class="card-text d-flex justify-content-between">
            <p class="h2">{{Carts.length}}</p>
            <i class="fa fa-shopping-cart fa-2x text-danger"></i>
          </div>
        </div>
        <div class="card-footer">
          <i class="fa fa-refresh text-muted"></i> Refresh
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
 import {mapGetters} from 'vuex';

export default {
  computed:{
    ...mapGetters(['getUserDetail', "Carts"])
  }
};
</script>