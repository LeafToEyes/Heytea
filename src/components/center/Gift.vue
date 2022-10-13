<template>
    <!-- 礼包 -->
    <div class="gift">
        <div class="gift_up">
            <span>开通礼包</span>
            <span @click="gotoMore()">更多 ></span>
        </div>
        <van-grid class="gift_down" default :border="false" :column-num="3">
            <van-grid-item v-for="item in giftImgList" :key="'gift'+item.id" @click="gotoDetail">
                <img :src="item.giftPic" />
                <span>{{item.giftText}}</span>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { GiftPicType } from '../../types/type';

// gift
const giftImgList = ref<Array<GiftPicType>>([]);

const router = useRouter();
const route = useRoute();

onMounted(async () => {
    let giftRes = await axios.get('http://localhost:12580/centerGift')
    giftImgList.value = giftRes.data
})

const gotoDetail = () => {
    router.push('/centerDetail')
}
const gotoMore = () => {
    router.push('/more')
}

</script>

<style scoped lang='scss'>
.gift {
    height: 230px;
    margin-top: 15px;
    padding: 25px 20px 0 15px;
    font-size: 13px;
    background-color: #ffffff;

    .gift_up {
        display: flex;
        justify-content: space-between;
    }

    .gift_down {
        img {
            height: 40px;
        }
    }
}
</style>