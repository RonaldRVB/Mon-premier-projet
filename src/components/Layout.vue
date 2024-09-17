<script setup>
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <Nav />
    </header>

    <main class="flex-grow pb-5">
      <div class="container mx-auto px-4">
        <slot />
      </div>
    </main>

    <Footer />
  </div>
</template>