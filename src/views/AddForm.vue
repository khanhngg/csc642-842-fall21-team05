<template>
    <div class="container form-container">
        <h1 class="text-center">ADD A CAR</h1>
        <p class="form-text fw-bold mb-4">* Required to add a car</p>
        <form class="g-3" v-on:submit.prevent="onSubmit" novalidate><!--v-model --> <!-- no local storage but json-->
            <section class="row form-section mb-4">
                <h4 class="fw-bold">CAR DETAILS</h4>
                <div class="col-4 mb-3">
                    <label class="form-label">Make *</label>
                    <select v-model="make" class="form-select" placeholder="Select vehicle make" id="make" name="make" required>
                        <option value="Toyota">Toyota</option>
                        <option value="Honda">Honda</option>
                        <option value="Porsche">Porsche</option>
                        <option value="Tesla">Tesla</option>
                    </select>
                    <p class="form-text mb-4"><strong>Make:</strong> The brand of the vehicle e.g. Honda</p>
                </div>

                <div class="row-4 mb-3">
                    <label class="form-label">Model *</label>
                    <select class="form-select" :disabled="isDisabled" name="model" placeholder="Select vehicle model">
                        <option :key="option.value" v-for="option in setModels" v-bind:value="option.val" id="model" required>{{option.text}}</option>
                    </select>
                    <p class="form-text mb-4"><strong>Model:</strong> The name of a car product e.g. Civic</p>
                </div>

                <div class="col-4 mb-3">
                    <label class="form-label">Year *</label>
                    <select class="form-select" placeholder= "Select vehicle year" id="year" name="year" required>
                        <option :key="year.value" v-for="year in years" :value="year">{{ year }}</option>
                    </select>
                    <p class="form-text mb-4"><strong>Year:</strong> Year of manufacture</p>
                </div>

                <div class="col-12 mb-3">
                    <label class="form-label">Type *</label>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" id="hatchback" name="car-type" required>
                    <label class="form-check-label">Hatchback</label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" id="sedan" name="car-type" required>
                    <label class="form-check-label">Sedan</label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" id="suv" name="car-type" required>
                    <label class="form-check-label">SUV</label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" id="convertible" name="car-type" required>
                    <label class="form-check-label">Convertible</label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" id="coupe" name="car-type" required>
                    <label class="form-check-label">Coupe</label>
                    </div>
                </div>  

                    <label class="form-label">Fuel Type *</label>
                    <select class="form-select" placeholder="Select vehicle fuel type" id="fuel" name="fuel" required>
                        <option value="Gasoline">Gasoline</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Bio-diesel">Bio-diesel</option>
                        <option value="Ethanol">Ethanol</option>electric
                        <option value="Electric">Electric</option>
                        <option value="Electric">Hybrid</option>
                    </select>

                    <label class="form-label">MPG *</label>
                    <input type="number" class="form-control" placeholder="Enter miles per gallon" id="mpg" name="mpg" required> 
            </section>
        
            <section class="row form-section mb-4">
                    <h4 class="fw-bold">CAR FEATURES</h4>
                    <label class="form-label">Door No *</label>
                        <select class="form-select" placeholder= "Select door numbers" id="door" name="door" required>
                            <option value="2">2</option>
                            <option value="4">4</option>
                        </select>

                    <label class="form-label">Seat No *</label>
                        <select class="form-select" placeholder= "Select seat numbers" id="seat" name="seat" required>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>

                    <label class="form-label">Suitcase No *</label>
                        <select class="form-select" placeholder= "Select suitcase numbers" id="suitcase" name="suitcase" required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    <p class="hints"><strong>Suitcase No:</strong> Numbers of suitcases fit in a car</p>
            </section>    

            <section class="row form-section mb-4">
                    <h3 class="fw-bold">ADD-ON</h3>
                    <label class="form-label">Check if Satisfied</label>
                    <input class="satisfaction" type="checkbox" value="" id="ac" name="ac">
                    <label class="check-label">Air Condition</label>
                    <input class="satisfaction" type="checkbox" value="" id="enhance-clean" name="enhance-clean">
                    <label class="check-label">Enhance Cleaning</label>
                    <input class="satisfaction" type="checkbox" value="" id="second-driver" name="second-driver">
                    <label class="check-label">Free Second Driver</label>
                    <input class="satisfaction" type="checkbox" value="" id="unlimited-mile" name="unlimited-mile">
                    <label class="check-label">Unlimited Mileage</label>

                    <label for="multipleimage" class="form-label">Add Pictures of car</label>
                    <input class="image" type="file" id="multipleimage" name="image" multiple>

                    <label class="form-label">Price *</label>
                    <span class="input-group-addon">$</span>
                        <input type="number" class="price" min="0.00" step="0.01" name="price" placeholder="0.00" id="price" required>
                    
                    <label class="form-label">Description</label>
                    <input type="text" class="description" placeholder="Add more detail of the car" id="description" name="description">
            </section>
        
            <div class="mb-5 text-left">
                <button class="btn btn-primary margin-auto" type="submit">Submit</button>
            </div>
        <a href="#pathtodashboard" class="btn btn-outline-dark" v-on:click="onCancel">CANCEL</a> <!--href or router-->
        
        <a href="#pathtosummary" class="btn btn-primary my-btn" type="submit">SUBMIT</a> <!-- local storage or json file-->
        
        <v-btn class="btn btn-outline-dark" @click = "onClear">CLEAR </v-btn>

        </form>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            form: {

            },
            make: false
        }
    },
    computed: {
  	    isDisabled: function(){
    	    return !this.make;
        },
        setModels: function(){
            var options = null
        if (this.make === 'Toyota'){
            options = [{val: 'camry', text: 'Camry'},
                        {val: 'rav4', text: 'RAV4'}]
        } else if (this.make === 'Honda'){
            options = [{val: 'civic', text: 'Civic'},
                        {val: 'pilot', text: 'Pilot'}]
        } else if (this.make === 'Porsche'){
            options = [{val: '911', text: '911'},
                        {val: 'cayenne', text: 'Cayenne'}]
        } else if (this.make === 'Tesla'){
            options = [{val: 'model-x', text: 'Model X'},
                        {val: 'model-s', text: 'Model S'}]
        }
        return options
        },
        years: function () {
            const year = new Date().getFullYear()
            return Array.from({length: year - 2009}, (value, index) => 2010 + index)
        },
        /*onCancel: function () {
            this.$router.push({ name: 'Dashboard' })
        },*/
    },
    methods: {
        onClear: function () {
            this.$refs.form.reset()
        }
    }
}
    
</script>

<style scoped>
.form-section {
  padding: 1.5rem;
  margin-right: 0;
  margin-left: 0;
  border-width: 1px;
  border-radius: 0.25rem;
  border: solid #dee2e6;
  border-width: 1px;
}
</style>
