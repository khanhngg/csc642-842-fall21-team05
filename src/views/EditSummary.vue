<template>
    <div class="container form-container bg-info bg-opacity-10">
        <div class="d-flex bd-highlight mb-3">
            <h3 class="text-left mb-5">SUMMARY OF EDITED CAR</h3>
                <div class="ms-auto p-2 bd-highlight">
                    <router-link :to="{ name: 'Edit', params: { id: car.id}}">
                        <button class="btn btn-primary">EDIT</button>
                    </router-link>
                </div>
        </div>

        <section class="mb-4 form-section">
            <div class="clearfix">
                <img src="../assets/deal-image-1.jpg" alt="car image" class="float-left mr-2 rounded img-max">
                <div class="mb-2">
                    <p>ID: {{ this.car.id }}</p>
                </div>
                <div class="mb-2">
                    <p>{{ this.car.make }} {{ getModel }} {{ this.car.year }}</p>
                </div>
                <div class="mb-2">
                    <p>{{ this.car.type }} {{ this.car.fuel }}</p>
                </div>
                <div class="mb-2">
                    <p>MPG: {{ this.car.mpg }}</p>
                </div>
                <div class="mb-2">
                    <p>{{ this.car.door }} doors . {{ this.car.seat }} seats . {{ this.car.suitcase }} suitcase(s) </p>
                </div>
                <div class="mb-2">
                    <ul v-if="getAddon.length > 0">
                        <li v-for="addon in getAddon" :key="addon.name">
                            {{ addon.value }}
                        </li>
                    </ul>
                </div>
                <div class="mb-2">
                    <p>{{ this.car.description }}</p>
                </div>
            </div>

            <div class="d-flex bd-highlight mb-3">
                <div class="ms-auto p-2 bd-highlight">
                    <button class="btn btn-outline-dark" @click="onDash">GO TO DASHBOARD</button>
                </div>
                    
                <div class="ms-auto p-2 bd-highlight">
                    <button class="btn btn-primary" @click="onAdd">ADD ANOTHER CAR</button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            car: {
                id: "",
                make: "",
                model: "",
                year: "",
                type: "",
                fuel: "",
                mpg: "",
                door: "",
                seat: "",
                suitcase: "",
                addon: [],
                image: "",
                price: "",
                description: "",
            },
            cars: [],
            model: [
                {
                name: "Camry",
                value: "Camry",
                },
                {
                name: "RAV4",
                value: "RAV4",
                },
                {
                name: "Civic",
                value: "Civic",
                },
                {
                name: "Pilot",
                value: "Pilot",
                },
                {
                name: "911",
                value: "911",
                },
                {
                name: "Cayenne",
                value: "Cayenne",
                },
                {
                name: "model-x",
                value: "Model X",
                },
                {
                name: "model-s",
                value: "Model S",
                },
            ],
            addon: [
                {
                name: "Air-Condition",
                value: "Air Condition",
                },
                {
                name: "Enhance-Cleaning",
                value: "Enhance Cleaning",
                },
                {
                name: "Free-Second-Driver",
                value: "Free Second Driver",
                },
                {
                name: "Unlimited-Mileage",
                value: "Unlimited Mileage",
                },
            ],
        };
    },
    computed: {
        getModel() {
            return this.model.find(
                (model) => model.name === this.car.model
            )?.value;
        },
        getAddon() {
            return this.addon.filter((addon) =>
                this.car.addon.includes(addon.name)
            );
        },
    },
    methods: {
        onAdd: function () {
            this.$router.push({ name: "AddForm" });
        },
        onDash: function () {
            this.$router.push({ name: "Dashboard" });
        },
    },
    async created() {
    // parse local storage to get form data
        if (localStorage.getItem('cars')) {
                try {
                    this.cars = JSON.parse(localStorage.getItem('cars'));
                    this.car = this.cars.find(car => car.id == this.id);
                } catch(e) {
                    localStorage.removeItem('cars');
                }  
            }
    },
};
</script>

<style scoped>
.img-max {
  max-width: 300px;
  width:100%;
}
</style>