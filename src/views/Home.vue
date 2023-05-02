<script setup>
import Footer from '../components/Footer.vue';
import Navigation from '../components/Navigation.vue';
</script>

<template>
    <div class="home__container">
        <Navigation />

        <main>
            <section class="home__item home__landing">

            </section>

            <section class="home__item home__description">

            </section>

            <section class="home__item home__contact">

            </section>
        </main>


        <Footer />
    </div>
</template>

<style scoped>
.home__container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.home__item {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    
}

</style>