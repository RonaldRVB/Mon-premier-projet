<script setup>
import Layout from './components/Layout.vue';
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>

  <div id="app">
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Accueil</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">À Propos</RouterLink>
        </li>
      </ul>
    </nav>
  </div>

  <main class="p-8">

  </main>

  <h1 class="text-3xl font-bold underline text-red-500 ">
    
  </h1>
  <Layout>
    <RouterView />
  </Layout>
</template>

