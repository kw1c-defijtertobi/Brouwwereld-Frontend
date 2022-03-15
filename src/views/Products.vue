<template>
    <main>
        <div class="filter">


        </div>

        <div class="products">
            <div class="product">
                <div class="image">
                    <img src="\assets\product1.png" alt="product1">
                </div>
                <div class="productinfo">
                    <div class="price">
                        <span>1.</span>
                        <sup>49</sup>
                    </div>
                    <p>Hertog Jan</p>
                    <strong>Lentebock</strong>
                </div>
            </div>
            <div class="product">
                <div class="image">
                    <img src="\assets\product2.png" alt="product2">
                </div>
                <div class="productinfo">
                    <div class="price">
                        <span>1.</span>
                        <sup>49</sup>
                    </div>
                    <p>Hertog Jan</p>
                    <strong>Lentebock</strong>
                </div>
            </div>
            <div class="product">
                <div class="image">
                    <img src="\assets\product3.png" alt="product3">
                </div>
                <div class="productinfo">
                    <div class="price">
                        <span>1.</span>
                        <sup>49</sup>
                    </div>
                    <p>Hertog Jan</p>
                    <strong>Lentebock</strong>
                </div>
            </div>
            <div class="product">
                <div class="image">
                    <img src="\assets\product4.png" alt="product4">
                </div>
                <div class="productinfo">
                    <div class="price">
                        <span>1.</span>
                        <sup>49</sup>
                    </div>
                    <p>Hertog Jan</p>
                    <strong>Lentebock</strong>
                </div>
            </div>
            <div class="product">
                <div class="image">
                    <img src="\assets\product5.png" alt="product5">
                </div>
                <div class="productinfo">
                    <div class="price">
                        <span>1.</span>
                        <sup>49</sup>
                    </div>
                    <p>Hertog Jan</p>
                    <strong>Lentebock</strong>
                </div>
            </div>
            <div class="product">
                <div class="image">
                    <img src="\assets\product6.png" alt="product6">
                </div>
                <div class="productinfo">
                    <div class="price">
                        <span>1.</span>
                        <sup>49</sup>
                    </div>
                    <p>Hertog Jan</p>
                    <strong>Lentebock</strong>
                </div>
            </div>
            <div class="product">
                <div class="image">
                    <img src="\assets\product7.png" alt="product7">
                </div>
                <div class="productinfo">
                    <div class="price">
                        <span>1.</span>
                        <sup>49</sup>
                    </div>
                    <p>Hertog Jan</p>
                    <strong>Lentebock</strong>
                </div>
            </div>
            <div class="product">
                <div class="image">
                    <img src="\assets\product8.png" alt="product8">
                </div>
                <div class="productinfo">
                    <div class="price">
                        <span>1.</span>
                        <sup>49</sup>
                    </div>
                    <p>Hertog Jan</p>
                    <strong>Lentebock</strong>
                </div>
                <div></div>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
@import "../styles/variables.scss";
main{
    display: flex;
    .filter
    {
        width: 20%;
        background-color: red;
    }


    .products{
        display: grid;
        grid-template-columns:repeat(4, 1fr);
        grid-column-gap:10px;
        grid-row-gap:10px;
        margin: 20px;
        width: 80%;
        font-family: $fontfamily-bigtext;
        .product {
            height: 20rem;
            width: 17rem;
            background-color: grey;
            img {   
                width: 4rem;  
                height: 13.5rem;
                margin-top: 0.5rem;
            }
            .image{
                text-align: center;
            }
            .productinfo{
                margin-left: 1rem;
                .price {
                    font-size: 2rem;
                    padding-left: 7px;
                }
                strong {
                    font-weight: 900;
                }
            }
            
        }
    }
}
    
</style>