<template>
  <div>
    <van-nav-bar
      title="喜卡"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="bottom">
      <van-tabs  sticky>
        <van-tab title="购买喜卡" name="buyCard">
          <img src="../../assets/home/喜遇原神1.jpg" alt="" class="top" />
          <p>&nbsp;&nbsp;喜遇原神</p>
          <div class="group1 group" >
            <img
              :src="item.picture"
              alt=""
              class="pic"
              v-for="(item, index) in picList1"
              :key="'group1' + index"
            />
          </div>
          <p>&nbsp;&nbsp;惊喜限定</p>
          <div class="group2 group">
            <img
              :src="item.picture"
              alt=""
              class="pic"
              v-for="(item, index) in picList2"
               :key="'group2' + index"
            />
          </div>
          <p>&nbsp;&nbsp;学生有喜</p>
          <div class="group3 group">
            <img
              :src="item.picture"
              alt=""
              class="pic"
              v-for="(item, index) in picList3"
               :key="'group3' + index"
            />
          </div>
          <p>&nbsp;&nbsp;喜人认证</p>
          <div class="group4 group" >
            <img
              :src="item.picture"
              alt=""
              class="pic"
              v-for="(item, index) in picList4"
              :key="'group4' + index"
            />
          </div>
          <p>&nbsp;&nbsp;大喜之事</p>
          <div class="group5 group">
            <img
              :src="item.picture"
              alt=""
              class="pic"
              v-for="(item, index) in picList5"
               :key="'group5' + index"
            />
          </div>
          <p>&nbsp;&nbsp;感恩祝福</p>
          <div class="group6 group" >
            <img
              :src="item.picture"
              alt=""
              class="pic"
              v-for="(item, index) in picList6"
              :key="'group6' + index"
            />
          </div>
          <p>&nbsp;&nbsp;会员专属</p>
          <div class="group7 group">
            <img
              :src="item.picture"
              alt=""
              class="pic"
              v-for="(item, index) in picList7"
               :key="'group7' + index"
            />
          </div>
        </van-tab>
        <van-tab title="我的喜卡" name="myCard">
          <van-tabs >
            <van-tab title="可使用（0）">
              <!-- <img :src="emptyPic" alt="" class="empty" />
              <p>暂无喜卡</p> -->
              <van-empty description="暂无喜卡" />

            </van-tab>
            <van-tab title="未激活（0）">
              <!-- <img :src="emptyPic" alt="" class="empty" />
              <p>暂无喜卡</p> -->
              <van-empty description="暂无喜卡" />

            </van-tab>
          </van-tabs>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref, onUnmounted } from "vue";
import emitter from "../../mitt/eventbus.ts";
// 隐藏footerTabBar
emitter.emit("Footer", false);
// 卸载的时候再打开Footer
onUnmounted(() => {
  emitter.emit("Footer", true);
});
// 定义响应式数据
let picList1 = ref([]);
let picList2 = ref([]);
let picList3 = ref([]);
let picList4 = ref([]);
let picList5 = ref([]);
let picList6 = ref([]);
let picList7 = ref([]);
let emptyPic = ref("");
// 发起请求
onMounted(async () => {
  let res1 = await axios.get("http://localhost:12580/homeYuanShen");
  picList1.value = res1.data;
  let res2 = await axios.get("http://localhost:12580/homeSurprise");
  picList2.value = res2.data;
  let res3 = await axios.get("http://localhost:12580/homeStudent");
  picList3.value = res3.data;
  let res4 = await axios.get("http://localhost:12580/homeCertification");
  picList4.value = res4.data;
  let res5 = await axios.get("http://localhost:12580/homeHappyThings");
  picList5.value = res5.data;
  let res6 = await axios.get("http://localhost:12580/homeBless");
  picList6.value = res6.data;
  let res7 = await axios.get("http://localhost:12580/homeCertification");
  picList7.value = res7.data;
  let empty = await axios.get("http://localhost:12580/others");
  emptyPic.value = empty.data[0].picture;
  // console.log(empty.data[0].picture);
});

// 后退
const onClickLeft = () => history.back();
</script>

<style scoped lang="scss">
.top {
  width: 100%;
}
p {
  font: 300 20px/30px "";
}
.group {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  .pic {
    width: 45%;
    border-radius: 10px;
    margin: 5px;
  }
}
.empty {
  display: block;
  width: 50%;
  margin: 0 auto;
  border:0;
}
</style>
