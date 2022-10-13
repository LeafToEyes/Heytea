<template>
  <van-nav-bar
    title="阿喜团餐"
    left-arrow
    fixed=true
    @click-left="onClickLeft"
  />
  <div>
  <img :src="pic" alt="">
    <van-action-bar>
      <van-action-bar-icon icon="balance-list-o" text="订单" @click="GoOrder" />
      <van-action-bar-icon icon="service-o" text="客服" />
      <van-action-bar-button
        color="rgb(219,168,113)"
        type="danger"
        text="预订阿喜团餐"
      />
    </van-action-bar>
  </div>
</template>

<script setup lang="ts">
import emitter from "../../mitt/eventbus.ts";
import { onUnmounted,ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();
let pic=ref("");
(async()=>{
 await axios.get("http://localhost:12580/others").then(res=>{
  //  console.log(res.data[9].picture)
   pic.value=res.data[9].picture
 })
})()
// 隐藏tabbar
emitter.emit("Footer", false);
onUnmounted(() => {
  emitter.emit("Footer", true);
});
const onClickLeft = () => history.back();


// 点击去订单页
const GoOrder = () => {
  router.push("/order");
};
</script>

<style scoped lang="scss">
img{
  width: 100%;
  height: 100%;
}
</style>
