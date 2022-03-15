<template>
  <div class="backgroundcolor">
      <Navigation />
  </div>
  <main>
    <router-view></router-view>
  </main>
  <div class="backgroundcolor">
      <Footer />
  </div>
</template>

<script setup lang="ts">
  import Navigation from "./components/Navigation.vue";
  import Footer from "./components/Footer.vue";
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

@import "./styles/variables.scss";

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .backgroundcolor
  {
    background-color: $backgroundcolor;
  }
</style>
