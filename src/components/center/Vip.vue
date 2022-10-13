<template>
    <!-- 会员 -->
    <div class="vip">
        <div class="vip_up">
            <div class="go">GO会员</div>
            <span>成为星球会员享双倍积分</span><br>
            <button @click="goMore()">成为星球会员</button>
        </div>
        <van-grid class="vip_down" default :border="false" :column-num="3">
            <van-grid-item to="/centerDetail">
                <img src="../../static/img/center/vip1.png" />
                <span>积分商城</span>
            </van-grid-item>
            <van-grid-item to="/centerDetail">
                <img src="../../static/img/center/vip2.png" />
                <span>喜茶券</span>
            </van-grid-item>
            <van-grid-item to="/more">
                <img src="../../static/img/center/vip3.png" />
                <span>钱包</span>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goMore = () => {
    router.push("/more")
}

</script>

<style scoped lang='scss'>
.vip {
    margin: 10px 15px 0px;
    background-color: #ffffff;
    height: 200px;
    border-radius: 10px;

    .vip_up {
        padding: 15px 0 15px 12px;
        line-height: 25px;
        border-bottom: 2px solid #f6f6f6;

        .go {
            display: inline-block;
            color: #333333;
            font: 600 20px '';
            margin-right: 10px;
        }

        span {
            display: inline-block;
            width: 150px;
            height: 25px;
            font: 500 3px/30px '';
            padding-left: 10px;
            background-color: #efeff1;
            border-radius: 30px;
        }

        button {
            padding: 0 6px;
            font-size: 12px;
            background-color: #ffffff;
        }
    }

    .vip_down {
        text-align: center;
        font-size: 16px;
        color: #777777;

        .van-grid-item {
            img {
                height: 45px;
            }
        }
    }
}
</style>