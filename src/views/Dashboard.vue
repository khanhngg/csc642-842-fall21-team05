<template>
    <div :key="car.id" v-for="car in myJson" class="card" style="width: 18rem">
        <div class="card-body">
            <h5 class="card-title">Car ID:</h5>
            <p class="card-text">{{ car.id }}</p>
            <h5 class="card-title">Car model:</h5>
            <p class="card-text">{{ car.model }}</p>
            <h5 class="card-title">Car make:</h5>
            <p class="card-text">{{ car.make }}</p>
            <a href="#" class="btn btn-primary my-btn">Edit</a>
            <my-button />
        </div>
    </div>
</template>

<script>
    import MyButton from "@/components/MyButton.vue"
    //import json from './json/data.json'
    export default{
        data(){
            return{
                //myJson: json
            }
        },
        components: {
            MyButton,
        }
    }
    
</script>