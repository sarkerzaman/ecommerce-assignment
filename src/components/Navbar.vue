<script setup></script>

<template>
    <div class="position-sticky">
        <ul class="nav flex-column">
            <li class="nav-item">
                <router-link to="/">Product</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/about">About</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
#sidebar ul{
    padding: 15px 0;    
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    text-decoration: none;
    display: block;
    color: #ecf0f1;
    transition: all 0.3s;
}

#sidebar ul li a:hover {
    background: #2226ee;
}
</style>

