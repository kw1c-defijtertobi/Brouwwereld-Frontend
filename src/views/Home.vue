<template> 
    <div class="homecontainer">
        <div class="hometext">
            <h1>Welkom in de wereld van <span>Brouwwereld</span></h1>
        </div>
        <!-- <div id="app">
            <Slider />
        </div> -->
        <div class="slidercontainer">
            <img src="/assets/slider1.jpg">
        </div>
    </div>
</template>

<style lang="scss">
    @import "../styles/variables.scss";

    .homecontainer {
    margin: 0 auto;
    background-color: $backgroundcolor;
    display: flex;
    align-items: center;
    padding: 0.5rem 0 2rem 0;
    justify-content: center;
        .hometext, .slidercontainer{
           margin: 0 2rem 0 2rem; 
        }
        
        h1{
            width: 32rem;
            font-family: 'Montserrat', sans-serif;
            font-size: 4rem;
            color: $text-color;
            span{
                color: rgb(207,132,48);
                font-family: 'Montserrat', sans-serif;
            }
        }
        img{
            width: 35rem;
        }
    }
</style>

<script lang="ts">
    import Slider from '../components/Slider.vue'
    export default {
    name: 'app',
    components: {
        Slider
    }
    }
</script>

