<template>
  <div>
    <div class="container">
      <div class="rol">
        <div class="col">
          <table class="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Format</th>
                <th>Qty Rented</th>
                <th>Rented Date</th>
                <th>Return Date</th>
                <th>X</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(video, index) in videos" :key="index">
                <td aria-placeholder="title">{{video.videoTitle}}</td>
                <td aria-placeholder="format">{{video.videoFormat}}</td>
                <td aria-placeholder="stock">{{video.rentedQuantity}}</td>
                <td aria-placeholder="stock">{{video.rentalDate}}</td>
                <td aria-placeholder="stock">{{video.returnDate}}</td>
                <td v-if="video.returnDate == null">
                  <button 
                  class="btn btn-secondary" 
                  @click="checkIn"
                  data-toggle="modal" 
                  data-target="#exampleModalCenter">                  
                   Check In</button>
                </td>
              </tr>
            </tbody>
            <button class="btn btn-primary" >
              <i class="fas fa-back"></i> Back
            </button>
          </table>
        </div>
      </div>
    </div>
    <!-- Modal dialogue -->
    <!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Confirm Check In</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      Confirm you want to Check In <span style="color: green;"><b>{{selectedVideoTitle}}</b></span> ?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="confirmCheckIn">Confrim</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>
<script>
//import axios from 'axios'
export default {
    data(){
        return{
          selectedVideoTitle:'',
          selectedVideoRentalDate:''
        }
    },
    props: {
      videos:Array,
      user: Object
    },
  methods:{
  //  checkIn(event){
  //   // get selected row
  //     let selectedRow = event.target.parentElement.parentElement;


  //     this.selectedVideoTitle = selectedRow.firstElementChild.textContent;
  //     this.selectedVideoRentalDate = selectedRow.children[2].textContent

  //  },
  //  confirmCheckIn(){
     
  //    let rentalData = {
  //      CustomerID: this.user.id,
  //      VideoTitle: this.selectedVideoTitle,
  //      RentalDate: this.selectedVideoRentalDate
  //    }

  //    axios(
  //      {
  //        method:"PUT",
  //        url:'https://localhost:44351/api/rental',
  //        data:rentalData
  //      }
  //    )
  //  }
  }
};
</script>
<style scoped>
</style>