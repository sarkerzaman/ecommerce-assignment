<script setup>
import { useRoute } from 'vue-router';
import { ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios'
const route = useRoute()
const id = route.params.id
const product = reactive({})

onBeforeMount(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
        .then(res => {
            product.id = res.data.id
            product.title = res.data.title
            product.thumbnail = res.data.thumbnail
            product.price = res.data.price
            product.brand = res.data.brand
            product.rating = res.data.rating
            product.description = res.data.description
            product.stock = res.data.stock
            product.category = res.data.category

        })      
});
</script>  

<!-- ProductDetails.vue -->
<template>
    <div class="card mb-3" style="max-width: 100%;">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="`${product.thumbnail}`" class="img-fluid rounded-start" alt="product.title"> 
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">Price: ${{ product.price }}</p>
                <p class="card-text">Stock: <span class="badge bg-secondary text-light">{{ product.stock }}</span></p>
                <p class="card-text">Category: {{ product.category }}</p>
                <p class="card-text">Brand: {{ product.brand }}</p>
                <p class="card-text">{{ product.description }}</p>
                <p class="card-text">Rating: <span class="badge bg-info text-dark">{{ product.rating }}</span></p>
            </div>
            </div>
        </div>
    </div>
</template>