<template>
  <!-- Menu Tab Bar -->
  <!-- Rental Menu Current - Past -->
  <div class="container rentals-container border border-dark">
      <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-currentRentals-tab" data-bs-toggle="tab" data-bs-target="#nav-currentRentals" type="button" role="tab" aria-controls="nav-currentRentals" aria-selected="true">Current</button>
              <button class="nav-link" id="nav-pastRentals-tab" data-bs-toggle="tab" data-bs-target="#nav-pastRentals" type="button" role="tab" aria-controls="nav-pastRentals" aria-selected="false">Past</button>
          </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
          <!-- Current Rentals Tab -->
        <div class="tab-pane fade show active" id="nav-currentRentals" role="tabpanel" aria-labelledby="nav-currentRentals-tab">
            current

            <!-- <CarRentals :carRentals="carRentals" /> -->


             <!-- List of Rentals -->
            <div class="card row rental-info border border-dark mx-auto">
                <!-- testing data -->
                <!-- <div v-for="carRental in carRentals" :key="carRental.id"> -->
                <div class="card-head row row-1 g-2 border border-primary">
                    <div class="col-md-8">
                        <p class="card-title fw-bold">Reservation Confirmed</p>
                        <p class="card-subtitle">Confirmation Number:
                        <span class="reservation-number fw-bold ms-5">1234567890</span>
                         </p>
                    </div>

                    <div class="col d-grid gap-2 d-flex justify-content-end align-self-center">
                        <!-- TODO -->
                        <!-- route link to Summary Page -->
                        <button class="btn btn-secondary-theme btn-cancel fw-bold me-md-2" type="button" @click="$router.push('/')">CANCEL</button>
                        <!-- TODO -->
                        <!-- route link to Summary Page -->
                        <button class="btn btn-primary-theme btn-edit fw-bold" type="button" @click="$router.push('/')">EDIT</button>
                    </div>
                </div> <!-- close row-1 -->


                <div class="card-body row row-2 border border-dark m-auto">
                <!-- Date & Time -->
                <div class="col-sm-12  col-md 4 col-lg-3">
                    <p class="card-title fw-bold">Pickup</p>
                    <p class="card-text mb-lg-5"><i class="far fa-calendar-alt"></i> October 24, 10:30 AM</p>

                    <p class="card-title fw-bold">Return</p>
                    <p class="card-text mb-3"><i class="far fa-calendar-alt"></i> October 31, 9:00 PM</p>
                </div>

                <!-- Vehicle Description -->
                <div class="col-sm-12 col-md-3 col-lg-3">
                    <p class="card-title fw-bold">Vehicle</p>
                    <p class="card-text mb-0">Sedan</p>
                    <p class="card-text fw-medium text-uppercase mb-lg-5">Toyota Camry</p>
                    
                    <p class="card-title">
                        <button class="btn btn-more fw-medium px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            More Details
                        </button>
                    </p>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            <p class="card-title fw-bold">Pickup</p>
                            <p class="card-text"><i class="fas fa-map-marker-alt"></i> 1600 Holloway Ave, San Francisco, CA 94132</p>

                            <p class="card-title fw-bold">Return</p>
                            <p class="card-text"><i class="fas fa-map-marker-alt"></i> 1600 Holloway Ave, San Francisco, CA 94132</p>

                            <p class="card-title fw-bold">Est. Total</p>
                            <p class="card-text"><i class="fas fa-dollar-sign"></i> 350.00</p>
                        </div>
                    </div>
                </div> <!-- close vehicle description -->

                <!-- Vehicle Image -->
                <div class="col-sm-12 col-md-5 col-lg-4 mx-auto">
                    <img
                    src="../assets/hero-image.jpg"
                    class="img-fluid rounded"
                    alt="Car Image"
                    />
                </div>

                </div> <!-- close row-2 -->
            <!-- </div> close testing data -->
            </div> <!-- close rental-info card -->



        </div> <!-- close current rentals tab -->
        
        
        
        <!-- Past Rentals Tab -->
        <div class="tab-pane fade" id="nav-pastRentals" role="tabpanel" aria-labelledby="nav-pastRentals-tab">
            past
            <CarRentals :carRentals="carRentals" />
        </div> <!-- close past rentals tab -->
    
    </div> <!-- close tab-content --> 

  </div> <!-- close rentals-container -->

  <CarRentals :carRentals="carRentals" />

