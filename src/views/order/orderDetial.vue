<template>
<van-nav-bar
  title="订单详情"
  left-arrow
  @click-left="onClickLeft"
/>

  <div class="fix-page">
    <div class="place" id="bg">
      <!-- 外层 -->
      <!-- <headerNav title="订单详情"></headerNav>-->
      <div id="bg1">
        <!-- div1 -->
        <div>
          <p class="p1" v-if="isFinished">订单已完成</p>
          <p class="p1" v-else>订单未完成</p>
          <p class="p2" v-show="isFinished">感谢您对喜茶的支持，欢迎再次光临</p>
           <p class="p4" id="p5" v-show="!isFinished">如有问题,请致电门店</p>
        </div>
      </div>

      <div id="bg2">
        <!-- div2 -->
        <div>
          <span
            ><img src="../../assets/img/orderDetail/4.png" align="right"
          /></span>
          <p class="s2">{{ shopName }}</p>
          <span class="s3"
            >交子大道300号"悠方购物中心"一层132/133/136/137号</span
          >
        </div>
        <br />

        <hr style="opacity: 0.2" />
        <div>
          <div style="height: 100px; display: flex; padding-right: 10px">
            <div style="width: 78px">
              <img
                style="width: 100%; height: 100%"
                src="../../assets/img/orderDetail/1.png"
                align="top"
              />
            </div>
            <div style="flex: 1">
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <span class="s2">芒芒甘冰露棒</span>
                <span class="b3">¥{{ price }}</span>
              </div>
              <div style="display: flex; justify-content: flex-end" class="b1">
                <p>x1</p>
              </div>
            </div>
          </div>

          <hr style="opacity: 0.2" />
          <p class="b0">
            <span class="b1">商品总价</span
            ><span class="b11" style="float: right">¥ {{ price }}</span>
          </p>

          <hr style="opacity: 0.2" />
          <div class="bbb">
            <span class="b1">共{{ buyCounts }}件商品，合计</span
            ><span class="b11">¥ {{ price }}</span>
          </div>
        </div>
      </div>

      <div id="bg3">
        <!-- div3 -->
        <p id="p3" style="transform: translateY(5px)">订单信息</p>
        <br />
        <hr style="opacity: 0.2" />
        <p>
          <span class="s1">下单时间: </span>
          <span class="b" style="font-weight: bold">{{orderTime}}</span>
        </p>
        <p>
          <span class="s1">取茶号: </span>
          <span
            class="b"
            style="
              transform: translate(15px, 5px);
              transition: unset;
              position: absolute;
              font-weight: bold;
            "
            >8193</span
          >
        </p>
        <p>
          <span class="s1">订单编号: </span>
          <span class="b" style="font-weight: bold"
            >019328129048472948023808319</span
          >
          <span style="float: right; opacity: 0.5" id="a2" class="a">复制</span>
        </p>
        <p><span class="s1">备注信息: </span> <span class="b">不打包</span></p>
      </div>

      <div>
        <br />
        <p class="p4" id="p5">如有问题,请致电门店</p>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
    <!-- 外层结束· -->
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import axios from "axios";
import { ref } from "vue";
const route = useRoute();
// 产品列表
let proList = [];
// 店铺名称
let shopName = ref("");
// 下单时间
let orderTime = ref("");
// 价格
let price = ref(10);
// 是否完成
let isFinished = ref(true);
// 购买数量
let buyCounts = ref(1);

// console.log(route.params.id);
(async () => {
  await axios.get("http://localhost:12580/order").then((res) => {
    console.log(res.data);
    proList = res.data.filter((item) => {
      return item.goodId == route.params.id;
    });
  });
  console.log(proList);
  // console.log(proList[0].shopName);
  shopName.value = proList[0].shopName;
  orderTime.value = proList[0].orderTime;
  price.value = proList[0].price;
  isFinished.value = proList[0].isFinished;
  buyCounts.value = proList[0].buyCounts;
})();
// 左键返回
const onClickLeft=()=>{
  history.back()
}
</script>
<style scoped lang="scss">
.fix-page {

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 777;
}
.fix-page .place {
  overflow: auto;
  height: 100%;
}
#bg {
  background-color: rgb(242, 242, 242);
  position: relative;
}

#bg1 {
  position: relative;
  top: 0px;
  background-color: white;
  margin: 12px 18px;
  border: 5px;
  padding: 5px;
  height: 70px;
  line-height: 35px;
}
#bg2 {
  position: relative;
  background-color: white;
  margin: 12px 18px;
  border: 5px;
  padding: 5px 0px 20px 20px;
}
#bg3 {
  position: relative;
  bottom: 5px;
  background-color: white;
  margin: 12px 18px;
  border: 5px;
  padding: 5px;
  height: 150px;
  padding-left: 20px;
}

.p1 {
  font-size: 15px;
  font-style: normal;
  font-family: 黑体;
  text-align: center;
  color: #333333;
}
.p2 {
  font-size: 11px;
  font-style: normal;
  font-weight: lighter;
  text-align: center;
  line-height: 15px;
  color: #aaaaaa;
}
#p3 {
  font-size: 15px;
  font-style: normal;
  font-weight: bolder;
  text-align: left;
}
.p4 {
  color: #aaaaaa;
  font-size: 5px;
}
#p5 {
  font-size: 5px;
  font-weight: lighter;
  text-align: center;
  line-height: 25px;
  text-align: center;
  vertical-align: auto;
}
.a {
  font-size: 3px;
  font-weight: lighter;
  text-align: left;
  font-style: normal;
  line-height: 25px;
}
#a1 {
  color: #aaaaaa;
  font-size: 5px;
  line-height: 25px;
  display: inline-block;
}
#a2 {
  text-align: right;
  display: inline-block;
  color: brown;
  font-size: 1px;
  font-weight: lighter;
  font-style: normal;
}
.b {
  font-size: 12px;
  color: #333333;
}
.b0 {
  margin: 8px;
}
.bbb {
  margin: 15px 8px 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.b1 {
  color: #aaaaaa;
  font-size: 14px;
}
.b11 {
  color: #333333;
  font-size: 14px;
}
#b2 {
  text-indent: 65em;
  text-align: center;
}
.b3 {
  color: #000000;
  font-size: 16px;
}
.a3 {
  text-align: right;
}
.a4 {
  line-height: 15px;
}
.s1 {
  color: #aaaaaa;
  font-size: 12px;
  line-height: 25px;
}
.s2 {
  color: #333333;
  line-height: 35px;
}
.s3 {
  color: #aaaaaa;
  font-size: 12px;
}
</style>
