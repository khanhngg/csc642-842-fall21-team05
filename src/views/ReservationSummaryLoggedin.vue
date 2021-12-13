<template>
  <div class="container reservation-container">
    <div class="row r-container-header">
      <div class="col-md-8">
        <p class="header-title fw-medium fs-4">Thanks {{ user.firstname }} !</p>
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
      <div class="row card-body-2 mt-2 mb-3">
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

      <!-- temp. fix. Not ideal -->
      <div class="row">
        <div class="col-md-4 col-lg-5"></div>
        <div class="col-md-8 col-lg-6">
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <!-- Button trigger modal -->
            <button
              class="
                btn btn-secondary-theme
                me-md-2
                text-uppercase
                fw-bold
                px-lg-4
              "
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#cancelModal"
            >
              cancel reservation
            </button>

            <!-- Modal -->
            <div
              class="modal fade"
              id="cancelModal"
              tabindex="-1"
              aria-labelledby="cancelModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title fw-bold" id="cancelModalLabel">
                      Cancel Reservation
                    </h5>
                    <button
                      type="button"
                      class="btn-close btn-close-white"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body mt-3 mb-4">
                    Are you sure you want to cancel this reservation?
                  </div>
                  <div class="modal-footer border-0">
                    <button
                      type="button"
                      class="
                        btn btn-secondary-theme btn-sm
                        text-uppercase
                        fw-bold
                      "
                      data-bs-dismiss="modal"
                    >
                      no, keep reservation
                    </button>
                    <button
                      type="button"
                      class="
                        btn btn-primary-theme btn-sm
                        text-uppercase
                        fw-bold
                      "
                      data-bs-dismiss="modal"
                      @click="
                        $router.push('/reservation/summary/loggedin/canceled')
                      "
                    >
                      yes, cancel reservation
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <router-link
              class="btn btn-primary-theme text-uppercase fw-bold px-lg-4"
              type="button"
              :to="{ name: 'Search' }"
              >modify reservation</router-link
            >
            <!-- <button
              class="
                btn btn-secondary-theme
                me-md-2
                text-uppercase
                fw-bold
                px-lg-4
              "
              type="button"
              
            >
              cancel reservation
            </button> -->

            <!-- <button
              class="
                btn btn-primary-theme
                text-uppercase 
                fw-bold 
                px-lg-4
              "
              type="button"
            >
              modify reservation
            </button> -->
          </div>
        </div>
      </div>
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
      user: {
        firstname: "Joe",
      },
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

<style scoped>
.modal-header {
  color: var(--white);
  background-color: var(--main-theme-color);
}

.btn .btn-close {
  color: white;
}
</style>