</template>

<script>
import CarRentals from "@/components/CarRentals";

export default {
    components: {
        CarRentals, 
    },
    data() {
        return {
            carRentals: [
            //     {
            //     id: 1,
            //     reservationId: 1234567890,
            //     pickupDate: "October 24",
            //     pickupTime: "10:30 AM",
            //     returnDate: "October 31",
            //     returnTime: "9:00 PM",
            //     carType: "Sedan",
            //     carMake: "Toyota",
            //     carModel: "Camry",
            //     pickupLocation: "1600 Holloway Ave, San Francisco, CA 94132",
            //     returnLocation: "1600 Holloway Ave, San Francisco, CA 94132",
            //     price: 350,
            //     status: true,
            // },
            // {
            //     id: 2,
            //     reservationId: 1234567890,
            //     pickupDate: "October 24",
            //     pickupTime: "10:30 AM",
            //     returnDate: "October 31",
            //     returnTime: "9:00 PM",
            //     carType: "Sedan",
            //     carMake: "Toyota",
            //     carModel: "Camry",
            //     pickupLocation: "1600 Holloway Ave, San Francisco, CA 94132",
            //     returnLocation: "1600 Holloway Ave, San Francisco, CA 94132",
            //     price: 350,
            //     status: true,
            // },
            // {
            //     id: 3,
            //     reservationId: 1234567890,
            //     pickupDate: "October 24",
            //     pickupTime: "10:30 AM",
            //     returnDate: "October 31",
            //     returnTime: "9:00 PM",
            //     carType: "Sedan",
            //     carMake: "Toyota",
            //     carModel: "Camry",
            //     pickupLocation: "1600 Holloway Ave, San Francisco, CA 94132",
            //     returnLocation: "1600 Holloway Ave, San Francisco, CA 94132",
            //     price: 350,
            //     status: true,
            // },
            ],
        };
    },
    created() {
        this.carRentals = [
            {
                id: 1,
                reservationId: 1234567890,
                pickupDate: "October 24",
                pickupTime: "10:30 AM",
                returnDate: "October 31",
                returnTime: "9:00 PM",
                carType: "Sedan",
                carMake: "Toyota",
                carModel: "Camry",
                pickupLocation: "1600 Holloway Ave, San Francisco, CA 94132",
                returnLocation: "1600 Holloway Ave, San Francisco, CA 94132",
                price: 350,
                status: true,
            },
            {
                id: 2,
                reservationId: 1234567890,
                pickupDate: "October 24",
                pickupTime: "10:30 AM",
                returnDate: "October 31",
                returnTime: "9:00 PM",
                carType: "Sedan",
                carMake: "Toyota",
                carModel: "Camry",
                pickupLocation: "1600 Holloway Ave, San Francisco, CA 94132",
                returnLocation: "1600 Holloway Ave, San Francisco, CA 94132",
                price: 350,
                status: true,
            },
            {
                id: 3,
                reservationId: 1234567890,
                pickupDate: "October 24",
                pickupTime: "10:30 AM",
                returnDate: "October 31",
                returnTime: "9:00 PM",
                carType: "Sedan",
                carMake: "Toyota",
                carModel: "Camry",
                pickupLocation: "1600 Holloway Ave, San Francisco, CA 94132",
                returnLocation: "1600 Holloway Ave, San Francisco, CA 94132",
                price: 350,
                status: true,
            },
        ]
    },
}
</script>

<style scoped>
.rentals-container {
    margin-top: 100px;
}

.btn-cancel, .btn-edit {
    width: 100px;
    padding: 5px;
}

.btn-more, .btn-more:focus {
    color: var(--main-theme-color);
    box-shadow: none;
}

.nav-link {
    color: var(--main-theme-color);
    font-weight: bold;
}

.nav-link:hover {
    color: var(--dark-purple);
}

.active {
    background-color: #F4F4F4; 
}

</style>