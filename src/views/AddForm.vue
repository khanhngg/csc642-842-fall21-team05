<template>
    <div class="addform">
        <h1 class="addform-title">ADD A CAR</h1>
        <p class="notification">* Required to add a car</p>
        <form class="content" ref="myform">
            <section class=mb-3>
                <h3 class="section title">CAR DETAILS</h3>
                <div class="car-details">
                    <label class="labels">Make *</label>
                    <select v-model="make" class="make" placeholder="Select vehicle make" id="make" name="make" required>
                        <option value="Toyota">Toyota</option>
                        <option value="Honda">Honda</option>
                        <option value="Porsche">Porsche</option>
                        <option value="Tesla">Tesla</option>
                    </select>
                    <p class="hints"><strong>Make:</strong> The brand of the vehicle e.g. Honda</p>

                    <label class="labels">Model *</label>
                    <select class="model" :disabled="isDisabled" name="model" placeholder="Select vehicle model">
                        <option :key="option.value" v-for="option in setOptions" v-bind:value="option.val" id="model" required>{{option.text}}</option>
                    </select>
                    <p class="hints"><strong>Model:</strong> The name of a car product e.g. Civic</p>

                    <label class="labels">Year *</label> <!-- bind key be id or value-->
                    <select class="year" placeholder= "Select vehicle year" id="year" name="year" required> <!-- 2010 to this year--><!-- computed to return array-->
                        <option :key="year.value" v-for="year in years" :value="year">{{ year }}</option>
                    </select>
                    <p class="hints"><strong>Year:</strong> Year of manufacture</p>

                    <label class="labels">Type *</label>
                    <input class="type" type="radio" id="hatchback" name="car-type" required>
                    <label class="radio-label">Hatchback</label>
                    <input class="type" type="radio" id="sedan" name="car-type" required>
                    <label class="radio-label">Sedan</label>
                    <input class="type" type="radio" id="suv" name="car-type" required>
                    <label class="radio-label">SUV</label>
                    <input class="type" type="radio" id="convertible" name="car-type" required>
                    <label class="radio-label">Convertible</label>
                    <input class="type" type="radio" id="coupe" name="car-type" required>
                    <label class="radio-label">Coupe</label>

                    <label class="labels">Fuel Type *</label>
                    <select class="fuel" placeholder="Select vehicle fuel type" id="fuel" name="fuel" required>
                        <option value="Gasoline">Gasoline</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Bio-diesel">Bio-diesel</option>
                        <option value="Ethanol">Ethanol</option>electric
                        <option value="Electric">Electric</option>
                        <option value="Electric">Hybrid</option>
                    </select>

                    <label class="labels">MPG *</label>
                    <input type="number" class="mpg" placeholder="Enter miles per gallon" id="mpg" name="mpg" required>
                </div>    
            </section>
        
            <section class=mb-3>
                <div class="car-features">
                    <h3 class="section title">CAR FEATURES</h3>
                    <label class="labels">Door No *</label>
                        <select class="door#" placeholder= "Select door numbers" id="door" name="door" required>
                            <option value="2">2</option>
                            <option value="4">4</option>
                        </select>

                    <label class="labels">Seat No *</label>
                        <select class="seat#" placeholder= "Select seat numbers" id="seat" name="seat" required>
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="4">5</option><!--2 to 8-->
                        </select>

                    <label class="labels">Suitcase No *</label>
                        <select class="suitcase#" placeholder= "Select suitcase numbers" id="suitcase" name="suitcase" required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    <p class="hints"><strong>Suitcase No:</strong> Numbers of suitcases fit in a car</p>
                </div>
            </section>    

            <section class=mb-3>
                <div class="add-on">
                    <h3 class="section title">ADD-ON</h3>
                    <label class="labels">Check if Satisfied</label>
                    <input class="satisfaction" type="checkbox" value="" id="ac" name="ac">
                    <label class="check-label">Air Condition</label>
                    <input class="satisfaction" type="checkbox" value="" id="enhance-clean" name="enhance-clean">
                    <label class="check-label">Enhance Cleaning</label>
                    <input class="satisfaction" type="checkbox" value="" id="second-driver" name="second-driver">
                    <label class="check-label">Free Second Driver</label>
                    <input class="satisfaction" type="checkbox" value="" id="unlimited-mile" name="unlimited-mile">
                    <label class="check-label">Unlimited Mileage</label>

                    <label for="multipleimage" class="labels">Add Pictures of car</label>
                    <input class="image" type="file" id="multipleimage" name="image" multiple>

                    <label class="labels">Price *</label>
                    <span class="input-group-addon">$</span>
                        <input type="number" class="price" min="0.00" step="0.01" name="price" placeholder="$ 0.00" id="price" required>
                    
                    <label class="labels">Description</label>
                    <input type="text" class="description" placeholder="Add more detail of the car" id="description" name="description">
                </div>
            </section>
        </form>
        <a href="#pathtodashboard" class="btn btn-outline-dark">CANCEL</a> <!-- go back to dashboard-->
        
        <a href="#pathtosummary" class="btn btn-primary my-btn" type="submit">SUBMIT</a> <!-- local jason file-->
        
        <a href="#" class="btn btn-outline-dark" v-on:click="onClick">CLEAR</a> <!-- $refs.myform.reset()-->
        
        <!-- ref to submit? -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            make: false
        }
    },
    computed: {
  	    isDisabled: function(){
    	    return !this.make;
        },
        setOptions: function(){
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
        onClick: function () {
            
        }
    }
}
    
</script>