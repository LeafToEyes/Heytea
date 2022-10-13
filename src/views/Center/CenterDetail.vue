<template>
    <div class="top">
        <BackBar />
        <div class="t_text">
            <p>可用积分</p>
            <b>22</b>
            <p>积分明细<span>|</span>兑换记录</p>
        </div>
        <img src="../../static/img/center/icon.png" width="130" height="130" />
    </div>
    <van-grid class="down" :column-num="2" :gutter="10" clickable>
        <van-grid-item to="/buy">
            <img src="../../static/img/center/1-1.png" />
            <p>外卖买二赠一劵</p>
            <p><b>2400</b>积分</p>
        </van-grid-item>
        <van-grid-item to="/buy">
            <img src="../../static/img/center/1-1.png" />
            <p>外卖波波家族劵</p>
            <p><b>2800</b>积分</p>
        </van-grid-item>
        <van-grid-item to="/buy">
            <img src="../../static/img/center/1-1.png" />
            <p>外卖买一赠一券</p>
            <p><b>2800</b>积分</p>
        </van-grid-item>
        <van-grid-item to="/buy">
            <img src="../../static/img/center/1-1.png" />
            <p>外卖咖啡券</p>
            <p><b>2900</b>积分</p>
        </van-grid-item>
    </van-grid>
</template>

<script setup lang="ts">
import BackBar from '../../components/BackBar.vue';
</script>

<style scoped lang="scss">
.top {
    height: 165px;
    background-color: #fff;
    position: relative;
    top: 0;
    display: flex;
    justify-content: space-between;

    .t_text {
        flex: 1;
        padding: 40px 0 0 30px;

        b {
            font: bold 20px/30px "";
        }

        p:nth-of-type(2) {
            margin-top: 40px;

            span {
                padding: 0 10px;
            }
        }
    }
}

.down {
    background-color: #f6f6f6;
    padding-top: 10px;

    .van-grid-item {
        height: 146px;

        b {
            color: #f25555;
            padding-right: 3px;
        }

        img {
            width: 100%;
        }
    }
}
</style>