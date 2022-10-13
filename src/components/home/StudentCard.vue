<template>
  <van-nav-bar
    title="学子贵宾卡"
    left-arrow
    @click-left="onClickLeft"
    class="top"
  />
  <div>
    <img src="../../assets/home/学子贵宾卡.png" alt="" />
  </div>
  <div class="box">
    <span class="title">&nbsp;&nbsp;认证好礼</span>
    <span class="ps">&nbsp;&nbsp;认证成功即可获得</span>
    <div>
      <img src="../../assets/home/九元喝喜茶券.png" alt="" />
    </div>
    <span class="title">&nbsp;&nbsp;每月权益</span>
    <span class="ps">&nbsp;&nbsp;每月可享专属礼券</span>
    <div>
      <img src="../../assets/home/闲时88折券.png" alt="" />
    </div>
    <span class="title">&nbsp;&nbsp;超值券包</span>
    <span class="ps">&nbsp;&nbsp;学子专享购买资格，定期更新</span>
    <div class="last">
      <img src="../../assets/home/学子券包.png" alt="" />
    </div>
  </div>

  <div class="bottom">
    <button>免费开通学子贵宾卡</button>
  </div>
</template>

<script setup lang="ts">
import emitter from "../../mitt/eventbus.ts";
import { onUnmounted, ref } from "vue";
import axios from "axios";
// 隐藏footerTabBar
emitter.emit("Footer", false);
// 卸载的时候再打开Footer
onUnmounted(() => {
  emitter.emit("Footer", true);
});
//返回
const onClickLeft = () => {
  window.history.back();
};
// let picList = ref<Array>([]);
// (async () => {
//   let res = await axios.get("http://localhost:12580/studentVipCard");
//   console.log(res.data);
//   picList.value = res.data;
// })();
</script>

<style scoped lang="scss">
div {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
.top {
  background-color: rgb(211, 229, 241);
}
.title {
  font: 400 30px/70px "";
}
.ps {
  font: 300 12px/15px "";
  color: rgb(126, 126, 126);
}
.box {
  margin: 0 auto;
}
.last {
  padding-bottom: 50px;
}
.bottom {
  width: 100%;
  height: 100%;
  background-color: #fff;
  button {
    width: 90%;
    height: 50px;
    background-color: rgb(39, 117, 182);
    border: 0;
    color: white;
    font: 500 20px/50px "";
    margin: 15px;
    position: fixed;
    bottom: -15px;
    left: 0;
  }
}
</style>
