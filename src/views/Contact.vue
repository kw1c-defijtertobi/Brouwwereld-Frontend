<template>
    <div class="title">
        <h1>Contact</h1>
    </div>
    <div class="contact-flex">
        <div class="maps-container">
            <div style="width: 700px;position: relative;">
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
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
        gap: 10px;
        .maps-container {
            
        }
        .mail-container {
            
            input[type=text] {
                width: 15rem;
                display: block;
            }
            input[type=text]:not(:first-child) {
                margin-top: 1rem;
            }
            textarea{
                display: block;
                margin-top: 1rem;
                width: 15rem;
            }
        }
    }
    
    
</style>