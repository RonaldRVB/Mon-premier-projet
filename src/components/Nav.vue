<script setup>
import NavLink from './NavLink.vue';
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>

<template>

  <nav class="bg-gray-900 fixed top-0 w-full z-50">
    <div class="container mx-auto flex items-center justify-between p-4">
      <a class="text-white text-lg font-bold" href="#">Navbar Fixe</a>
      <button
        class="text-white block md:hidden focus:outline-none"
        type="button"
        @click="isMenuOpen = !isMenuOpen"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <div :class="{'hidden md:flex': !isMenuOpen}" class="w-full md:w-auto md:flex-grow">
        <ul class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <NavLink url="#" text="Home" :isActive="true" />
          <NavLink url="#" text="Link" />
          <NavLink text="Disabled" :isDisabled="true" />
        </ul>
        <form class="flex items-center mt-4 md:mt-0">
          <input
            class="form-input rounded-lg border border-gray-300 py-1 px-2 focus:ring focus:border-blue-300"
            type="search"
            placeholder="Recherche"
            aria-label="Search"
          />
          <button
            class="ml-2 bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600"
            type="submit"
          >
            Recherche
          </button>
        </form>
      </div>
    </div>
  </nav>
    <nav class="w-full bg-gray-900 fixed top-0 text-red-500">
        <div>
            Mon site
        </div>
    </nav>
</template>