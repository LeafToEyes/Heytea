<template>
  <van-nav-bar
    title="喜一下 灵感来了"
    left-arrow
    fixed=true
    @click-left="onClickLeft"
  />
  <div>
    <img :src="pic" alt="" class="img"/>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref,onMounted } from "vue";
import emitter from "../../mitt/eventbus.ts";
import { onUnmounted } from "vue";
// 隐藏tabbar
emitter.emit("Footer", false);
onUnmounted(() => {
  emitter.emit("Footer", true);
});
let pic = ref();
onMounted(async () => {
  let res = await axios.get("http://localhost:12580/others");
//   console.log(res.data);
  pic.value=res.data[3].picture
});
// 返回
const onClickLeft=()=>{
    history.back();
}
</script>

<style scoped lang="scss">
.img{
    width: 100%;
    // height: 100px;
    display:block;
    padding-top:45px;
    padding-bottom:45px;

}
</style>
