<template>
  <div id="app">
    <NavBar />  <!-- If you want your navbar across the app -->
    <router-view /> <!-- This is where routed pages will show up -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
};
</script>
