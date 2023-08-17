<template>
    <div class="container">
        <h1>Widget page!!</h1>

        <p>{{ count }}</p>
        <div class="buttons">
            <button class="button" @click="increment">+</button>
            <button class="button" @click="subtract">-</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'WidgetPage',
    setup() {
        const count = ref(0)

        const increment = () => count.value++
        const subtract = () => count.value--
        
        return {
            count,
            increment,
            subtract,
        }
    }

}
</script>

<style scoped>
.container {
    padding: 100px;
}
.buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 200px;
    background: red;
}
</style>