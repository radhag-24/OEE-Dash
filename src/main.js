import { createApp } from 'vue';
import App from './App.vue';
import HighchartsVue from 'highcharts-vue';
import router from './router';

const app = createApp(App);
app.use(router); // Use the router
app.use(HighchartsVue); // Use HighchartsVue
app.mount('#app'); // Mount the app