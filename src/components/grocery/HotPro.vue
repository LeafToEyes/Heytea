<template>
    <!-- 热销 -->
    <van-grid default :column-num="2" :gutter="10" class="hot">
        <van-grid-item class="hotItem" v-for="item in hot" :key="'hot'+item.id" @click="gotoDetail(item.id)">
            <img :src="item.hotPic[0]" alt="">
            <div>
                <p class="proName">{{item.name}}</p>
                <p>
                    <span>￥<b>{{item.price}}</b></span>
                    <van-icon name="add" size="24" @click="gotoDetail(item.id)" />
                </p>
            </div>
        </van-grid-item>
    </van-grid>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { GroceryHotType } from '../../types/type';
import { useRouter } from 'vue-router';

// 百货热销
const hot = ref<Array<GroceryHotType>>([]);

// 路由 编程式
const router = useRouter();

// 请求数据
onMounted(async () => {
    let res = await axios.get('http://localhost:12580/groceryHot');
    // console.log(res.data);
    hot.value = res.data
})

const gotoDetail = (id: number) => {
    router.push('/groDetail/' + id)
}

</script>

<style scoped lang='scss'>
.hot {
    .hotItem {
        height: 240px;

        img {
            width: 100%;
        }

        div {
            width: 100%;
            padding-top: 5px;

            .proName {
                width: 150px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            p:nth-of-type(2) {
                display: flex;
                justify-content: space-between;

                b {
                    font-size: 20px;
                }
            }
        }
    }
}
</style>