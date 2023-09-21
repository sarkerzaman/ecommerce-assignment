// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import Products from '@/components/Products.vue';
import ProductDetails from '@/components/ProductDetails.vue';
import Navbar from '@/components/Navbar.vue';

const routes = [
  {
      path: '/', components: {
          default: Products,
          LeftSideBar: Navbar
      }
  },
  {
      path: '/about', components: {
          default: About,
          LeftSideBar: Navbar
      }
  },
  {
      path: '/contact', components: {
          default: Contact,
          LeftSideBar: Navbar
      }
  },
  // {
  //     path: '/products', components: {
  //         default: Products,
  //         LeftSideBar: Navbar
  //     }
  // },
  {
      path: '/product/:id', components: {       
          default: ProductDetails,
          LeftSideBar: Navbar
      },
      name: 'product-details',
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
