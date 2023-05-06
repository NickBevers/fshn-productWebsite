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
            <div class="pricing--standard">
                <p class="subtitle">Standard <br> €150</p>
            </div>

            <div class="pricing--deluxe">
                
            </div>
        </div>
    </div>

    <Footer />
</template>

<style scoped>
.pricing__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #fff;
    color: #000;
}

.pricing__text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(200px, 50vw, 600px);
    text-align: center;
    height: clamp(5rem, 50vh, 12rem);
}

.pricing__text h1 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 5rem;
}

.pricing__text p {
    margin-top: 0;
    margin-bottom: 0;
}

.subtitle{
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
}

</style>