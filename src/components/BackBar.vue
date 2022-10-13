<template>
    <van-icon name="arrow-left" color="#333" size="26px" class="backBar" @click="onClickLeft" />
</template>

<script setup lang="ts">
const onClickLeft = () => history.back();
</script>

<style lang="scss">
.backBar {
    width: 30px;
    height: 30px;
    position: fixed;
    top: 3px;
    left: 3px;
    z-index: 3;
}
</style>