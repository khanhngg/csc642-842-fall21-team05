<template>
  <div class="container reservation-container">
    <div class="row r-container-header">
      <div class="col-md-8">
        <p class="header-title fw-bold fs-4">Reservation Canceled</p>
        <p class="header-body fw-bolder">
          Confirmation Number:
          <span class="reservation-number ms-3 fw-normal">{{
            this.carRental.reservationId
          }}</span>
        </p>
      </div>
      <div class="col d-flex justify-content-end align-self-center">
        <button
          class="btn btn-primary-theme btn-edit fw-bold text-uppercase"
          type="button"
          @click="$router.push('/')"
        >
          start new reservation
        </button>
      </div>
    </div>
    <!-- close r-container-header -->

    <div class="card r-container-body px-5 py-3 mt-2">
      <div class="card-title fw-bold text-uppercase mb-4">reservation info</div>
      <div class="row card-body-1 ps-0 pb-2 mb-2 border-bottom">
        <!-- PICKUP -->
        <div class="col-sm-12 col-lg-6 mb-2">
          <p class="card-subtitle fw-bolder">Pickup</p>
          <p class="card-text mt-2 mb-2">
            <i class="fas fa-map-marker-alt"></i>
            {{ carRental.pickupLocation }}
          </p>
          <p class="card-text">
            <i class="far fa-calendar-alt"></i>
            {{ carRental.pickupDate }} @ {{ carRental.pickupTime }}
          </p>
        </div>
        <!-- RETURN -->
        <div class="col-sm-12 col-lg-6">
          <p class="card-subtitle fw-bolder">Return</p>
          <p class="card-text mt-2 mb-2">
            <i class="fas fa-map-marker-alt"></i>
            {{ carRental.returnLocation }}
          </p>
          <p class="card-text">
            <i class="far fa-calendar-alt"></i>
            {{ carRental.returnDate }} @ {{ carRental.returnTime }}
          </p>
        </div>
      </div>
      <!-- close card-body-1 -->

      <!-- Vehicle Description -->
      <div class="row card-body-2 mt-2">
        <div class="card-subtitle fw-bolder mb-2">Vehicle</div>
        <div class="col-sm-12 col-lg-6">
          <p class="card-text fw-medium mb-0">{{ car.type }}</p>
          <p class="card-text fw-medium text-uppercase mb-1">
            {{ car.make }} {{ car.model }}
          </p>
          <p class="card-text mb-1">
            {{ car.seat }} seats
            <i class="mx-2 fas fa-circle" style="font-size: 7px"></i>
            {{ car.suitcase }} suitcases
          </p>
          <p class="card-text fw-light mb-0">
            <small><i class="fas fa-leaf"></i></small>
            <small> Eco-friendly</small>
          </p>
          <p class="card-text fw-light">
            <small><i class="fas fa-hand-sparkles"></i></small>
            <small> Enhanced cleaning</small>
          </p>
          <hr class="mb-1" style="max-width: 45px" />
          <p class="card-text mb-3">
            <small class="text-muted">{{ car.description }}</small>
          </p>
        </div>
        <!-- Vehicle Image -->
        <div class="col-sm-12 col-md-8 col-lg-5">
          <img
            src="../assets/hero-image.jpg"
            class="img-fluid rounded"
            alt="Car Image"
          />
        </div>
      </div>
      <!-- close card-body-2 -->
    </div>
    <!-- close r-container-body -->
  </div>
  <!-- close reservation-container -->
</template>

<script>
export default {
  name: "ReservationSummaryGuest",
  data() {
    return {
      carRental: {
        reservationId: 1234567890,
        pickupDate: "October 24, 2021",
        pickupTime: "10:30 AM",
        returnDate: "October 31, 2021",
        returnTime: "9:00 PM",
        pickupLocation: "1600 Holloway Ave, San Francisco, CA 94132",
        returnLocation: "1600 Holloway Ave, San Francisco, CA 94132",
        price: 350,
        status: true,
      },
      car: {
        type: "Sedan",
        make: "Toyota",
        model: "Camry",
        seat: 5,
        suitcase: 2,
        description:
          "An excellent mix of price and performance, our eco class is the way to go.",
      },
    };
  },
};
</script>

<style scoped></style>
