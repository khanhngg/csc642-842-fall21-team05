<template>
  <div class="home">
    <!-- Pickup/Delivery option -->
    <div class="mb-2">
      <button type="button" class="btn btn-primary-theme">RENT</button>
      <button type="button" class="btn">DELIVERY</button>
    </div>

    <!-- Search bar -->
    <form class="d-flex mb-5">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-primary-theme" type="submit">Search</button>
    </form>

    <!-- How it works section -->
    <section class="mb-5">
      <div class="row">
        <div class="col-12 col-md-6 mb-3">
          <h1>Rent a car today, <br>
            so you can travel more <br>
            & worry less</h1>
          <button type="button" class="btn btn-primary-theme fw-bold">How it works</button>
        </div>
        <div class="col-12 col-md-6">
          <img src="../assets/hero-image.jpg" class="img-fluid" alt="hero image">
        </div>
      </div>
    </section>

    <!-- Deals section -->
    <section class="mb-5">
      <h3 class="fw-bold">Check out our deals today</h3>
      <div class="row gx-5">
        <div class="col">
          <div class="card text-decoration-none" href="#">
            <img src="../assets/deal-image-1.jpg" class="card-img-top" alt="deal image 1">
            <div class="card-body">
              <h5 class="card-title fw-bold">Subaru Outback</h5>
              <p class="card-text fs-2 text-accent fw-bold">$30/day
                <span class="fs-6 fw-normal text-muted text-decoration-line-through">$40/day</span>
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-decoration-none" href="#">
            <img src="../assets/deal-image-1.jpg" class="card-img-top" alt="deal image 1">
            <div class="card-body">
              <h5 class="card-title fw-bold">Subaru Outback</h5>
              <p class="card-text fs-2 text-accent fw-bold">$30/day
                <span class="fs-6 fw-normal text-muted text-decoration-line-through">$40/day</span>
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-decoration-none" href="#">
            <img src="../assets/deal-image-1.jpg" class="card-img-top" alt="deal image 1">
            <div class="card-body">
              <h5 class="card-title fw-bold">Subaru Outback</h5>
              <p class="card-text fs-2 text-accent fw-bold">$30/day
                <span class="fs-6 fw-normal text-muted text-decoration-line-through">$40/day</span>
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-decoration-none" href="#">
            <img src="../assets/deal-image-1.jpg" class="card-img-top" alt="deal image 1">
            <div class="card-body">
              <h5 class="card-title fw-bold">Subaru Outback</h5>
              <p class="card-text fs-2 text-accent fw-bold">$30/day
                <span class="fs-6 fw-normal text-muted text-decoration-line-through">$40/day</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why section -->
    <section class="mb-5">
      <h3 class="fw-bold">Why CarToGo?</h3>
      <div class="row gx-5">
        <div class="col">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>

</style>
