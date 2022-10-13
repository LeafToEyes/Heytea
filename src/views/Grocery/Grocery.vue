<template>
    <div class="grocery">
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" :height="471" :show-indicators="false">
            <van-swipe-item v-for="item in banner" :key="'groBanner'+item.id">
                <van-image cover fit="cover" :src="item.bannerPic" />
            </van-swipe-item>
        </van-swipe>

        <!-- 温馨提示 -->
        <img class="tip" src="../../static/img/grocery/tip.png" alt="">

        <!-- 资讯 -->
        <NewsCard />

        <!-- 上新 -->
        <p class="newTitle"><b>百货上新</b><span class="right">FEATURED PRODUCTS</span></p>
        <NewPro />

        <!-- 热销 -->
        <p class="newTitle"><b>百货热销</b><span class="right">NEW ARRIVALS</span></p>
        <HotPro />
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { GroBannerType } from '../../types/type';
import NewsCard from '../../components/grocery/NewsCard.vue';
import HotPro from '../../components/grocery/HotPro.vue';
import NewPro from '../../components/grocery/NewPro.vue';

// 顶部轮播
const banner = ref<Array<GroBannerType>>([]);

// 请求数据
onMounted(async () => {
    let bannerRes = await axios.get('http://localhost:12580/bannerGrocery')
    // console.log(bannerRes.data);
    banner.value = bannerRes.data
})

</script>

<style scoped lang='scss'>
.grocery {
    padding-bottom: 60px;

    /* 公共样式 */
    .newTitle {
        margin: 15px 10px 6px;
        padding-left: 10px;

        .right {
            opacity: 1;
            font-size: 10px;
            font-family: "Microsoft YaHei", 微软雅黑, -apple-system, BlinkMacSystemFont, "PingFang SC", Helvetica, Tahoma, Arial, sans-serif;
            color: rgb(170, 170, 170);
            white-space: nowrap;
            padding-left: 5px;
        }
    }

    .tip {
        width: 100%;
    }

}
</style>