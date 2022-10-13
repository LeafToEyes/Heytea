<template>
  <div class="box">
    <div>
      <van-sidebar v-model="active"
                   @change="onChange">
        <van-sidebar-item v-for="(item,index) in foodsList"
                          :key="'title'+index"
                          :title="item"
                          @click=changeName(item) />
        <!-- <van-sidebar-item title="时令鲜果" /> -->
        <!-- <van-sidebar-item title="灵感上新" />
        <van-sidebar-item title="清爽不腻" />
        <van-sidebar-item title="热饮推荐" />
        <van-sidebar-item title="平价推荐" />
        <van-sidebar-item title="要浓郁" />
        <van-sidebar-item title="要简单" />
        <van-sidebar-item title="要经典" />
        <van-sidebar-item title="要咖啡" />
        <van-sidebar-item title="要雪糕" />
        <van-sidebar-item title="瓶装/周边/茶叶" /> -->
      </van-sidebar>

    </div>
    <div>
      <div class="foods">
        <div class="foodList1"
             @click="gotoDetail(item.id)"
             v-for="item in proList"
             :key="'products'+item.id">
          <div class="name">{{item.goodsName}}</div>

          <img :src="item.goodsPicSwiper[0]"
               alt="" />
          <p>{{item.tagContent}}</p>
          <p>{{item.description}}</p>
          <div class="price">￥{{item.price}}</div>
          <div class="add"
               @click="gotoDetail(item.id)">+</div>
        </div>

      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { log } from 'console'
import { provide, ref } from 'vue'
import axios from 'axios'
import { onMounted, onUnmounted, inject } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ProductType } from '../../types/type'
import { defineProps } from 'vue'
import BackBar from '../BackBar.vue'
import emitter from '../../mitt/eventbus'

// 路由 编程式
const router = useRouter()
// 路由参数
const route = useRoute()
// console.log(route.params.id);

// const banner = ref()
// const price = ref<number>()
// const name = ref<string>()
// const brand = ref<string>()
// const detailPic = ref<string>()
const proList = ref<Array<ProductType>>()

const changeName = (_item: any) => {
  console.log(_item)
}

let props = defineProps({
  drunkType: String,
})
const list = inject('list')
console.log('zi=', props.drunkType)

// 请求数据
onMounted(async () => {
  let res = await axios.get('http://localhost:12580/production')
  console.log(res.data)
  proList.value = res.data
  console.log('zi=', props.drunkType)
})
const gotoDetail = (id: number) => {
  router.push('/mBan/' + id)
}
let active = ref<any>(0)
let drunkType = ref<any>('')
const foodsList = [
  '喜茶实验室',
  '当季限定',
  '人气必喝榜',
  '喜茶制冰',
  '热饮推荐',
  '果茶家族',
  '茗茶/乳茶',
  '波波家族',
  '纯茶',
  '加料',
  '共同抗议',
  '灵感提示',
]
let currentIndex = 0
const onChange = (item: any) => {
  console.log(item)
  active['title'] = foodsList[item]
  drunkType = active.title as any
  console.log('ac=', drunkType)
}

// const
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: row;
}
.foods {
  padding: 0, 5px, 5px, 5px;
}
.foods img {
  width: 100%;
  height: 150px;
}
.foods p {
  font-size: 8px;
  margin-top: 15px, 15px;
  margin: 15px;
  color: #8f8c8c;
}
.foodList1 {
  padding: 10px;
  margin-bottom: 30px;
}
.foodList1 .name {
  /* display: inline-block; */
  margin-left: 60px;
  font-size: 15px;
}
.foodList1 img {
  width: 50px;
  height: 80px;
  float: left;
  margin-right: 10px;
}
.foodList1 span {
  display: inline-block;
  padding: 4px;
  background-color: rgb(224, 220, 220);
  font-size: 5px;
  margin-right: 10px;
  margin-top: 10px;
}
.foodList1 p {
  font-size: 8px;
}
.foodList1 .price {
  font-weight: bold;
  float: left;
}
.foodList1 .add {
  float: right;
  width: 20px;
  height: 20px;
  line-height: 20px;
  background-color: rgb(218, 120, 29);
  text-align: center;
  font-size: 20px;
  border-radius: 100%;
  color: #fff;
}
</style>