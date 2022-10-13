<template>
  <van-nav-bar
    title="欢迎加入喜·茶话会"
    left-arrow
    fixed=true
    @click-left="onClickLeft"
  />

  <!-- <h2>茶话会</h2> -->
  <div class="box">
    <img :src="pic" alt="" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import emitter from "../../mitt/eventbus.ts";
import { onUnmounted, ref } from "vue";
import axios from "axios";
const router = useRouter();
// 点击返回上一级
const onClickLeft = () => router.push("/home");
// 隐藏footerTabBar
emitter.emit("Footer", false);
// 卸载的时候再打开Footer
onUnmounted(() => {
  emitter.emit("Footer", true);
});
// (msg)=>msg.value=false
let pic = ref("");
(async () => {
  await axios.get("http://localhost:12580/others").then((res) => {
    console.log(res);
    pic.value = res.data[1].picture;
  });
})();
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 100%;
  margin-top: -31px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
