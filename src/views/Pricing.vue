<script setup>
    import Navigation from '../components/Navigation.vue';
    import Footer from '../components/Footer.vue';
</script>

<template>
    <Navigation :light="true" />

    <div class="pricing__container">
        <div class="pricing__text">
            <h1>Pricing</h1>
            <p>Choose the plan that best fits your needs and budget. <br>Get started today and take your business to the next level.</p>
        </div>

        <div class="pricing__table">
            <div class="pricing__tier pricing--standard">
                <div>
                    <p class="subtitle">Standard <br> €150</p>
                    <p class="subscript">per month</p>
                </div>

                <ul class="pricing__items">
                    <li class="pricing__item pricing__item--check">2D clothing mapping</li>
                    <li class="pricing__item pricing__item--check">Support within 3 days</li>
                    <li class="pricing__item pricing__item--cross">Size assistance</li>
                    <li class="pricing__item pricing__item--cross">Upload your own logo</li>
                </ul>

                <router-link to="/contact" class="btn btn--white">Get in touch</router-link>
            </div>

            <div class="pricing__tier pricing--deluxe">
                <div>
                    <p class="subtitle">Deluxe <br> €250</p>
                    <p class="subscript">per month</p>
                </div>

                <ul class="pricing__items">
                    <li class="pricing__item pricing__item--check">3D clothing mapping</li>
                    <li class="pricing__item pricing__item--check">Support within 24h</li>
                    <li class="pricing__item pricing__item--check">Size assistance</li>
                    <li class="pricing__item pricing__item--check">Upload your own logo</li>
                </ul>

                <router-link to="/contact" class="btn btn--black">Get in touch</router-link>
            </div>
        </div>
    </div>

    <Footer />
</template>

<style scoped>
.pricing__container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: var(--page-height);
    width: 100%;
    background-color: #fff;
    color: #000;
}

.pricing__text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    width: clamp(200px, 55vw, 600px);
    margin-top: 7rem;
}

.pricing__text h1 {
    margin-top: 0;
    margin-bottom: 4rem;
    font-size: 4rem;
}

.pricing__text p {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.1em;
}

.pricing__table {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 0rem;
    width: clamp(200px, 80vw, 900px);
    height: clamp(500px, 80vh, 700px);
}

.pricing__tier {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: clamp(200px, 40vw, 400px);
    height: clamp(550px, 60vh, 650px);
    padding: 2rem;
}

.pricing--standard {
    background-color: #cccccc;
    color: #000;
}

.pricing--deluxe {
    background-color: #FBC67A;
}

.subtitle{
    font-size: 2rem;
    font-weight: 700;
    font-family: 'DX-Rigraf', sans-serif;
    margin: 1rem 0 1.5rem 0;
}

.subscript{
    margin: 0;
    font-size: 1.125rem;
}

.pricing__items{
    list-style: none;
    padding: 0;
    margin: 0;
    width: 13.75rem;
    height: clamp(150px, 40vh, 200px);
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.pricing__item{
    font-size: 1.125rem;
    padding-left: 1rem;
}

.pricing__item--check::marker{
    content: url('../assets/icons/check.svg');
}

.pricing__item--cross::marker{
    content: url('../assets/icons/red_cross.svg');
    margin-bottom: -0.2rem;
    font-weight: 300;
}

.btn{
    padding: 1rem;
    width: 13.75rem;
    border-radius: 0;
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'DX-Rigraf', sans-serif;
    cursor: pointer;
}

.btn--white{
    background-color: #fff;
    color: #000;
}

.btn--black{
    background-color: #000;
    color: #fff;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}

.btn--black:hover{
    background-color: #fff;
    color: #000;
    outline: 3px solid #000;
}

@media screen and (max-width: 1100px) {
    .pricing__table{
        width: clamp(200px, 90vw, 1000px);
    }
}

@media screen and (max-width: 960px) {
    .pricing__text {
        width: clamp(200px, 90vw, 800px);
    }

    .pricing__text h1 {
        margin-bottom: 2rem;
    }
}

@media screen and (max-width: 768px) {
    .pricing__container {
        height: auto;
    }

    .pricing__text {
        margin-bottom: 3rem;
    }

    .pricing__text p {
        font-size: clamp(0.8rem, 3.5vw, 1.2rem);
        text-align: left;
    }

    .pricing__table {
        flex-direction: column;
        gap: 2rem;
        width: clamp(300px, 90vw, 800px);
        margin-bottom: 3rem;
        height: fit-content;
    }

    .pricing__tier {
        height: clamp(600px, 80vh, 900px);
        width: clamp(300px, 80vw, 400px);
    }
}

</style>