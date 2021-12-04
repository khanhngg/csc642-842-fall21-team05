<template>
    <div :key="car.id" v-for="car in cars" class="card" style="width: 18rem">
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
    export default{
        data(){
            return{
                cars: [
                {
                    id: 1,
                    model: "Honda",
                    make: "make1"
                },
                {
                    id: 2,
                    model: "Subaru",
                    make: "make2"
                }]
            }
        },
        components: {
            MyButton,
        }
    }
    
</script>