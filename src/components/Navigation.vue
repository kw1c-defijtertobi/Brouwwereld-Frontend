<template>

      <nav>
        <router-link :to="{ name: 'Home' }"><img class="logo" src="/assets/brouwwereld_logo_transparent_cut.png"></router-link>
        <div class="nav-container">
          <router-link :to="{ name: 'Home' }">Home</router-link>
          <router-link :to="{ name: 'Over ons' }">Over ons</router-link>
          <router-link :to="{ name: 'Producten' }">Producten</router-link>
          <router-link :to="{ name: 'Nieuws' }">Nieuws</router-link>
          <router-link :to="{ name: 'Contact' }">Contact</router-link>
          <router-link :to="{ name: 'Winkelwagen' }">
            <svg id="Icon_feather-shopping-cart" data-name="Icon feather-shopping-cart" xmlns="http://www.w3.org/2000/svg" width="29.993" height="28.640" viewBox="0 0 59.866 57.281">
              <path id="Path_1" data-name="Path 1" d="M17.17,32.585A2.585,2.585,0,1,1,14.585,30,2.585,2.585,0,0,1,17.17,32.585Z" transform="translate(7.594 20.612)" fill="none" stroke="#616161" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
              <path id="Path_2" data-name="Path 2" d="M33.67,32.585A2.585,2.585,0,1,1,31.085,30,2.585,2.585,0,0,1,33.67,32.585Z" transform="translate(19.527 20.612)" fill="none" stroke="#616161" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
              <path id="Path_3" data-name="Path 3" d="M1.5,1.5H11.839l6.927,34.611a5.17,5.17,0,0,0,5.17,4.162H49.061a5.17,5.17,0,0,0,5.17-4.162l4.136-21.687H14.424" fill="none" stroke="#616161" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            </svg>
          </router-link>
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
        width: 4.5rem;
        margin-left: 1rem;
      }
      .nav-container {
        display: flex;
        align-items: center;
        a {
          padding: 1rem;
        }
        .router-link-active {
          font-weight: 600;
        }
      }
    }
  
</style>
