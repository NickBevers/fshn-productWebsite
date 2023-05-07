<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        optionValues: {
            type: Array,
            required: true
        },
        placeholder: {
            type: String,
            required: false,
            default: 'Select an option'
        },
        borderRadius: {
            type: String,
            required: false,
        },
        border: {
            type: String,
            required: false,
        }
    })

    const emit = defineEmits(['selected']);

    const showDropdown = ref(false);
    const selectedValue = ref(props.placeholder);

    const toggleDropdown = () => {
        showDropdown.value = !showDropdown.value;
    }

    const handleSelection = (e) => {
        selectedValue.value = e.target.innerText;
        showDropdown.value = false;
        emit('selected', selectedValue.value);
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            showDropdown.value = false;
        }
    })
</script>

<template>
    <div class="dropdown">
        <div class="dropdown__container" :style="`border-radius:${props.borderRadius?props.borderRadius:'0'}; border:${props.border?props.border:''}`" @click="toggleDropdown">
            <div class="dropdown__selected">
                <span class="dropdown__selected--text">{{ selectedValue?selectedValue:'Select a subject' }}</span>
                <img class="dropdown__selected--icon" src="../assets/icons/arrow-down.svg" alt="Arrow down" :style="`transform:${showDropdown?'rotate(180deg)':''}`">
            </div>
            <div class="dropdown__options" v-if="showDropdown" @onBlur="showDropdown = false">
                <div class="dropdown__option" v-for="option in optionValues" :key="option" @click="handleSelection">
                    <span class="dropdown__option--text">{{ option }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

/* add styling for the dropdown component */
.dropdown {
    position: relative;
    width: 100%;
    margin-bottom: 1rem;
}

.dropdown__container {
    position: relative;
    width: 100%;
    height: 3.125rem;
    border: 1px solid #000;
    border-radius: 0.5rem;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.dropdown__selected {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.dropdown__selected--text {
    font-size: 1rem;
    color: #5C5F66;
}

.dropdown__selected--icon {
    width: 1rem;
    height: 1rem;
}

.dropdown__options {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    z-index: 1;
}

.dropdown__option {
    width: 100%;
    padding: 0.5rem 0;
    cursor: pointer;
    color: #5C5F66;
    text-align: left;
}

.dropdown__option:not(:last-of-type) {
    border-bottom: 1px solid #ccc;
}

.dropdown__option:hover {
    color: #FBC67A;
}

.dropdown__option--text {
    font-size: 1rem;
}



</style>