<template>
    <h1>Nieuws</h1>
    <div class="newscontainer">
        <div class="newsobject">
            <img src="\assets\news1.png" alt="news1">
            <div class="newsflex">
                <div class="newstextblock">
                    <h2>
                        Korting op kratten bier deze week
                    </h2>
                    <p>
                        Alle actuele bierkrat aanbiedingen. Hier vind je alle kratten bier die nu in de aanbieding zijn. Zit er op dit moment korting op jouw favoriete kratje pils? 
                    </p>
                </div>
                <div class="buttonblock">
                    <div class="button">
                        <p>Lees meer</p>
                    </div>
                </div>
            </div>
        
        
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
            margin: 0 1rem 1rem 1rem;
            flex: 30%;
            height: 27rem;
            img {
                    width: 90%;
                    margin-left: 1rem;
                    border-radius: 0.5rem;
                }
            .newsflex{
                display: flex;
                .newstextblock {
                    flex: 80%;
                    margin-left: 1rem;
                    h2 {
                    font-weight: 500;
                    }
                    p {
                        font-weight: 300;
                    }
                }
                .buttonblock {
                    flex: 20%;
                    .button {
                        position: relative;
                        color: white;
                        width: 8rem;
                        height: 2rem;
                        background-color: rgb(207,132,48);
                        border-radius: 0.2rem;
                        p {
                            text-align: center;
                            line-height: 2rem;
                            
                            
                            
                        }
                    }
                }
            }
            
            
        }
    }

</style>