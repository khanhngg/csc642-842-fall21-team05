<template>
  <!-- Look Up Reservation -->
  <div class="container lookup-container border rounded-3 my-5 shadow">
    <div class="row lu-container-header my-4">
      <h2 class="col-sm-6 col-lg-8 header-title fw-bold ms-2">
        Look Up a Reservation
      </h2>
      <div class="col-sm-6 col-lg-3 header-button">
        <button
          class="
            btn btn-primary-theme
            fw-bold
            text-uppercase
            w-100
            align-items-center
          "
          type="button"
          @click="$router.push('/')"
        >
          start new reservation
        </button>
      </div>
      <div class="header-text ms-2">
        <small class="fw-bolder">* Required to look up a reservation</small>
      </div>
    </div>

    <div class="lu-container-body ps-5 mb-4">
      <div class="row mb-3">
        <div class="col-sm-6 col-md-12 col-lg-11">
          <label class="form-label">Confirmation Number *</label>
          <input
            v-model="form.reservationId"
            type="text"
            class="form-control"
            placeholder="Enter your confirmation number"
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-lg-5 mb-3">
          <label class="form-label">First Name *</label>
          <input
            v-model="form.firstName"
            type="text"
            class="form-control"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div class="col-sm-6 col-lg-6">
          <label class="form-label">Last Name *</label>
          <input
            v-model="form.lastName"
            type="text"
            class="form-control"
            placeholder="Enter your last name"
          />
        </div>
      </div>
      <!-- TODO route to summary page -->
      <div class="col-sm-12 col-lg-11 p-2 my-2 d-flex justify-content-end">
        <button
          class="btn btn-primary-theme fw-bold text-uppercase w-25"
          type="submit"
          @click="$router.push('/reservation/summary/guest')"
        >
          Search
        </button>
      </div>
    </div>
  </div>
  <!-- close lookup-container -->

  <!-- Code from Home Page -->
  <!-- Deals section -->
  <section class="mb-5">
    <h3 class="fw-bold">Check out our deals today</h3>
    <div class="row gx-5">
      <div class="col-12 col-md-6 col-lg-3 mb-3">
        <div class="card text-decoration-none" href="#">
          <img
            src="../assets/deal-image-1.jpg"
            class="card-img-top"
            alt="deal image 1"
          />
          <div class="card-body">
            <h5 class="card-title fw-bold">Subaru Outback</h5>
            <p class="card-text fs-2 text-accent fw-bold">
              $30/day
              <span
                class="fs-6 fw-normal text-muted text-decoration-line-through"
                >$40/day</span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3 mb-3">
        <div class="card text-decoration-none" href="#">
          <img
            src="../assets/deal-image-1.jpg"
            class="card-img-top"
            alt="deal image 1"
          />
          <div class="card-body">
            <h5 class="card-title fw-bold">Subaru Outback</h5>
            <p class="card-text fs-2 text-accent fw-bold">
              $30/day
              <span
                class="fs-6 fw-normal text-muted text-decoration-line-through"
                >$40/day</span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3 mb-3">
        <div class="card text-decoration-none" href="#">
          <img
            src="../assets/deal-image-1.jpg"
            class="card-img-top"
            alt="deal image 1"
          />
          <div class="card-body">
            <h5 class="card-title fw-bold">Subaru Outback</h5>
            <p class="card-text fs-2 text-accent fw-bold">
              $30/day
              <span
                class="fs-6 fw-normal text-muted text-decoration-line-through"
                >$40/day</span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3 mb-3">
        <div class="card text-decoration-none" href="#">
          <img
            src="../assets/deal-image-1.jpg"
            class="card-img-top"
            alt="deal image 1"
          />
          <div class="card-body">
            <h5 class="card-title fw-bold">Subaru Outback</h5>
            <p class="card-text fs-2 text-accent fw-bold">
              $30/day
              <span
                class="fs-6 fw-normal text-muted text-decoration-line-through"
                >$40/day</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ReservationsLookUp",
  data() {
    return {
      form: {
        reservationId: "",
        firstName: "",
        lastName: "",
      },
    };
  },
};
</script>

<style></style>
