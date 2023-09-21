<!-- App.vue -->
<script setup></script>

<template>
  <header class="bg-primary text-white p-4">
    <h1>My E-commerce Website</h1>
  </header>
  <!-- Main Content Container -->
  <div class="container-fluid">
    <div class="row">
      <!-- Left-side Navbar -->
      <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block sidebar">
          <router-view name="LeftSideBar"></router-view>
      </nav>

      <!-- Main Content Area -->
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-3">
          <!-- Page Content Goes Here -->
          <!-- <h2>Dashboard</h2> -->
          <router-view></router-view>
      </main>
    </div>
    </div>
     <!-- Footer -->
     <footer class="bg-dark text-white text-center p-3">
        &copy; 2023 Ecommerce Website
    </footer>
</template>

<style scoped>
#sidebar {
    background: #6fa5db;
    min-height: 78vh;
    color: #ecf0f1;
    transition: all 0.3s;
}
</style>