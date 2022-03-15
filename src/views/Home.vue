<template> 
    <div class="homecontainer">
        <div class="hometext">
            <h1>Welkom in de wereld van <span>Brouwwereld</span></h1>
        </div>

        <!-- <vue-flux
        :options="options"
        :images="images"
        :transitions="transitions"
        >
        <template v-slot:preloader>
            <flux-preloader />
        </template>

        <template v-slot:controls>
            <flux-controls />
        </template>
        </vue-flux> -->


        <div class="slidercontainer">
            <img src="/assets/slider1.jpg">
        </div>
    </div>


    <div class="news">
        <div class="newscontainer">
            <img src="/assets/news1.png">
            <div class="text-block">
                <h4>Korting op kratten</h4>
                <p>14 maart</p>
            </div>
        </div>
        
        <img src="/assets/news2.png">
        <img src="/assets/news3.png">
        <img src="/assets/news4.png">
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

    .news
    {
        margin: 30px 0 80px 0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        padding: 0 30px 0 30px;
        
        img{
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
            top: 96%;
            background-color: white;
            color: black;
            padding: 10px 0 0 10px;
            background-color: rgb(235,233,230);
            border-bottom-left-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
        }
        
    }

    



</style>

<script>
// export default {
//    components: {
//       VueFlux,
//       FluxCaption,
//       FluxControls,
//       FluxIndex,
//       FluxPagination,
//       FluxPreloader,
//    },
//    data: () => ({
//    options: {
//       allowFullscreen: false,
//       allowToSkipTransition: true,
//       autohideTime: 2500,
//       autoplay: false,
//       bindKeys: false,
//       delay: 5000,
//       enableGestures: false,
//       infinite: true,
//       lazyLoad: true,
//       lazyLoadAfter: 3,
//    },
//    images: [ 'public/assets/slider1.jpg', 'public/assets/slider1.jpg', 'public/assets/slider1.jpg' ],
//    transitions: [
//       'blinds3d',
//       'blocks2',
//       'book',
//       'cube',
//       'round2',
//       'swipe',
//       'warp',
//       'wave',
//    ],
// })}

</script>

