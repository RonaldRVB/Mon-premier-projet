import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';

// Importation de Tailwind CSS
import './style.css'; // Assurez-vous que le fichier Tailwind est correctement configuré

import App from './App.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';

// Définition des routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Création de l'application Vue
const app = createApp(App);

// Utilisation du routeur dans l'application
app.use(router);

// Montage de l'application sur l'élément #app de index.html
app.mount('#app');