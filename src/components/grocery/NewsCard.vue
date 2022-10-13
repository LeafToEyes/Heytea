<template>
    <!-- 资讯 -->
    <van-grid direction="horizontal" default :column-num="2" :gutter="10" class="news">
        <van-grid-item class="newsItem" v-for="item in news" :key="'card'+item.id" @click="gotoNewsDetail(item.id)">
            <span>
                <h3>{{item.title}}</h3>
                <p>{{item.text}} ></p>
            </span>
            <img :src="item.cardPic" alt="">
        </van-grid-item>
    </van-grid>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { GroceryNewsType } from '../../types/type';
import { useRouter } from 'vue-router';

// 百货资讯
const news = ref<Array<GroceryNewsType>>([]);

// 路由 编程式
const router = useRouter();

// 请求数据
onMounted(async () => {
    let res = await axios.get('http://localhost:12580/groceryCard');
    // console.log(res);
    news.value = res.data
})

// 跳转
const gotoNewsDetail = (id: number) => {
    router.push('/cardDetail/' + id)
}

</script>

<style scoped lang='scss'>
.news {
    padding: 30px 0 10px 0;

    .newsItem {
        img {
            flex: 4;
            height: 60px;
        }

        span {
            flex: 6;
            padding-left: 4px;

            p {
                color: #999;
                font-size: 10px;
            }
        }
    }
}
</style>