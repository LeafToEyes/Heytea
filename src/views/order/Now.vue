<template>
  <div class="order-content" style="padding: 0 8px" v-for="(item, index) in unFinishedList" :key="'List' + index">
    <div class="content-header">
      <div class="title">
        <van-icon name="shop" size="24px" />
        &nbsp;{{ item.shopName }}
      </div>
      <div class="orderStatus">进行中</div>
    </div>
    <div class="content-middle">
      <div class="middle-left">
        <img :src="item.picture" class="orderImage" />
      </div>
      <div class="middle-right">
        <div class="price">￥{{ item.price }}</div>
      </div>
    </div>
    <div class="content-bottom">
      <span>{{item.orderTime}}</span>
      <div>
        <span class="invoice" @click="drawBill">开发票</span>
        <span class="again" @click="buyMore">再来一单</span>
      </div>
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
const goDetail = (id: any) => {
  router.push("/orderDetial/" + id);
};
// 当前订单列表
let unFinishedList = ref()
onMounted(async () => {
  const res = await axios.get('http://localhost:12580/order')
  unFinishedList.value = res.data.filter((item: any) => {
    return item.isFinished !== true
  })
  console.log('订单列表', unFinishedList.value)
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
  background-color: #f1f1f1;
  height: 30vh;
  margin-bottom: 10px;
  padding: 10px 0;
}

.content-header {
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px 0;
}
.orderStatus{
  width: 50px;
  margin-top: 5px;
}

.orderImage {
  width: 100px;
  height: 100px;
}

.title {
  display: flex;
  align-items: center;
}

.content-bottom {
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content-middle {
  height: 16vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.price {
  width: 100px;
  margin-top: 20px;
  color: #333333;
  font: 900 22px '';
  display: flex;
  justify-content: end;
}

.content-bottom {
  // height: 30px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
}

.content-bottom .invoice {
  display: inline-block;
  text-align: center;
  line-height: 30px;
  padding: 0 15px;
  height: 30px;
  border: 1px solid skyblue;
  margin-right: 10px;
  // margin-top: 20px;
  border-radius: 5px;
}

.content-bottom .again {
  display: inline-block;
  text-align: center;
  line-height: 30px;
  padding: 0 10px;
  height: 30px;
  border: 1px solid orange;
  color: orange;
  // margin-top: 20px;
  border-radius: 5px;
}
</style>
