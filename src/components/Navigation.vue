<script setup>
    const props = defineProps({
        light: {
            type: Boolean,
            default: false
        }
    })

    const toggleMobileNav = () => {
        console.log('clicked');
        const mobileNav = document.querySelector('.navigation__links--mobile');
        mobileNav.classList.toggle('navigation__links--mobile--active');

        if (props.light) {
            const nav = document.querySelector('nav');
            nav.classList.toggle('nav--light');

            const logo = document.querySelector('.navigation__logo__image');
            logo.classList.toggle('navigation__logo__image--light');

            const mobileIcon = document.querySelector('.navigation__mobile__icon');
            mobileIcon.classList.toggle('navigation__mobile__icon--active');
        } else {
            const nav = document.querySelector('nav');
            nav.classList.toggle('nav--dark');

            const mobileIcon = document.querySelector('.navigation__mobile__icon');
            mobileIcon.classList.toggle('navigation__mobile__icon--active');
        }
    }
</script>

<template>
    <nav v-if="!props.light" class="nav--dark">
        <div class="navigation__logo">
            <router-link to="/"><div class="navigation__logo__image" /></router-link>
        </div>

        <ul class="navigation__links">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/pricing">Pricing</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>

        <!-- mobile menu -->
        <div class="navigation__mobile">
            <div class="navigation__mobile__icon navigation__mobile__icon--dark" @click="toggleMobileNav"></div>
        </div>
        <ul class="navigation__links navigation__links--mobile">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/pricing">Pricing</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>
    </nav>

    <nav v-else class="nav--light">
        <div class="navigation__logo">
            <router-link to="/"><div class="navigation__logo__image navigation__logo__image--light" /></router-link>
        </div>

        <ul class="navigation__links navigation__links--light">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/pricing">Pricing</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>

        <!-- mobile menu -->
        <div class="navigation__mobile">
            <div class="navigation__mobile__icon" @click="toggleMobileNav"></div>
        </div>
        <ul class="navigation__links navigation__links--mobile">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/pricing">Pricing</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
* {
    font-family: "Helvetica", sans-serif;
}

nav {
    box-sizing: border-box;
    position: fixed;
    display: flex;
    justify-content: space-between;
    padding: 0 clamp(1rem, 5vw, 100px);
    background-color: transparent;
    color: #fff;
    background-color: #000;
    height: 100px;
    width: 100%;
    z-index: 50;
}

.nav--light{
    background-color: #fff;
    color: #000;
}

.navigation__logo {
    display: flex;
    justify-content: center;
    align-items: center;
}

.navigation__logo__image {
    width: 100px;
    height: 36px;
    margin: 0;
    padding: 0;
    background-color: #fff;
    mask: url("../assets/images/FSHN.svg") no-repeat center;
    -webkit-mask: url("../assets/images/FSHN.svg") no-repeat center;
    mask-size: contain;
}

.navigation__logo__image--light {
    background-color: #000;
}

.navigation__mobile__icon{
    width: 30px;
    height: 30px;
    background-color: #000;
    mask: url("../assets/icons/menu_black.svg") no-repeat center;
    -webkit-mask: url("../assets/icons/menu_black.svg") no-repeat center;
    mask-size: contain;
}

.navigation__mobile__icon--dark{
    background-color: #fff;
}

.navigation__links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: clamp(200px, 50vw, 500px);
}

.navigation__links--mobile{
    display: none;
}

.navigation__mobile{
    display: none;
}

.navigation__links li {
    padding: 0.5rem 0.8rem;
    text-decoration: none;
}

.navigation__links li a {
    text-decoration: none;
    color: #fff;
    font-size: clamp(1rem, 5vw, 1.2rem);
}

.navigation__links--light li a {
    color: #000;
}

.no-scroll{
    overflow-y: hidden;
}

@media screen and (max-width: 960px) {
    .navigation__links li a {
        font-size: 1rem;
    }
}

@media screen and (max-width: 768px) {
    nav{
        justify-content: space-between;
    }

    .navigation__mobile{
        box-sizing: border-box;
        display: grid;
        place-items: center;
        height: auto;
    }

    .navigation__mobile__icon{
        cursor: pointer;
    }

    .navigation__mobile__icon--active{
        background-color: #fff;
        mask: url("../assets/icons/cross_white.svg") no-repeat center;
        -webkit-mask: url("../assets/icons/cross_white.svg") no-repeat center;
        mask-size: cover;
    }

    .navigation__links {
        display: none;
    }

    .navigation__links--mobile{
        display: none;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        position: absolute;
        top: 100px;
        left: 0;
        width: 100%;
        height: 100vh;
        transition: all 0.3s ease-in-out;
        background-color: #000;
        color: #fff;
        z-index: 60;
        margin-top: 0;
        padding: 0;
        padding-top: 3rem;
    }

    .navigation__links--mobile--active{
        display: flex;
    }

    .navigation__links--mobile li {
        display: block;
        padding: 2.5rem 0;
        z-index: 70;
        width: 10rem;
        text-align: center;
    }

    .navigation__links--mobile li a {
        font-size: 1.5rem;
    }
}
</style>
