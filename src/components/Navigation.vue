<script setup>
</script>

<template>
    <nav>
        <div class="navigation__logo">
            <router-link to="/"><div class="navigation__logo__image"/></router-link>
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
    </nav>
</template>

<style scoped>
*{
    font-family: 'Helvetica', sans-serif;
}

nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 clamp(1rem, 5vw, 100px);
    background-color: transparent;
    color: #fff;
    height: 100px;
}

.navigation__logo__image{
    width: 100px;
    height: 36px;
    margin: 0;
    padding: 0;
    background-color: #fff;
    mask: url("../assets/images/FSHN.svg") no-repeat center;
    -webkit-mask: url("../assets/images/FSHN.svg") no-repeat center;
    mask-size: contain;
}

.navigation__links{
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: clamp(200px, 50vw, 500px);
}

.navigation__links li{
    padding: 0.5rem 0.8rem;
    text-decoration: none;
}

.navigation__links li a{
    text-decoration: none;
    color: #fff;
    font-size: clamp(1rem, 5vw, 1.2rem);
}

</style>