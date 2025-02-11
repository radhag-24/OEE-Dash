import { createRouter, createWebHistory } from 'vue-router';
import OeePage from './components/OeePage.vue'; // Import your OEE page component
import HomePage from './components/HomePage.vue'; // Import your HomePage component
import MachinePage from './components/MachinePage.vue'; // Import the MachinePage component

const routes = [
  {
    path: '/', // Home page route
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/oee', // OEE page route
    name: 'OeePage',
    component: OeePage, // Renders OeePage component
  },
  {
    path: '/machine/:machineName', // Dynamic route to display machine data
    name: 'machine',
    component: MachinePage, // Renders MachinePage component for a specific machine
    props: true, // This allows passing the machineName parameter as a prop to the component
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
