<template>
  <h1 class="fw-bold mb-5">My Deliveries</h1>
  <h4 class="fw-bold text-uppercase">Notifications</h4>
  <section class="form-section mb-5">
    <h5 class="fw-bold notif-title">Upcoming delivery in 1 hr!</h5>
    <p class="fw-bold mb-0 mt-4">Delivery Address</p>
    <p class="card-text mt-2 mb-2">
      <i class="fas fa-map-marker-alt"></i>
      1600 Holloway Ave, San Francisco, CA 94132
    </p>
    <p class="card-text">
      <i class="far fa-calendar-alt"></i>
      December 14, 2021 @ 6:30PM
    </p>
    <p class="fw-bold mb-0 mt-4">Contact Details</p>
    <p class="card-text mt-2 mb-2">
      <i class="fas fa-user"></i>
      Mary Smith
    </p>
    <p class="card-text">
      <i class="fas fa-phone-alt"></i>
      (415) 123-456
    </p>
  </section>

  <ul class="nav justify-content-center">
    <li class="nav-item">
      <a
        class="nav-link text-uppercase fw-bold fs-5"
        :class="{ 'active-tab': isDelivery }"
        aria-current="page"
        @click.prevent="onSelectDelivery"
        >Deliveries</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link text-uppercase fw-bold fs-5"
        :class="{ 'active-tab': !isDelivery }"
        @click.prevent="onSelectPickup"
        >Pickup</a
      >
    </li>
  </ul>
  <div v-if="isDelivery" class="mb-5">
    <section
      v-for="(delivery, index) in deliveries"
      :key="index"
      class="form-section mb-2"
    >
      <h4>
        <span
          class="badge"
          :class="delivery.status == 'NEW' ? 'new-badge' : 'old-badge'"
          >{{ delivery.status }}</span
        >
      </h4>
      <p class="fw-bold mb-0 mt-4">Delivery Address</p>
      <p class="card-text mt-2 mb-2">
        <i class="fas fa-map-marker-alt"></i>
        {{ delivery.address }}
      </p>
      <p class="card-text">
        <i class="far fa-calendar-alt"></i>
        {{ delivery.time }}
      </p>
      <p class="fw-bold mb-0 mt-4">Contact Details</p>
      <p class="card-text mt-2 mb-2">
        <i class="fas fa-user"></i>
        {{ delivery.name }}
      </p>
      <p class="card-text">
        <i class="fas fa-phone-alt"></i>
        {{ delivery.phone }}
      </p>
    </section>
  </div>
  <div v-else class="mb-5">
    <section
      v-for="(pickup, index) in pickups"
      :key="index"
      class="form-section mb-2"
    >
      <h4>
        <span
          class="badge"
          :class="pickup.status == 'NEW' ? 'new-badge' : 'old-badge'"
          >{{ pickup.status }}</span
        >
      </h4>
      <p class="fw-bold mb-0 mt-4">Pickup Address</p>
      <p class="card-text mt-2 mb-2">
        <i class="fas fa-map-marker-alt"></i>
        {{ pickup.address }}
      </p>
      <p class="card-text">
        <i class="far fa-calendar-alt"></i>
        {{ pickup.time }}
      </p>
      <p class="fw-bold mb-0 mt-4">Contact Details</p>
      <p class="card-text mt-2 mb-2">
        <i class="fas fa-user"></i>
        {{ pickup.name }}
      </p>
      <p class="card-text">
        <i class="fas fa-phone-alt"></i>
        {{ pickup.phone }}
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "DeliveryReport",
  data() {
    return {
      isDelivery: true,
      deliveries: [
        {
          status: "NEW",
          address: "1600 Holloway Ave, San Francisco, CA 94132",
          time: "December 17, 2021 @ 6:30PM",
          name: "Jane Dunham",
          phone: "(415) 111-222",
        },
        {
          status: "2 days ago",
          address: "1600 Holloway Ave, San Francisco, CA 94132",
          time: "December 2, 2021 @ 12:30PM",
          name: "Joe Dunham",
          phone: "(415) 111-222",
        },
        {
          status: "1 week ago",
          address: "1600 Holloway Ave, San Francisco, CA 94132",
          time: "December 7, 2021 @ 6:30PM",
          name: "Mary Smith",
          phone: "(415) 111-222",
        },
        {
          status: "1 week ago",
          address: "1600 Holloway Ave, San Francisco, CA 94132",
          time: "December 7, 2021 @ 6:30PM",
          name: "John Smith",
          phone: "(415) 111-222",
        },
      ],
      pickups: [
        {
          status: "NEW",
          address: "1600 Holloway Ave, San Francisco, CA 94132",
          time: "December 17, 2021 @ 6:30PM",
          name: "Jane Dunham",
          phone: "(415) 111-222",
        },
        {
          status: "2 days ago",
          address: "1600 Holloway Ave, San Francisco, CA 94132",
          time: "December 2, 2021 @ 12:30PM",
          name: "Joe Dunham",
          phone: "(415) 111-222",
        },
        {
          status: "1 week ago",
          address: "1600 Holloway Ave, San Francisco, CA 94132",
          time: "December 7, 2021 @ 6:30PM",
          name: "Mary Smith",
          phone: "(415) 111-222",
        },
        {
          status: "1 week ago",
          address: "1600 Holloway Ave, San Francisco, CA 94132",
          time: "December 7, 2021 @ 6:30PM",
          name: "John Smith",
          phone: "(415) 111-222",
        },
      ],
    };
  },
  methods: {
    onSelectDelivery() {
      this.isDelivery = true;
    },
    onSelectPickup() {
      this.isDelivery = false;
    },
  },
};
</script>

<style scoped>
.notif-title {
  color: var(--main-theme-color);
}

.nav-link {
  cursor: pointer;
  display: block;
  padding: 0.5rem 1rem;
  color: var(--secondary-theme-color);
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}

.nav-link:focus,
.nav-link:hover {
  color: var(--dark-purple);
}

.active-tab {
  color: var(--main-theme-color);
  border-bottom: var(--main-theme-color) 3px solid;
}

.new-badge {
  background-color: var(--main-theme-color);
}

.old-badge {
  background-color: var(--medium-grey);
}
</style>
