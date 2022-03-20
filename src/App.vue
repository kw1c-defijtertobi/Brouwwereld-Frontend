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

<script lang="ts">
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navigation,
    Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

@font-face {
    font-family: "Objectivity";
    src: url("/assets/objectivity.bold.otf") format("opentype");
}

@import "./styles/variables.scss";

*
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.backgroundcolor
{
  background-color: $backgroundcolor;
}

.title 
{
  h1
  {
    text-align: center;
    color: $text-color;
    margin: 1.5rem;
  }
}
</style>
