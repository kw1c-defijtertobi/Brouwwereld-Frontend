<template>
    <div class="title">
        <h1>Winkelwagen</h1>    
    </div>
    <div class="cart">
        <div class="product-container">
            <div class="product-row">
                <img src="\assets\product1.png" alt="product1">
                <p>Hertog Jan Lentebock</p>
            </div>
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
        background-color: red;
        .product-row {
            display: flex;
            align-content: center;
            margin: 2rem 0 2rem 0;
            img {
                width: 3rem;
            }
            p {
                align-items: center;
                justify-content: center;
            }
        }
    }
    .calc-container {
        flex: 30%;
        background-color: grey;
    }
</style>