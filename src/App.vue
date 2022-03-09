<template>
  <Navigation />
  <main>
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
  import Navigation from "./components/Navigation.vue";
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Objectivity", sans-serif;
  }

  nav,
  section {
    max-width: 90rem;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

</style>
