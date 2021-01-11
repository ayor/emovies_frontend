<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>X</th>
              </tr>

              <!-- <tr><th></th></tr> -->
            </thead>
            <tbody>
              <tr v-for="customer in customers" :key="customer">
                <td>{{customer.name}}</td>
                <td>{{customer.address}}</td>
                <td>
                  <button class="btn btn-danger" @click="deleteVideo(customer.id)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="btn btn-primary" @click="backToCustomerPage"><i class="fas fa-back"></i>  Back</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    // customers: this.$route.params.customers
    return {

    };
  },
  props: {
    customers: Array
  },
  methods:{
    backToCustomerPage(){
      this.$emit("showCustomerPage")
    },
    async delete(id){
      for(let index = 0; index < this.customers.length; index++) {
      if(this.customers[index].id == id){
        this.customers.splice(index, 1)
      }  
    }
  }
}
}
</script>
<style scoped>
</style>