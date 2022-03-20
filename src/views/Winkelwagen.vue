<template>
    <div class="title">
        <h1>Winkelwagen</h1>    
    </div>
    <div class="cart">
        <div class="product-container">
            <div v-for="product in cart" :key="product.id" class="product-row">
                <img :src="`/assets/${ productById(product.id).image }`" alt="product1">
                <p>{{ productById(product.id).name }} <span>{{ productById(product.id).type }}</span></p>
                <div class="product-counter">
                    <div class="product-counter-button" @click="product.amount--">-</div>
                    <input v-model="product.amount" type="number" min="1" >
                    <div class="product-counter-button" @click="product.amount++">+</div>
                </div>
                <div class="total-product-price">
                    <p>&euro;{{ (productById(product.id).price * product.amount).toFixed(2) }}</p>
                </div>
            </div>
        </div>
        <div class="calc-container">
            <div class="calc-text">
                <div class="calc-text-row">
                    <p class="calc-text-text">Subtotaal</p>
                    <p class="calc-text-price">&euro;{{ totalPrice.toFixed(2) }}</p>
                </div>
                <div class="calc-text-row">
                    <p class="calc-text-text">Statiegeld</p>
                    <p class="calc-text-price">&euro;{{ statiegeld.toFixed(2) }}</p>
                </div>
                <div class="calc-text-row">
                    <p class="calc-text-text">Totaal</p>
                    <p class="calc-text-price">&euro;{{ (totalPrice + statiegeld).toFixed(2) }}</p>
                </div>
                <div class="calc-text-row">
                    <p class="calc-text-text">BTW</p>
                    <p class="calc-text-price">&euro;{{ ((totalPrice + statiegeld) * 0.21).toFixed(2) }}</p>
                </div>
                <input type="submit" value="Betalen">
                <div class="cart-promotion-text">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z"/></svg>
                    <p>Bestel voor 22:00 vandaag, morgen in huis</p>
                </div>
                <div class="cart-promotion-text">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M5 11v1h8v-7h-10v-1c0-.552.448-1 1-1h10c.552 0 1 .448 1 1v2h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.089-.743 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-4c0 1.656-1.344 3-3 3s-3-1.344-3-3h-1c-.552 0-1-.448-1-1v-6h-2v-2h7v2h-3zm3 5.8c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm10 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-3-2.8h-10v2h.765c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h5.53c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h1.765v-4.575l-1.711-2.929c-.179-.307-.508-.496-.863-.496h-4.426v6zm1-5v3h5l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.705zm-16-3h8v2h-8v-2z"/></svg>
                    <p><span style="color:green;">Gratis</span> bezorging vanaf &euro; 50,-</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { products } from "../data/products";
import { cart } from "../data/cart";

export default {
    data: () => ({
        products,
        cart
    }),
    methods: {
        productById(id) {
            return products.find((item) => item.id === id);
        }
    },
    computed: {
        totalPrice() {
            return this.cart.reduce((total, item) => {
                return total += ( this.productById(item.id).price *  item.amount);
            }, 0);
        },
        statiegeld() {
            return this.cart.reduce((total, item) => {
                return total += (0.2 * item.amount);
            }, 0);
        }
    }
}

</script>

<style lang="scss">
@import "../styles/variables.scss";
    .cart {
        display: flex;
        .product-container {
            flex: 70%;
            .product-row {
                display: flex;
                align-items: center;
                margin: 2rem 0 2rem 0;
                img {
                    width: 3rem;
                    margin-left: 7.5rem;
                }
                p {
                    margin-left: 3rem;
                    font-weight: 400;
                    span {
                        font-weight: 900;
                    }
                }
                .product-counter {
                    display: flex;
                    align-items: center;
                    
                    input::-webkit-outer-spin-button,
                    input::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }
                    input[type=number] {
                        width: 25px;
                        height: 25px;
                        text-align:center;
                    }
                    .product-counter-button {
                        width: 25px;
                        height: 25px;
                        padding-top: 2px;
                        text-align: center;
                        background-color: rgb(207,132,48);
                        color: white;
                        border-radius: 0.1rem;
                        margin: 0.5rem;
                    }
                }
                .total-product-price {
                    font-size: 1.5rem;
                    margin-left: auto; 
                    margin-right: 4rem;
                }
            }
        }

        .calc-container {
            flex: 30%;
            display: flex;
            justify-content: center;
            gap: 8rem;
            font-weight: 400;
            padding-top: 3rem;
            .calc-text-row:nth-child(3) {
                font-weight: 900;       
            }
            .calc-text-row {
                display: flex;
                gap: 7rem;
                padding-top: 1rem;
                .calc-text-text {
                    flex: 50%;   
                }
                .calc-text-price {
                    flex: 50%;
                    text-align: right;
                }   
            }

            input[type=submit] {
                display: block;
                margin: 0 auto;
                margin-top: 2rem;
                background-color: rgb(207,132,48);
                color: white;
                border: none;
                width: 12rem;
                height: 2.5rem;
                border-radius: 0.5rem;
                font-family: $fontfamily-smalltext;
                font-size: 1.5rem;
            }
            
            .cart-promotion-text {
                margin-top: 1rem;
                display: flex;
                gap: 1rem;
                align-items: center;
            }
        }
    }
    
</style>