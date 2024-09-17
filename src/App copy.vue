<script setup>
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

    <Layout>
      <RouterView />
    </Layout>
    
  </div>
</template>
