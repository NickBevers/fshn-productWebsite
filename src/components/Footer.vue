<script setup>
let currentYear = new Date().getFullYear();
</script>

<template>
    <footer>
        <div class="footer__content">

        </div>
        <div class="footer__signature">
            <!-- copyright symbol -->
            <p>&copy; {{ currentYear }} - FSHN. All rights reserved</p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    height: clamp(5rem, 10vw, 370px);
    background-color: #000;
    color: #fff;
    padding: 2rem 0;
    text-align: center;
}

.footer__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.footer__signature {
    font-size: 0.8rem;
}
</style>