<template>
    <div class="main">
        <BackBar />
        <van-empty description="敬请期待！" />
    </div>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue';
import BackBar from '../components/BackBar.vue';
import emitter from '../mitt/eventbus';

// 隐藏footerTabBar
emitter.emit("Footer", false);
// 卸载时显示Footer
onUnmounted(() => {
    emitter.emit("Footer", true);
});
</script>

<style scoped lang='scss'>
.main {
    height: 700px;

    .van-empty {
        height: 100%;
        background-color: #f6f6f6;
    }
}
</style>