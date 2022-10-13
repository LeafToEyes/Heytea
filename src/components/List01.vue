<template>
  <div class="foods">
    <div class="foodList1">
      <div class="name">芒芒甘露冰棒</div>
      <img src="../assets/img/food/f1.png"
           alt="" />
      <p>人气多肉芒芒甘露变身冰棒。爽口芒芒冰壳中夹有爱文芒果果肉与酸甜</p>
      <div class="price">￥18</div>
      <div @click="add(foodList3, i)"
           class="add">+</div>
    </div>

  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
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