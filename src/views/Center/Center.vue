<template>
    <div class="all">
        <!-- 顶部图片 -->
        <img class="top" src="../../static/img/center/top.png" alt="">

        <!-- 欢迎登录 -->
        <div class="hello">
            <!-- {{this.$store.state.user?'你好—小摹':'请先登录！'}} -->
            <div class="p1" @click="dealLogin">你好，请先点击此处登录！</div>
            <div class="p2">江山起源，灵感寻味</div>
        </div>

        <!-- 会员 -->
        <Vip />

        <!-- 礼包 -->
        <Gift />
    </div>
</template>

<script setup lang="ts">
// import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Vip from '../../components/center/Vip.vue';
import Gift from '../../components/center/Gift.vue';
import axios from 'axios';

// 点击登录
const dealLogin = () => {
    router.push('/login')
}

const router = useRouter();
const route = useRoute();

onMounted(async () => {
    const res = await axios.get('http://localhost:12580/user');
    console.log(res);
})

</script>

<style scoped lang='scss'>
.all {
    width: 100vw;
    padding-bottom: 60px;
    background-color: #f4f4f5;

    .top {
        width: 100%;
    }

    .hello {
        padding-left: 15px;

        .p1 {
            font-size: 16px;
            font-weight: bold;
            margin: 5px;
            color: #DBA871;
        }

        .p2 {
            font-size: 12px;
            margin: 5px;
            color: #DBA871;
        }
    }
}
</style>