<template>
  <Navigation />
  <main>
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
  import Navigation from "./components/Navigation.vue";
</script>


<style lang="scss">
@import "./styles/variables.scss";

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: $fontfamily;
  }

  nav,
  section {
    max-width: 92rem;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  a {
    text-decoration: none;
    color: $text-color;
  }

</style>
