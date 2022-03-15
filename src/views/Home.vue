<template> 
    <div class="homecontainer">
        <div class="hometext">
            <h1>Welkom in de wereld van <span>Brouwwereld</span></h1>
        </div>
        <div class="slider">
            <Slider />
        </div>
    </div>
    <div class="newstitle">
            <h2>Nieuws</h2>
        </div>
    <div class="news">
        <div class="newscontainer">
            <img src="/assets/news1.png">
            <div class="text-block">
                <h3>Korting op kratten</h3>
                <p>14 Maart</p>
            </div>
        </div>
        <div class="newscontainer">
            <img src="/assets/news2.png">
            <div class="text-block">
                <h3>Heineken 18 pack in de aanbieding</h3>
                <p>10 Februari</p>
            </div>
        </div>
        <div class="newscontainer">
            <img src="/assets/news3.png">
            <div class="text-block">
                <h3>NIEUW: Heineken silver</h3>
                <p>3 Januari</p>
            </div>
        </div>
        <div class="newscontainer">
            <img src="/assets/news4.png">
            <div class="text-block">
                <h3>Halve liter blikken</h3>
                <p>2 Januari</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../styles/variables.scss";

.newstitle{
    h2{
        font-family: $fontfamily-bigtext;
        text-align: center;
        font-size: 3rem;
        color: $text-color; 
        margin-top:1.5rem;
    }
}

.homecontainer {
    margin: 0 auto;
    background-color: $backgroundcolor;
    display: flex;
    align-items: center;
    padding: 0.5rem 0 2rem 0;
    justify-content: center;
    .slider
    {
        width: 35rem;
    }
    .hometext, .slidercontainer {
        margin: 0 2rem 0 2rem; 
    }
    h1 {
        width: 32rem;
        font-family: 'Montserrat', sans-serif;
        font-size: 4rem;
        color: $text-color;
        span {
            color: rgb(207,132,48);
            font-family: 'Montserrat', sans-serif;
        }
    }
}

.news
{
    font-family: $fontfamily;
    margin: 1.5rem 0 5rem 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    padding: 0 30px 0 30px;
    img {
        width: 100%;
        border-radius: 0.5rem;
    }
    .newscontainer
    {
        position: relative;
    }
    .text-block {
        position: absolute;
        width: 100%;
        height: 50px;
        top: 95%;
        background-color: white;
        color: black;
        padding: 12px 0 0 10px;
        background-color: rgb(235,233,230);
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;       
        font-size: 0.8rem;
        h3:hover{
            text-decoration: underline;
        }
    }
}
</style>

<script>
import Slider from "../components/Slider.vue";

export default {
   components: {
      Slider,
   },
}
</script>

