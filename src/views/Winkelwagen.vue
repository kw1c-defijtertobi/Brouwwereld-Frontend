<template>
    <div class="title">
        <h1>Winkelwagen</h1>    
    </div>
    <div class="cart">
        <div class="product-container">
            
        </div>
        <div class="calc-container">

        </div>
    </div>
</template>

<style lang="scss">
@import "../styles/variables.scss";
    .cart {
        display: flex;
    }
    .product-container {
        flex: 70%;
        height: 10rem;
        background-color: red;
    }
    .calc-container {
        flex: 30%;
        background-color: grey;
    }
</style>