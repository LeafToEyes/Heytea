<template>
    <van-tabbar v-model="active" active-color="#f1a650">
        <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/buy" icon="cart-o">点单</van-tabbar-item>
        <van-tabbar-item to="/grocery" icon="goods-collect-o">百货</van-tabbar-item>
        <van-tabbar-item to="/order" icon="balance-list-o">订单</van-tabbar-item>
        <van-tabbar-item to="/center" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

// 根据路由状态切换active高亮，并约束为number类型
const active = ref<number>(0);


// 监听路径变化
watch(() => route.path, (val) => {
    console.log("路由发生了切换操作", val);
    switch (val) {
        case "/home":
            active.value = 0;
            break;
        case "/buy":
            active.value = 1;
            break;
        case "/grocery":
            active.value = 2;
            break;
        case "/cardDetail/" + route.params.id:
            active.value = 2;
            break;
        case "/groDetail/" + route.params.id:
            active.value = 2;
            break;
        case "/order":
            active.value = 3;
            break;
        case "/center":
            active.value = 4;
            break;
        default:
            active.value = 1;
            break;
    }
})
</script>

<style scoped lang="scss">

</style>