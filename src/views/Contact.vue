<script setup>
    import Navigation from '../components/Navigation.vue';
    import Footer from '../components/Footer.vue';
    import Dropdown from '../components/Dropdown.vue';
    import { ref } from 'vue';

    const dropdownValues = ['General', 'Pricing', 'Support'];
    const selectedValue = ref('');

    const handleChangedSelection = (val) => {
        selectedValue.value = val.toLowerCase();
        console.log(selectedValue.value);
    }
</script>

<template>
    <Navigation :light="true" />
    
    <div class="contact">
        <div class="contact__container">
            <form class="contact__form">
                <h2>Get in touch</h2>

                <input class="contact__input" type="text" id="name" name="name" placeholder="Name">
                <input class="contact__input" type="email" id="email" name="email" placeholder="Email">
                <Dropdown :optionValues="dropdownValues" :placeholder="'Select a subject'" :borderRadius="'6px'" :border="'1px solid #ccc'" @selected="handleChangedSelection"/>
                <textarea class="contact__input input--message" id="message" name="message" placeholder="Write something..." resize="none" style="height:200px"></textarea>

                <button type="submit" value="Submit" class="btn btn--black"> Send </button>
            </form>
    
            <div class="contact__data">
                <div class="data__item data--phone">
                    <strong>Phone</strong>
                    <p>Phone: +324 12 34 56 78</p>
                </div>
    
                <div class="data__item data--address">
                    <strong>Address</strong>
                    <p>Raghenoplein 21 bis <br> 2800, Mechelen</p>
                </div>
    
                <div class="data__item data--socials">
                    <strong>Socials</strong>
                    <div class="social__links">
                        <a href="https://www.instagram.com/fshn.be/" target="_blank" rel="noopener noreferrer" class="social__link social--instagram"></a>
                        <a href="https://www.linkedin.com/company/fshn-be/" target="_blank" rel="noopener noreferrer" class="social__link social--linkedin"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>

<style scoped>

.contact {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: var(--page-height);
    width: 100%;
    background-color: #fff;
    color: #000;
}

.contact__container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: clamp(600px, 80vw, 1600px);
    background-color: #fff;
    color: #000;
}

.contact__form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: clamp(250px, 70vh, 600px);
    width: clamp(300px, 40vw, 800px);
    background-color: #fff;
    color: #000;
}

.contact__form h2 {
    margin-top: 0;
    margin-bottom: 2rem;
    text-align: left;
}

.contact__input {
    width: 100%;
    height: 3.125rem;
    padding: 1rem;
    font-size: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

.contact__input:focus {
    outline: none;
}

.contact__input::placeholder {
    color: #000;
}

.input--subject {
    color: #000;
    background-color: #fff;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
}

.input--subject::-ms-expand {
    display: none;
}

.input--subject select {
    padding: 1rem;
    border: 1px solid #000;
    border-radius: 6px;
    box-sizing: border-box;
    background-color: #fff;
    color: #000;
}

.input--message{
    font-family: 'Helvetica', sans-serif;
    resize: none;
}

::placeholder{
    font-size: 1rem;
    color: #5C5F66;
}

.btn{
    padding: 1.2rem 1rem 0.8rem 1rem;
    width: 11rem;
    border-radius: 0;
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'DX-Rigraf', sans-serif;
    cursor: pointer;
}

.btn--black{
    background-color: #000;
    color: #fff;
}

.contact__data{
    text-align: left;
    height: clamp(250px, 60vh, 450px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 1rem;
}

.data__item{
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: fit-content;
    width: 100%;
}

.data__item > p{
    margin: 0;
}

.social__links{
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 100%;
}

strong{
    margin-bottom: 1.875rem;
}

.social__link{
    width: 1.375rem;
    height: 1.375rem;
    background-color: #000;
    mask-size: contain;
}

.social--instagram{
    -webkit-mask-image: url('../assets/icons/instagram.svg');
    mask-image: url('../assets/icons/instagram.svg');
    margin-right: 1.25rem;
}

.social--linkedin{
    -webkit-mask-image: url('../assets/icons/linkedin.svg');
    mask-image: url('../assets/icons/linkedin.svg');
}

@media screen and (max-width: 1100px) {
    .contact__container {
        width: 90vw;
        justify-content: space-between;
    }

    .contact__form {
        width: 60%;
    }

    .contact__data {
        width: 35%;
    }
}

@media screen and (max-width: 768px) {
    .contact{
        height: auto;
    }

    .contact__container {
        flex-direction: column;
        min-height: auto;
        height: auto;
        margin-top: 120px;
    }

    .contact__form {
        width: 100%;
        margin-bottom: 2rem;
    }

    .contact__data {
        display: none;
    }

    .btn--black{
        padding: 0.9rem 0.8rem 0.6rem 0.8rem;
        font-size: 1rem;
    }
}

</style>