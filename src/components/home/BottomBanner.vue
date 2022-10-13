<template>
  <div class="box">
    <van-nav-bar left-arrow fixed=true @click-left="onClickLeft" />
    <br />
    <br />
    <p>喜茶×原神 | 约定之旅，再遇欢「喜」</p>
    <span class="one">HEYTEA喜茶</span>
    &nbsp; &nbsp;
    <span class="two">2022-09-26 11:23</span>
    &nbsp;
    <span class="three">发布于广东</span>
    <div>
      <img :src="pic" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import axios from "axios";
import emitter from "../../mitt/eventbus.ts";

emitter.emit("Footer", false);
onUnmounted(() => {
  emitter.emit("Footer", true);
});
let pic = ref([]);
(async () => {
  await axios.get("http://localhost:12580/others").then((res) => {
    //  console.log(res.data[9].picture)
    pic.value = res.data[9].picture;
  });
})();

// 返回
const onClickLeft = () => {
  history.back();
};
</script>

<style lang="scss" scoped>
p {
  font: 400 20px/30px "";
  padding-bottom: 10px;
}
.box {
  padding: 20px;
  // background-color: #fff !important;
  .one {
    color: rgb(87, 107, 149);
  }
  .two,
  .three {
    color: gray;
  }
}
img {
  width: 100%;
  height: 100%;
}
</style>
