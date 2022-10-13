<template>
  <div class="order-content" style="padding: 0 8px" v-for="(item, index) in unFinishedList" :key="'List' + index">
    <div class="content-header">
      <div class="header-left">
        <div class="title">{{ item.shopName }}></div>
        <!--<div class="time">{{ item.orderTime }}</div>-->
      </div>
      <div class="header-right">
        <div class="complete">未完成</div>
      </div>
    </div>
    <div class="content-middle">
      <div class="middle-left">
        <img :src="item.picture" />
      </div>
      <div class="middle-right">
        <div class="price">￥{{ item.price }}</div>
        <!--<div class="num">{{ item.buyCounts }}</div>-->
      </div>
    </div>
    <div class="content-btn">
      <div class="invoice" @click="drawBill">开发票</div>
      <div class="again" @click="buyMore">再来一单</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter()
//跳转到点单
const buyMore = () => {
  router.push("/buy");
};
//跳转到开发票
const drawBill = () => {
  router.push("/orderDetial");
};
// 跳转订单详情
const goDetail = (id:any) => {
  router.push("/orderDetial/" + id);
};
// 当前订单列表
let unFinishedList = ref()
onMounted(async () => {
  const res = await axios.get('http://localhost:12580/order')
  unFinishedList.value = res.data.filter((item: any) => {
    return item.isFinished !== true
  })
  console.log('订单列表',unFinishedList.value)
  for (let i = 0; i < unFinishedList.value.length; i++) {
    let api = unFinishedList.value[i].isProduction === true ? 'production/' : 'groceryHot/'
    axios.get('http://localhost:12580/' + api + unFinishedList.value[i].goodId).then((result) => {
      unFinishedList.value[i].picture = (unFinishedList.value[i].isProduction === true) ? result.data.goodsPicSwiper[0] : result.data.hotPic[0]
    })
  }
})
</script>

<style scoped lang="scss">
.order-content {
  background: #fff;
  height: 230px;
  margin-bottom: 20px;
}

.order-header div {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-header {
  height: 70px;
}

.content-header .header-left {
  margin-top: 30px;
  margin-left: 10px;
  float: left;
}

.content-header .header-right {
  margin-top: 30px;
  margin-right: 20px;
  float: right;
}

.content-header .header-left .title {
  font-size: 14px;
  color: rgb(66, 73, 104);
}

.content-header .header-left .time {
  font-size: 14px;
  color: #999999;
}

.content-header .header-right .complete {
  color: #999999;
}

.content-middle {
  height: 90px;
}

.content-middle .middle-left {
  float: left;
}

.content-middle .middle-left img {
  display: inline-block;
  width: 80px;
  height: 80px;
}

.content-middle .middle-right {
  float: right;
  margin-right: 15px;
  font-size: 16px;
}

.content-middle .middle-right .price {
  margin-top: 50px;
  color: #333333;
}

.content-middle .middle-right .num {
  color: #999999;
  font-size: 15px;
}

.content-btn {
  height: 30px;
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
}

.content-btn .invoice {
  text-align: center;
  line-height: 30px;
  padding: 0 15px;
  height: 30px;
  border: 1px solid skyblue;
  margin-right: 10px;
  margin-top: 20px;
  border-radius: 5px;
}

.content-btn .again {
  text-align: center;
  line-height: 30px;
  padding: 0 10px;
  height: 30px;
  border: 1px solid orange;
  color: orange;
  margin-top: 20px;
  border-radius: 5px;
}

.footer {
  text-align: center;
  height: 296px;
  margin-top: 20px;
}
</style>
