<template>
  <div>
    <h1>Machine Details</h1>
    <p v-if="machineName">You have selected: {{ machineName }}</p>
    <p v-else>Machine not found</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'MachinePage',
  setup() {
    const route = useRoute();
    const machineName = route.params.machineName;
    return {
      machineName
    };
  },
};

</script>

