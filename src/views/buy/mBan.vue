<template>
  <div class="detail">
    <div class="img">
      <img src="../../assets/img/food/f2.png" />
    </div>
    <div>
      <div>火腿蛋可松脆堡</div>

      <div>￥25</div>
      <div class="input-num">
        <!-- 点击按钮实现减法操作，当减到0后就禁止点击操作 -->
        <button @click="muit">
          -
        </button>
        <!-- 显示当前点击操作对应显示的数据 -->
        <span>{{ num }}</span>
        <!-- 点击按钮实现加法操作 -->
        <button @click="add">
          +
        </button>
      </div>
      <button @click="buy">购买</button>
      <div>
        可颂面包夹入大块烟熏火腿与原味蛋饼，车打芝士更添浓郁奶香
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import $bus from '../../config/eventBus'
import { ref, onUnmounted } from 'vue'
import router from '../../router'
//请求数据的类型
interface listType {
  image: string
  price: number
  name: string
  discript: string
}

//请求数据
// (async () => {
//     // 这里需要注意：路由传参可能是一个数组，所以，我们需要进行转换
//     let ret = await 接口(router.currentRoute.value.params.id as string);
//     。。。.value = ret.data.film;
// })();

//控制tabBar隐藏
$bus.emit('tabBarHide', false)

// 页面销毁的时候，需要打开 tabBar
onUnmounted(() => {
  $bus.emit('tabBarHide', true)
})

// 计数器的值
const num = ref(1)
// 递减
const muit = () => {
  num.value--
  if (num.value < 0) {
    num.value = 0
  }
}
// 递加
const add = () => {
  num.value++
}
const buy = () => {
  router.push('/Cart')
}
</script>

<style scoped lang='scss'>
.detail {
  .img {
    width: 100%;
    height: 260px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>