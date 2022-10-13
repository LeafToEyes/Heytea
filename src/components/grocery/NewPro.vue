<template>
    <!-- 上新 -->
    <img class="new" v-for="item in newPro" :key="'news'+item.id" :src="item.picUrl" alt=""
        @click="gotoDetail(item.id)">
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { GroceryNewType } from '../../types/type';
import { useRouter } from 'vue-router';

// 百货上新
const newPro = ref<Array<GroceryNewType>>([]);

// 路由 编程式
const router = useRouter();

// 请求数据
onMounted(async () => {
    let res = await axios.get('http://localhost:12580/groceryNew');
    // console.log(res);
    newPro.value = res.data
})

const gotoDetail = (id: number) => {
    router.push('/groDetail/' + id)
}

</script>

<style scoped lang='scss'>
.new {
    width: 100%;
    height: 151px;
    border-radius: 6.5px;
    padding: 0 10px 10px;
}
</style>