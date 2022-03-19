<template>
    <div class="title">
        <h1>Nieuws</h1>
    </div>
    
    <div class="newscontainer">
        <div class="newsobject">
            <img class="newsimage" src="\assets\news1.png" alt="news1">
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
            <img class="newsimage" src="\assets\news2.png" alt="news2">
            <div class="newsflex">
                <div class="newstextblock">
                    <h2>
                        Bieraanbiedingen van deze week
                    </h2>
                    <p>
                        Alle actuele bier aanbiedingen van supermarkten, slijterijen, groothandels en webwinkels. Op dit moment is er 612 keer een bier aanbieding.
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
            <img class="newsimage" src="\assets\news3.png" alt="news3">
            <div class="newsflex">
                <div class="newstextblock">
                    <h2>
                        Heineken Silver geïntroduceerd in Nederland
                    </h2>
                    <p>
                        Heineken Silver is vandaag gelanceerd in Nederland. Het nieuwe pils is een extra verfrissende nieuwe toevoeging aan de Heineken familie.
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
            <img class="newsimage" src="\assets\news4.png" alt="news4">
            <div class="newsflex">
                <div class="newstextblock">
                    <h2>
                        Bieraanbiedingen van deze week
                    </h2>
                    <p>
                        Alle actuele bier aanbiedingen van supermarkten, slijterijen, groothandels en webwinkels. Op dit moment is er 612 keer een bier aanbieding.
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
            <img class="newsimage" src="\assets\news6.png" alt="news6">
            <div class="newsflex">
                <div class="newstextblock">
                    <h2>
                        Alcoholvrije Corona variant gelanceerd in Nederland
                    </h2>
                    <p>
                        AB InBev heeft een alcoholvrije variant van het wereldberoemde Corona bier op de markt gebracht in Nederland. Dit bier draagt de naam Corona Cero.
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
            <img class="newsimage" src="\assets\news5.png" alt="news5">
            <div class="newsflex">
                <div class="newstextblock">
                    <h2>
                        Bieraanbiedingen van deze week
                    </h2>
                    <p>
                        Alle actuele bier aanbiedingen van supermarkten, slijterijen, groothandels en webwinkels. Op dit moment is er 612 keer een bier aanbieding.
                    </p>
                </div>
                <div class="buttonblock">
                    <div class="button">
                        <p>Lees meer</p>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<style lang="scss">
@import "../styles/variables.scss";
    .newscontainer{
        display: flex;
        flex-wrap: wrap;
        margin: 0 2rem 0 2rem;
        .newsobject{
            margin: 0 1rem 1rem 1rem;
            flex: 30%;
            height: 27rem;
            .newsimage {
                width: 90%;
                margin-left: 1rem;
                border-radius: 0.5rem;
            }
            .newsflex{
                margin-left: 1rem;
                .newstextblock {
                    h2 {
                        font-weight: 500;
                    }
                    p {
                        font-weight: 300;
                        margin-top: 0.5rem;
                    }
                }
                .buttonblock {
                    .button {
                        margin-top: 1rem;
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