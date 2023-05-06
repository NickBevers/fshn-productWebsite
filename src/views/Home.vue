<script setup>
    import Navigation from '../components/Navigation.vue';
    import Footer from '../components/Footer.vue';
</script>

<template>
    <div class="home__container">
        <Navigation />

        <main>
            <section class="home__item home__landing">
                <div class="landing__text">
                    <h1>Shopping <br>Reinvented</h1>
                    <p>Offer your clients an unique new shopping experience with FSHN.</p>
                    <router-link to="/contact" class="landing__cta">Get the software</router-link>
                </div>
            </section>

            <section class="home__item home__description">
                <div class="description__image">
                    <img src="../assets/images/mirror.png" alt="FSHN About">
                </div>
                <div class="description__text">
                    <h2>This is FSHN</h2>
                    <p>
                        We sell software that allows you to map clothes on your body in real-time. Have you ever dreamt of customers being able to try on their clothes without physically putting them on? Have you ever had the problem of not having a customer&apos; size or favourite colour? <br><br>

                        Then we can help you! We create an application so that your customers can now try on clothes via a screen or smart mirror. A colour not available? Easily show them the colour with our application! <br><br>

                        Improve your customers&apos; experiences with you or your brand by giving them something to remember you by. 
                    </p>
                </div>

            </section>

            <section class="home__item home__contact">
                <div class="contact__text">
                    <h2 style="margin-top: 0;">Send us a message</h2>
                    <p>Have a question or want to get in touch? We're here to help!
                        <br>Click below to access our contact page and connect with our team. 
                        <br>We look forward to hearing from you and helping you with any inquiries or concerns you may have.</p>
                    <router-link to="/contact" class="btn--contact">Get in touch</router-link>
                </div>

                <div class="contact__image"></div>
            </section>
        </main>

        <Footer />
    </div>
</template>

<style scoped>
h1{
    margin-top: 0;
    margin-bottom: 2rem;
    font-size: 5rem;
}

h2{
    margin-top: 0;
    margin-bottom: 4rem;
}

.home__container {
    display: flex;
    flex-direction: column;
    min-height: var(--min-height);
    height: 100%;
}

.home__item {
    min-height: var(--min-height);
    height: 100%;
    padding: 1.5rem 0;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    color: black;
}

.home__landing{
    background-image: url("../assets/images/visual.png");
    background-size: contain;
    background-position: right 0% bottom -5rem;
    background-repeat: no-repeat;
    background-color: #000;
    height: max(100vh, 960px);
    padding-left: clamp(1rem, 10vw, 10rem);
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.landing__text{
    width: clamp(200px, 50vw, 520px);
    color: #fff;
    text-align: left;
}

.landing__cta{
    display: inline-block;
    padding: 1rem 1.5625rem;
    background-color: #fff;
    color: #000;
    font-size: 1.25;
    font-weight: 600;
    text-decoration: none;
    margin-top: 5em;
}

.description__image{
    width: 50%;
    box-sizing: border-box;
    padding: 2rem 2rem 2rem clamp(1rem, 10vw, 10rem);
    height: var(--min-height);
}

.description__image img{
    width: 85%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
}

.home__contact, .home__description{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
}

.home__contact{
    padding-bottom: 0;
}

.contact__text, .description__text{
    padding: 0 clamp(1rem, 10vw, 10rem);
    width: clamp(200px, 50vw, 700px);
    text-align: left;
}

.contact__text p{
    margin: 0;
}

.btn--contact{
    display: inline-block;
    padding: 1.125rem 3.125rem;
    background-color: #000;
    color: #fff;
    font-size: 1.25;
    font-weight: 600;
    text-decoration: none;
    margin-top: 5em;
}

.contact__image{
    width: 40%;
    height: var(--min-height);
    background-image: url("../assets/images/map.png");
    background-size: cover;
    background-position: center;
}

/* media queries */
@media screen and (max-width: 1400px){
    .home__landing{
        background-position: right -10rem bottom -8rem;
    }
}

@media screen and (max-width: 1100px){
    .home__landing{
        background-position: right -15rem bottom -10rem;
        background-size: 90%;
    }
}

</style>