<script setup>
import { ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios'
const products = ref([])

function getSlug(title) {
    return title.toLowerCase().replace(/\s+/g, '-')
}
onBeforeMount(() => {
    axios.get('https://dummyjson.com/products?limit=12')
        .then(res => {
            products.value = res.data.products
        })
})
</script>

<template> 
    <div class="container mb-5">
        <h5 class="text-left mb-4">Product List</h5>        
        <div class="row row-cols-3">
            <div class="col card p-2" v-for="product in products" :key="product.id">
                <router-link :to="{ name: 'product-details', params: { id: product.id } }">
                    <img :src="`${product.thumbnail}`" height="200" alt="product.title">                
                </router-link>
                <div class="card-body">
                    <h6 class="card-title">
                        <router-link :to="{ name: 'product-details', params: { id: product.id } }">
                            {{ product.title }}
                        </router-link>
                    </h6>
                    <p class="card-text">${{ product.price }}</p>
                </div>
            </div>          
        </div>
    </div>
  </template>

  