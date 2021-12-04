/* eslint-disable */

<template>
  <div class="PaymentResult">

      <h2 class = "col-8">
      <label class = "col-6"> Payment Updated </label><br/>
      
      <div class="field-title" > 
        <label class = "input-title">  Name: </label>
        <label class = "input">&nbsp;{{name}}</label>
        </div><br/>

      

      <div class="field-title" v-if="userStreet"> 
        <label class = "input-title">Address: </label>
       
        <label class = "input"> &nbsp;{{userStreet}} </label>
      
        <label class = "input"> &nbsp;{{userAptNum }} </label>
        
        <label class = "input"> &nbsp;{{userCity }} </label>
          
        <label class = "input"> &nbsp;{{userState}}</label>
        
        <label class = "input"> &nbsp;{{userZipCode}}</label>
      </div>

     
        <label class = "input-title">Card Information: </label><br/>
       
        <label class = "input"> &nbsp; Card Number: {{cardNum}} </label><br/>
      
        <label class = "input"> &nbsp; Expiration Date: {{cardMonth }} / {{cardYear }} </label><br/>
          
        <label class = "input"> &nbsp; Security Code: ***</label><br/>
        
        <div class="field-title" v-if="defaultPay"> 
        <label class = "input"> Set as Default Payment</label><br/>
        </div>
     
    
     
    </h2>
    <div class="row">
      <div class="col-md-10 offset-md-9">
        <button class="btn btn-primary-theme" type="submit">Back To Payments</button>
      </div>
      <div class="col align-self-start">
        <button class="btn btn-primary-theme" type="back" id="backBtn" v-on:click="goBackButton()">Back</button>
        <div class="error-messages" v-if="overallError">{{overallError}}</div><br/>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  
  name: "Update Payment Form Result",
  data() {
    return {
      title: "Update Payment Form",
     
      name: '',

      userStreet: "",
      userAptNum: "",
      userCity: "",
      userState: "",
      userZipCode: "",

      cardNum: "",
      cardMonth: "",
      cardYear: "",
      cardCode: "",
      defaultPay: "",
    }
  },
  methods: {
    goBackButton(){
      this.$router.go(-1);
    },
  },

  async mounted() {
    if (localStorage.lastName) {
      this.name = localStorage.name;
    }
    if (localStorage.userStreet) {
      this.userStreet = localStorage.userStreet;
    }
    if (localStorage.userAptNum) {
      this.userAptNum = localStorage.userAptNum;
    }
    if (localStorage.userCity) {
      this.userCity = localStorage.userCity;
    }
    if (localStorage.userState) {
      this.userState = localStorage.userState;
    }
    if (localStorage.userZipCode) {
      this.userZipCode = localStorage.userZipCode;
    }


    if (localStorage.cardNum) {
      this.cardNum = localStorage.cardNum;
    }
    if (localStorage.cardMonth) {
      this.cardMonth = localStorage.cardMonth;
    }
    if (localStorage.cardYear) {
      this.cardYear = localStorage.cardYear;
    }
    if (localStorage.cardCode) {
      this.cardCode = localStorage.cardCode;
    }
    if (localStorage.defaultPay) {
      this.defaultPay = localStorage.defaultPay;
    }
   
  },
};
</script>

<style scoped>
#backBtn{
  color: black;
  background-color: white;
  border-color: black;
}
.page-title{
  font-size: 125%;
  margin-left: 35%;
  padding: 10px 5px;
  font-weight: 800;
  border-bottom: 3px solid rgb(197, 195, 195);
}
h2 {
  background-color: white;
  border: 1px solid black;
  border-radius: 2%;
  margin-left: 15%;
  margin-right: 15%;
  text-align: left;
  padding: 3%;
}
.input-title{
  font-size: 100%;
  font-weight: 600;
}
.sub-input-title{
  font-style: italic;
  font-size: 100%;
  font-weight: 500;
}
.input{
  font-weight: 300;
  font-style: normal;
   font-size: 95%;
}
.vue-map-container {
  height: 20rem;
}

</style>
