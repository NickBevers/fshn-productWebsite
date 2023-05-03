<script setup>
let currentYear = new Date().getFullYear();
</script>

<template>
    <footer>
        <div class="footer__content">
            <div class="footer__cta">
                Offer your clients an unique new <br> shopping experience with FSHN.
            </div>

            <div class="footer__info">
                <div class="info__address">
                    <strong>Address</strong>
                    <p>Raghenoplein 21 bis <br> 2800, Mechelen <br>Belgium</p>
                </div>
                
                <div class="info__contact">
                    <strong>Contacts</strong>
                    <p>+32 412 34 56 78 <br> info@fshn.be</p>
                </div>
            </div>
        </div>

        <div class="footer__signature">
            <!-- copyright symbol -->
            <p>&copy; {{ currentYear }} - FSHN. All rights reserved</p>
            <div class="footer__socials">
                <a href="" class="social--instagram"><img src="../assets/icons/instagram.svg" alt="FSHN Instagram"></a>
                <a href="" class="social--linkedin"><img src="../assets/icons/linkedin.svg" alt="FSHN Linkedin"></a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    height: clamp(5rem, 20vw, 370px);
    background-color: #000;
    color: #fff;
    padding: 3.625rem 0;
    text-align: center;
    box-sizing: border-box;
    font-size: 1.125rem;
}

.footer__content, .footer__signature {
    padding: 0 clamp(1rem, 10vw, 10rem);
}

.footer__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
    height: 70%;
}

.footer__cta {
    font-size: 1.25rem;
    font-weight: 600;
}

.footer__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: clamp(200px, 25vw, 480px);
    align-items: flex-start;
}

.info__address, .info__contact {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
}

.footer__signature {
    font-size: 1.125rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.footer__socials{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    height: 25px;
}

.footer__socials a{
    width: 25px;
    height: 25px;
    margin: 0 0.5rem;
}
</style>