<template>
    <h1>Nieuws</h1>
    <div class="newscontainer">
        <div class="newsobject">
            <img src="\assets\news1.png" alt="news1">
        </div>
        <div class="newsobject">
            <img src="\assets\news2.png" alt="news1">
        </div>
        <div class="newsobject">
            <img src="\assets\news3.png" alt="news1">
        </div>  
        <div class="newsobject">
            <img src="\assets\news4.png" alt="news1">
        </div>
        <div class="newsobject">
            <img src="\assets\news5.png" alt="news1">
        </div>
        <div class="newsobject">
            <img src="\assets\news6.png" alt="news1">
        </div>
    </div>
</template>

<style lang="scss">
@import "../styles/variables.scss";
    h1 {
        font-family: $fontfamily-bigtext;
        text-align: center;
        margin: 1rem 0 1rem 0;
    }

    .newscontainer{
        display: flex;
        flex-wrap: wrap;
        margin: 0 2rem 0 2rem;
        .newsobject{
            margin: 1rem;
            flex: 30%;
            width: 10rem;
            height: 20rem;
            background-color: grey;
            img {
                width: 90%;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
        }
    }

</style>