<template>
    <div class="title">
        <h1>Contact</h1>
    </div>
    <div class="contact-flex">
        <div class="maps-container">
            <div>
                <iframe width="600" height="450" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=onderwijsboulevard%203+(Brouwwereld)&amp;ie=UTF8&amp;t=h&amp;z=12&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>   
            </div>
        </div>
        <div class="mail-container">
            <input type="text" id="firstname" name="firstname" placeholder="Voornaam">
            <input type="text" id="lastname" name="lastname" placeholder="Achternaam">
            <input type="text" id="mail" name="mail" placeholder="E-mailadres">
            <textarea id="subject" name="subject" placeholder="Bericht.."></textarea>
            <input type="submit" value="Submit">
        </div>
    </div>
</template>

<style lang="scss">
@import "../styles/variables.scss";
    .contact-flex {
        display: grid;
        grid-template-columns: 5;
        width: 100%;
        gap: 50px;
        margin-bottom: 1.7rem;
        .maps-container {
            margin-left: auto; 
            margin-right: 0;
            grid-column-start: 1;

        }
        .mail-container {
            margin-left: 0; 
            margin-right: auto;
            grid-column-start: 2;
            margin-top: 1rem;
            input[type=text], textarea {
                display: block;
                font-family: $fontfamily-smalltext;
                width: 15rem;
                border-radius: 0.5rem;
                height: 2rem;
                padding-left: 0.5rem;
                border: 1px solid rgb(215,213,210);
            }
            input[type=text]:not(:first-child), textarea {
                margin-top: 1rem;
            }
            input[type=submit] {
                display: block;
                margin: 0 auto;
                margin-top: 1rem;
                background-color: rgb(207,132,48);
                color: white;
                border: none;
                width: 5rem;
                height: 1.7rem;
                border-radius: 0.5rem;
                font-family: $fontfamily-smalltext;
            }
            textarea {
                height: 10rem;
                padding-top: 0.3rem;
            }
        }
    }
    
    
</style>