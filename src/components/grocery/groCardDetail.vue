<template>
    <BackBar />
    <div class="xi">
        <van-image fit="scale-down" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
            style="padding-bottom: 3px;" />
        <van-tabs v-model:active="activeName">
            <van-tab title="喜茶瓶装" name="a" style="padding-top: 10px;">
                <!-- <HotPro /> -->

                <van-grid default :column-num="2" :gutter="10" class="hot">
                    <van-grid-item class="hotItem" v-for="item in bottleList" :key="'hot'+item.id"
                        @click="gotoDetail(item.id)">
                        <img :src="item.pictureList[0]" alt="">
                        <div>
                            <p class="proName">{{item.title}}</p>
                            <p>
                                <span>￥<b>{{item.price}}</b></span>
                                <van-icon name="add" size="24" @click="gotoDetail(item.id)" />
                            </p>
                        </div>
                    </van-grid-item>
                </van-grid>
            </van-tab>
        </van-tabs>
    </div>

</template>

<script setup lang="ts">
// import HotPro from '../grocery/HotPro.vue';

import axios from 'axios';
import { onMounted, ref, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { CardListType } from '../../types/type';
import emitter from '../../mitt/eventbus';
import BackBar from '../../components/BackBar.vue';

const activeName = ref<string>('a');

// 路由 编程式
const router = useRouter();
// 路由参数
const route = useRoute();

const cardId = route.params.id;
console.log(cardId);

const bottleList = ref<Array<CardListType>>();
const topPic = ref<string>('');

// 请求数据
onMounted(async () => {
    let res = await axios.get('http://localhost:12580/groceryGridGoods');
    console.log(res.data);
    bottleList.value = res.data.filter((item: any) => {
        switch (cardId as string) {
            case '1':
                return item.tag == '喜茶瓶装'
            case '2': return item.tag == '一周茶礼盒'
            case '3': return item.tag == '喜茶冰棒'
            case '4': return item.tag == '灵感周边'
            default:
                return ''
        }
    })
})

const gotoDetail = (id: number) => {
    router.push('/caDetail/' + id)
}

// 隐藏footerTabBar
emitter.emit("Footer", false);
// 卸载时显示Footer
onUnmounted(() => {
    emitter.emit("Footer", true);
});

</script>

<style scoped lang="scss">
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