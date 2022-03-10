<template>
  <div class="backgroundcolor">
      <Navigation />
  </div>
  <main>
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
  import Navigation from "./components/Navigation.vue";
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
@import "./styles/variables.scss";

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: $fontfamily;
  }

  .backgroundcolor
  {
    background-color: $backgroundcolor;
  }

  nav,
  section {
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  a {
    text-decoration: none;
    color: $text-color;
  }

</style>
