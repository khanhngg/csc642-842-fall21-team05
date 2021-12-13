<template>
  <div class="container my-5">
    <!-- Email Header -->
    <div class="col email-header">
      <label for="emailFrom" class="header-label">From:</label>
      <span
        ><router-link
          class="text-decoration-none fw-bold text-dark"
          :to="{ name: 'Home' }"
        >
          CarToGo</router-link
        >
        &#60;<a href="#">noreply@cartogo.com</a>&#62;</span
      >
    </div>
    <div class="col">
      <label for="emailTo" class="header-label">To:</label>
      <span>
        &#60;<a class="text-muted" href="#">joedoe@email.com</a>&#62;</span
      >
    </div>
    <div class="col">
      <label for="emailDate" class="header-label">Date:</label>
      <span> October 20, 2021 at 11:00 AM</span>
    </div>
    <div class="col">
      <label for="emailSubject" class="header-label">Subject:</label>
      <span> My CarToGo Reservation 1234567890</span>
    </div>

    <!-- Company Logo -->
    <div class="col my-4 company-logo">
      <span
        ><router-link
          class="text-decoration-none fw-bold text-dark fs-4"
          :to="{ name: 'Home' }"
          >CarToGo</router-link
        ></span
      >
    </div>

    <!-- Greetings -->
    <div class="col mb-4 greeting-text">
      <p>Hello <b>Frankie</b>,</p>
      <p class="mb-1">
        Thank you for renting with
        <router-link class="text-decoration-none" :to="{ name: 'Home' }"
          >CarToGo</router-link
        >.
      </p>
      <p>Your confirmation number is <b>1234567890</b>.</p>
    </div>

    <!-- Reservation Info -->
    <div class="mx-5 reservation-info">
      <div class="col">
        <p class="reservation-title fw-bold">YOUR RESERVATION INFO</p>
      </div>
      <!--PICKUP -->
      <div class="pickup-info mb-3">
        <label for="pickupTitle" class="pickupTitle fw-bold">Pickup</label>
        <!-- Location -->
        <div class="row">
          <div class="col-lg-2">
            <label for="location" class="location-label">Location:</label>
          </div>
          <div class="col-lg-10">
            <span class="pickupLocation"
              ><b>San Francisco International Airport (SFO)</b> <br />780 North
              Mcdonnell Rd <br />San Francisco, CA 94128
            </span>
          </div>
        </div>
        <!-- close Location row -->

        <!-- Date & Time -->
        <div class="row mb-2">
          <div class="col-lg-2">
            <label for="dateTime" class="time-label">Date & Time:</label>
          </div>
          <div class="col-lg-10">
            <span class="pickupTime fw-bolder"
              >Sun, Oct 24, 2021 @ 10:30 AM</span
            >
          </div>
        </div>
        <!-- close Date & Time row -->

        <!-- Phone of the Location -->
        <div class="row">
          <div class="col-lg-2">
            <label for="phone" class="phone-label">Phone:</label>
          </div>
          <div class="col-lg-10">
            <span class="phoneNumber"
              ><a href="tel:123-456-7890">+1 (123) 456-7890</a></span
            >
          </div>
        </div>
        <!-- close Phone row -->

        <!-- Hours of Operation -->
        <div class="row">
          <div class="col-lg-2">
            <label for="hourOperation" class="hourOperation-label"
              >Hour of Operation:</label
            >
          </div>
          <div class="col-lg-10">
            <span class="hourOperation"
              >Mon - Sun <br />6:00 AM - 11:00 PM
            </span>
          </div>
        </div>
        <!-- close Hour of Operation row -->
      </div>
      <!-- close pickup info -->

      <!-- RETURN -->
      <div class="return-info mb-2">
        <label for="returnTitle" class="returnTitle fw-bold">Return</label>
        <!-- Location -->
        <div class="row">
          <div class="col-lg-2">
            <label for="location" class="location-label">Location:</label>
          </div>
          <div class="col-lg-10">
            <span class="returnLocation"
              ><b>San Francisco International Airport (SFO)</b> <br />780 North
              Mcdonnell Rd <br />San Francisco, CA 94128
            </span>
          </div>
        </div>
        <!-- close Location row -->

        <!-- Date & Time -->
        <div class="row mb-2">
          <div class="col-lg-2">
            <label for="dateTime" class="time-label">Date & Time:</label>
          </div>
          <div class="col-lg-10">
            <span class="returnTime fw-bolder"
              >Sun, Oct 31, 2021 @ 9:00 PM</span
            >
          </div>
        </div>
        <!-- close Date & Time row -->

        <!-- Phone of the Location -->
        <div class="row">
          <div class="col-lg-2">
            <label for="phone" class="phone-label">Phone:</label>
          </div>
          <div class="col-lg-10">
            <span class="phoneNumber"
              ><a href="tel:123-456-7890">+1 (123) 456-7890</a></span
            >
          </div>
        </div>
        <!-- close Phone row -->

        <!-- Hours of Operation -->
        <div class="row">
          <div class="col-lg-2">
            <label for="hourOperation" class="hourOperation-label"
              >Hour of Operation:</label
            >
          </div>
          <div class="col-lg-10">
            <span class="hourOperation"
              >Mon - Sun <br />6:00 AM - 11:00 PM
            </span>
          </div>
        </div>
        <!-- close Hour of Operation row -->
      </div>
      <!-- close return info -->

      <!--VEHICLE & ESTIMATED TOTAL -->
      <div class="more-info mb-4">
        <div class="row modal-price-info">
          <!-- Col 1 Label for Vehicle and Estimated Total -->
          <div class="col-4 col-lg-2">
            <label for="vehicleTitle" class="col-12 mb-5 vehicleTitle fw-bold"
              >Vehicle</label
            >
            <label for="priceTitle" class="priceTitle fw-bold"
              >Estimated Total</label
            >
          </div>
          <!-- Col 2 Description of Vehicle Modal and Reservation Price -->
          <div class="col-4 col-lg-2">
            <p class="mt-2">Sedan <br /><b>TOYOTA CAMRY</b></p>
            <p class="mt-4">$50 x 7 days <br /><b>$350.00</b></p>
          </div>
          <!-- Col 3 Vehicle Image -->
          <div class="col-lg-4 col-sm-12 vehicle-image">
            <img
              src="../assets/hero-image.jpg"
              class="vehicle-image rounded"
              width="325"
              height="200"
              alt="Vehicle Image"
            />
          </div>
        </div>
        <!-- close modal-price info row-->
      </div>
      <!-- close more info -->
    </div>
    <!-- close reservation info -->

    <!-- Email Closing -->
    <div class="closing-msg mb-4">
      <p>
        Best,
        <br />
        <router-link class="text-decoration-none" :to="{ name: 'Home' }"
          >CarToGo</router-link
        >
      </p>
    </div>

    <!-- Link -->
    <div class="reservation-link mb-4">
      <p class="fw-bold mb-0">View your reservation:</p>
      <!-- Link to Summary Page-->
      <a href="#" class="text-decoration-none"
        >https://www.cartogo.com/reservation/1234567890</a
      >
    </div>

    <!-- Help Info -->
    <div class="help-info fw-lighter text-muted">
      <small
        >To modify your reservation, please
        <router-link class="text-muted" :to="{ name: 'SignUpForm_1' }"
          >Sign up</router-link
        >,
        <router-link class="text-muted" :to="{ name: 'Login' }"
          >Log In</router-link
        >, or
        <a href="tel:123-456-7890" class="text-muted">Contact us</a>.</small
      >
    </div>
  </div>
  <!-- close container -->
</template>

<script>
export default {
  name: "EmailReservationConfirmed",
};
</script>

<style scoped></style>
