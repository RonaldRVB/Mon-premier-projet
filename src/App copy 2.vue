<script setup>
import Nav from "./components/Nav.vue"
import Footer from "./components/Footer.vue"
import Layout from './components/Layout.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <Nav></Nav>
  <main class="p-8">

  </main>

  <h1 class="text-3xl font-bold underline text-red-500 ">
    Hello World! 
  </h1>

  <Footer> </Footer>
  
  <Layout>
    <RouterView />
  </Layout>
</template>

<style scoped>

</style>

