<template>
    <button class="btn" @click.prevent="onClick">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'styled-button', 
        methods: {
            onClick() {
                this.$emit('click');
            }
        }
    }
</script>

<style lang="scss" scoped>
.btn {
    width: 100;
    padding: 15px;
    background-color: rgb(34, 69, 157);
    color: white;
    box-shadow: none;
    border-radius: 10px;
}
</style>