<template>
    <div class="container">
        <div class="heading">
            <div class="row">
                <div class="col-sm-10 col-12">
                    <h4 class="fw-bold">AVAILABLE RENTAL CARS</h4>
                </div>
                <div class="col-sm-2 col-12">
                    <button type="button" class="btn btn-primary pull-right" @click.prevent="onAdd">Add A Car</button>
                </div>
            </div>
        </div>
    </div>
    <!-- add edit and delete on each car -->
    <!-- add pagination -->
    <div class="bg-light bg-opacity-70 m-3">
        
        <section class="container mb-5">
            <div class="row">
                <!-- Filters -->
                <section class="row form-section mb-4">
                    <div class="bg-light border rounded-3 p-3">
                        <form class="d-flex" >
                            <input class="form-control me-2" type="text" v-model="search" placeholder="Search By Vehicle ID"/>
                            <!-- <button class="btn btn-primary-theme" @click="SearchID">Search</button> -->
                        </form>
                        <h5 class="fw-bold">Filters</h5>
                        <div class="col-3 mb-3">
                            <select class="form-select">
                                <option value="">Filter By Added Time</option>
                                <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                            </select>
                        </div>
                        <div class="col-3 mb-3">
                            <select class="form-select" v-model="searchmake">
                                <option value="">Filter By Make</option>
                                <option value="Toyota">Toyota</option>
                                <option value="Honda">Honda</option>
                                <option value="Porsche">Porsche</option>
                                <option value="Tesla">Tesla</option>
                            </select>
                        </div>
                        <div class="col-3 mb-3">
                            <select class="form-select" v-model="searchprice">
                                <option value="">Filter By Price</option>
                                <option value="0-100">0-100</option>
                                <option value="100-200">100-200</option>
                                <option value="200-300">200-300</option>
                                <option value=">300">>300</option>
                            </select>
                        </div>
                    </div>
                </section>


                <!-- List of cars -->
                <h6 class="fw-bold text-uppercase">Showing 1-10 out of 50 cars</h6>
                <section class="col-9 pe-0">
                    <!-- <div v-for="(car, index) in cars" :key="car.id" class="card mb-3"> -->
                    <div v-for="(car, index) in filteredList" :key="car.id" class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img :src="`${car.image}`" class="img-fluid rounded-start" alt="Car Image">
                            </div>
                            <div class="col-md-5">
                                <div class="card-body">
                                    <p class="card-title fw-bold fs-6">{{ car.id }}</p>
                                    <p class="card-title fw-bold fs-6">{{ car.type }}</p>
                                    <p class="card-title text-uppercase fw-medium fs-5">{{ car.make }} {{ car.model }}</p>
                                    <p class="">{{ car.seats }} seats <i class="mx-2 fas fa-circle" style="font-size: 7px"></i> {{ car.suitcases }} suitcases</p>
                                    <hr style="max-width:45px">
                                    <p class="card-text"><small class="text-muted">{{ car.description }}</small></p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card-body ps-5">
                                    <p class="text-end fs-3 fw-bold mb-0">${{ car.price }} / day</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <router-link :to="{ name: 'Edit', params: { id: car.id}}">
                                    <button class="btn btn-primary">EDIT</button>
                                </router-link>
                                <button class="btn btn-outline-dark" @click="onDelete(index)">Delete</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
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
                search: '',
                searchmake: '',
                searchprice: '',
            };
        },
        computed: {
            years: function () {
                const year = new Date().getFullYear()
                return Array.from({length: year - 2009}, (value, index) => 2010 + index)
            },
            filteredList() {
                return this.cars.filter(car => {
                    return car.id.toString().includes(this.search)
                    &&car.make.toLowerCase().includes(this.searchmake.toLowerCase())
                    //&&car.price.toString().includes(this.findPrice(car.price,this.searchprice))
                })
            },
        },
        methods: {
            onAdd: function () {
                this.$router.push("addform");
            },
            async onDelete(index) {
                this.cars.splice(index, 1);
                localStorage.setItem("cars", JSON.stringify(this.cars));
            },
            findPrice: function (price,searchprice) {
                if (searchprice=="0-100") {
                    if (price>0 && price<=100){
                        return price
                    }
                    else{
                        return -1
                    }
                }
                if (searchprice=="100-200"){
                    if (price>100 && price<=200){
                        return price
                    }
                    else{
                        return -1
                    }
                }
                if (searchprice=="200-300"){
                    if (price>200 && price<=300){
                        return price
                    }
                    else{
                        return -1
                    }
                }
                if (searchprice==">300"){
                    if (price>300){
                        return price
                    }
                    else{
                        return -1
                    }
                }
            },
        },
        async created() {
        // parse local storage to get form data
        this.cars = JSON.parse(localStorage.getItem("cars"));
        },
    }
</script>