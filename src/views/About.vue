<script setup>
    import Navigation from '../components/Navigation.vue';
    import Footer from '../components/Footer.vue';
</script>

<template>
    <Navigation :light="true" />

    <div class="about__container">
        <div class="about__content">
            <div class="banner"></div>

            <div class="about__intro">
                <h2>What sets us apart</h2>
                <p>FSHN is a company that combines fashion and technology to create a unique fitting experience for both shops and customers. Our goal is to provide innovative solutions that enhance the shopping experience and make the fitting process more efficient and enjoyable. We believe that technology has the power to transform the world of fashion, and we’re committed to pushing the boundaries of what's possible in this exciting field..</p>
            </div>

            <div class="about__values">
                <h2>Our values</h2>
                <div class="value__container">
                    <div class="value__item">
                        <strong>Confident</strong>
                        <p>Confidence is key for us, but also for your customers. We want people to feel confident when they look at themselves in the mirror. That is why we offer the ultimate confidence virtually and in real life. Let your customers feel the most confident with FSHN.</p>
                    </div>

                    <div class="value__item">
                        <strong>Control</strong>
                        <p>Chaos is our enemy. We strive for complete control in everything we do and we want you to be in control as well. That&apos;s why we offer a complete customisable interface. Bring your own brand to FSHN for the best customer experience.   </p>
                    </div>

                    <div class="value__item">
                        <strong>Sophisticated</strong>
                        <p>We are a company that caters to a specific group of people; the ones that are willing to spend their money on the finer things in life to make life easier. No more apologizing for not having a certain size or color, put it all in your FSHN software. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>

<style scoped>

.about__container{
    min-height: var(--page-height);
    background-color: #fff;
    color: #000;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
}

.about__content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: clamp(600px, 80vw, 1600px);
}

.banner{
    width: 100%;
    height: clamp(200px, 50vh, 400px);
    background-image: url('../assets/images/about-banner.webp');
    background-size: cover;
    background-position: center 55%;
    background-repeat: no-repeat;
    margin-bottom: 8.75rem;
}

.about__intro{
    width: clamp(600px, 80vw, 900px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10.75rem;
}

.about__intro h2{
    margin-top: 0;
}

.about__intro p{
    font-weight: 400;
    text-align: left;
}

.about__values{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.about__values h2{
    margin-top: 0;
}

.value__container{
    height: clamp(150px, 50vh, 220px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2.5rem;
    align-items: center;
    margin-bottom: 12rem;
}

.value__item{
    text-align: left;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
}

.value__item strong{
    margin-bottom: 2.25rem;
}

.value__item p{
    margin: 0;
    
}

</style>