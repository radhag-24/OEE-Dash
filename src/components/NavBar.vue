<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo Image with programmatic navigation -->
      <img
        src="@/assets/cmti-logo.png"
        alt="Logo"
        class="cmti-logo"
        @click="goHome"
      />
      <img
        src="@/assets/niamt_logo_circular.png"
        alt="Logo"
        class="niamt-logo"
        @click="goHome"
      />
      <h1>NIAMT Smart Manufacturing Workshop</h1>

      <!-- Navigation Links -->
      <div class="navbar-links">
        <router-link to="/oee" class="navbar-link"
          >Overall Equipment Effectiveness</router-link
        >
        <router-link to="#" class="navbar-link"
          >Conditional Based Monitoring</router-link
        >
        <router-link to="#" class="navbar-link"
          >Machine Health Monitoring</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "NavBar",
  setup() {
    const router = useRouter();

    // Programmatic navigation to homepage
    const goHome = () => {
      router.push("/"); // Navigates to the homepage route
    };

    return {
      goHome,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  color: lightblue;
  margin-left: 10px;
}

.navbar {
  background-color: #222;
  color: lightblue;
  font-family: Arial, sans-serif;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.cmti-logo {
  width: 120px;
  height: 60px;
}

.niamt-logo {
  width: 100px;
  height: 70px;
}

.navbar-links {
  display: flex;
  gap: 25px;
  margin-left: auto;
  margin-right: 50px;
}

.navbar-link {
  text-decoration: none;
  color: lightblue;
  font-size: 20px;
  transition: color 0.3s ease;
}

.navbar-link:hover {
  color: #f4a261;
}
</style>
