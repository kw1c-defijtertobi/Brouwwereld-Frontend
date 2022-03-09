<template>
    <nav>
      <router-link :to="{ name: 'Home' }"><img class="logo" src="/assets/brouwwereld_logo_transparent.png"></router-link>
      <div class="link--container">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Over ons' }">Over ons</router-link>
        <router-link :to="{ name: 'Producten' }">Producten</router-link>
        <router-link :to="{ name: 'Nieuws' }">Nieuws</router-link>
        <router-link :to="{ name: 'Contact' }">Contact</router-link>
        <router-link :to="{ name: 'Winkelwagen' }">Winkelwagen</router-link>
      </div>
    </nav>
</template>

<style lang="scss">
@import "../styles/variables.scss";
nav {
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  .logo {
    width: 9rem;
  }
  .link--container {
    a {
      padding: 1rem;
    }
    .router-link-active {
      font-weight: 600;
    }
  }
}
</style>