<template>
    <main class="productpage">
        <aside>
            <h2>Bier</h2>
            <div class="brands">
                <p>Merken</p>
                <div class="filters">
                    <input type="checkbox" id="filter1" name="filter1" value="Hertog jan">
                    <label for="filter1">Hertog Jan</label><br>
                </div>
                <div class="filters">
                    <input type="checkbox" id="filter2" name="filter2" value="Hertog jan">
                    <label for="filter2">Leffe</label><br>
                </div>
                <div class="filters">
                    <input type="checkbox" id="filter3" name="filter3" value="Hertog jan">
                    <label for="filter3">La Chouffe</label><br>
                </div>
                <div class="filters">
                    <input type="checkbox" id="filter4" name="filter4" value="Hertog jan">
                    <label for="filter4">Apple Bandit</label><br>
                </div>
                <div class="filters">
                    <input type="checkbox" id="filter5" name="filter5" value="Hertog jan">
                    <label for="filter5">La Chouffe</label><br>
                </div>
            </div>
            <div class="category">
                <p>Categorie</p>
                <div class="filters">
                    <input type="radio" id="cat1" name="cat" value="Hertog jan">
                    <label for="cat1">Pils</label><br>
                </div>
                <div class="filters">
                    <input type="radio" id="cat2" name="cat" value="Hertog jan">
                    <label for="cat2">Speciaalbier</label><br>
                </div>
                <div class="filters">
                    <input type="radio" id="cat3" name="cat" value="Hertog jan">
                    <label for="cat3">Alcoholvrij</label><br>
                </div>
            </div>
        </aside>
        
        <div class="products">
            <div class="product" v-for="product in products" :key="product.id">
                <div class="image">
                    <img :src="`/assets/${ product.image }`" :alt="product.name">
                </div>
                <div class="info">
                    <div class="productinfo">
                        <div class="price">
                            <span>{{ product.price.toString().split(".")[0] }}.</span>
                            <sup>{{ product.price.toString().split(".")[1] }}<span v-if="product.price.toString().split('.')[1].length < 2">0</span></sup>
                        </div>
                        <p>{{ product.name }}</p>
                        <strong>{{ product.type }}</strong>
                    </div>
                    <div @click="addItemToCart(product.id)" class="cart">
                        <svg class="cart-logo" fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.53 7l-.564 2h-15.127l-.839-2h16.53zm-14.013 6h12.319l.564-2h-13.722l.839 2zm5.983 5c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-13.017l.839 2h13.659l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"/></svg>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { products } from "../data/products";
import { cart } from "../data/cart";

export default {
    data: () => ({
        products
    }),

    methods: {
        addItemToCart(id) {
            const previous = cart.value.find((item) => item.id === id);
            if (previous) previous.amount++;
            else cart.value.push({ id, amount: 1 })
        }
    }
}
</script>

<style lang="scss">
@import "../styles/variables.scss";
.productpage{
    width: 100%;
    display: flex;
    color: $text-color;
    aside
    {
        text-align: left;
        width: 20%;
        padding-left: 3rem;
        padding-top: 2rem;
        h2 {
            font-size: 3.2rem; 
        }
        .brands, .category{
            padding-top: 1rem;
            p {
                font-size: 1.2rem;
            }
            .filters {
                padding-top: 10px;
                font-weight: 400;
                display: flex;
                align-items: center;
                input[type=checkbox], input[type=radio] {
                    transform: scale(1.3);
                    margin-left: 2px;
                    accent-color: rgb(207,132,48);
                }
                label {
                    margin-left: 0.5rem;
                }
            }
        }
        .category {
            padding-top: 2rem;
        }
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
            img {   
                width: 4rem;  
                height: 13.5rem;
                margin-top: 0.5rem;
            }
            .image{
                text-align: center;
            }
            .info {
                display: flex;
                align-items: center;
                .cart {
                    display: none;
                }
                .productinfo{
                    flex: 80%;
                    margin-left: 1rem;
                    p {
                        font-weight:500;
                    }
                    .price {
                        font-size: 2rem;
                        padding-left: 7px;
                        font-weight:500;
                    }
                    strong {
                        font-weight: 900;
                    }
                }
            }
        }
        .product:hover{
            .cart {
                    flex: 20%;
                    display: flex;
                    margin-right: 1rem;
                    width: 3rem;
                    height: 3rem;
                    background-color: rgb(207,132,48);
                    align-items: center;
                    border-radius: 0.2rem;
                    .cart-logo {
                        margin: auto;
                        display: block;
                    }
                }
        }
    }
}
    
</style>