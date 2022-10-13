<template>
    <div class="mainDetail">
        <BackBar />
        <van-swipe>
            <van-swipe-item v-for="(item,index) in banner" :key="'detailBanner'+index">
                <van-image fit="cover" :src="item" />
            </van-swipe-item>
        </van-swipe>
        <div class="down">
            <p class="price">￥{{price}}</p>
            <p class="name">{{name}}</p>
            <p class="brand">
                <span>品牌</span>
                <span>{{brand}}</span>
            </p>
            <p class="detail">商品详情</p>
        </div>
        <van-image fit="cover" :src="detailPic" />
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref, onUnmounted } from 'vue';
// import { GroceryHotType } from '../../types/type';
import { useRouter, useRoute } from 'vue-router';
import BackBar from '../BackBar.vue';
import emitter from '../../mitt/eventbus';


// 路由 编程式
const router = useRouter();
// 路由参数
const route = useRoute();
// console.log(route.params.id);

const banner = ref();
const price = ref<number>();
const name = ref<string>();
const brand = ref<string>();
const detailPic = ref<string>();

// 请求数据
onMounted(async () => {
    let res = await axios.get('http://localhost:12580/groceryHot/' + route.params.id);
    // console.log(res.data);
    banner.value = res.data.hotPic
    price.value = res.data.price
    name.value = res.data.name
    brand.value = res.data.brand
    detailPic.value = res.data.detailPic
})

// 隐藏footerTabBar
emitter.emit("Footer", false);
// 卸载时显示Footer
onUnmounted(() => {
    emitter.emit("Footer", true);
});

</script>

<style scoped lang='scss'>
.mainDetail {
    padding-bottom: 50px;

    .down {

        p {
            background-color: #fff;
            padding: 0 15px;
        }

        .price {
            padding-top: 8px;
            font: bold 20px/36px "";
        }

        .name {
            width: 100%;
            height: 50px;
            font: 500 16px/24px "";
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
        }

        .brand {
            margin: 2px 0;
            font: 500 14px/56px "";

            span:nth-of-type(1) {
                color: #666;
                padding-right: 20px;
            }
        }

        .detail {
            padding-top: 15px;
            font: 500 18px/56px "";
        }
    }
}
</style>