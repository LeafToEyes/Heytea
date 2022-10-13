
<template>
  <!-- 顶部 -->

  <div class="header">
    <span>购物车</span>
  </div>

  <!-- 列表 -->

  <div class="list">

    <div class="item">

      <input type="checkbox">

      <img src="../../assets/img/food/f2.png"
           alt="图片">

      <div class="item-right">

        <p>火腿蛋可松脆堡</p>

        <p class="price">

          <span>&yen;25.00</span>

          <span>x2</span>

        </p>

      </div>

    </div>

  </div>
  <!-- 结算 -->

  <div class="balance">

    <div class="balance-left">

      <input type="checkbox">

      <span>全选</span>

    </div>

    <div class="balance-right">

      <span>合计：<b>0</b>.00</span>

      <button>结算</button>

    </div>

  </div>

  <!-- 底部 -->

  <div class="footer">

    <div class="footer-list">

      <i class="iconfont icon-home"></i>

      <span>首页</span>

    </div>

    <div class="footer-list">

      <i class="iconfont icon-fenlei-copy"></i>

      <span>分类</span>

    </div>

    <div class="footer-list">

      <i class="iconfont icon-tubiaolunkuo-"></i>

      <span>购物车</span>

    </div>

    <div class="footer-list">

      <i class="iconfont icon-wode"></i>

      <span>我的</span>

    </div>

  </div>
</template>

<script setup lang="ts">
import router from '../../router'
const back = () => {
  router.push('/mBan')
}
</script>
<style scoped lang="scss">
* {
  margin: 0;

  padding: 0;

  box-sizing: border-box;

  /*（红色）这里目的在于更好的计算盒子尺寸（如div）
box-sizing: content-box 盒子尺寸(width)不包含border和padding, 当给盒子设置border和padding, 盒子变大了
box-sizing: border-box 盒子尺寸(width)包含了border和padding, 给盒子设置border和padding, 盒子大小不变 */
}

body {
  background-color: #f4f4f4; /* 背景颜色设置为#f4f4f4 */
}

.header {
  top: 0;

  width: 100%;

  height: 50px;

  background-color: #fff;

  position: fixed;
  display: flex;

  justify-content: space-between;

  align-items: center;
}

.header span:first-child {
  padding-left: 10px;

  color: red;
}

.header span:last-child {
  padding-right: 10px;

  color: red;
}

.list {
  margin-top: 51px;

  background-color: #fff;

  width: 100%;
}

.list .item {
  height: 120px;

  display: flex;

  align-items: center;

  border-bottom: 1px solid #f6f6f6;
}

.list .item input {
  height: 20px;

  margin-left: 20px;
}

.list .item img {
  width: 95px;

  height: 95px;

  background-color: #f4f4f4;

  margin-left: 10px;
}

.list .item .item-right {
  flex-grow: 1; /*剩余空间全部分配给列表中右边的部分（弹性盒子：剩余空间分配）*/

  height: 95px;

  display: flex;

  flex-direction: column; /*将盒子的排列方向设置为列，也就是竖向（弹性盒子：排列方向：行row 列column）*/

  justify-content: space-between;

  padding-left: 10px;

  padding-right: 10px;
}

.list .item .item-right .price {
  display: flex;

  justify-content: space-between;
}

.list .item .item-right .price span:first-child {
  color: red;
}

.list .item .item-right .price span:last-child {
  color: #c5b6b9;
}

.balance {
  bottom: 50px; /*距离底端设置为50px，left、right、top、bottom的使用前提是设置了固定位置，也就是说在有position:fixed;的基础上才可以使用*/

  height: 60px;

  width: 100%;

  background-color: #fff;

  position: fixed;

  display: flex;

  justify-content: space-between;

  border-bottom: 1px solid #f6f6f6;
}

.balance .balance-left {
  display: flex;

  justify-content: center;

  align-items: center;

  margin-left: 20px;
}

.balance .balance-left input {
  height: 20px;
}

.balance .balance-left span {
  padding-left: 10px;
}

.balance .balance-right {
  display: flex;

  justify-content: center;

  align-items: center;

  margin-right: 20px;
}

.balance .balance-right span {
  padding-right: 10px;
}

.balance .balance-right button {
  height: 40px;

  width: 110px;

  background-color: red;

  color: #fff;

  border-radius: 20px;

  border: 0;
}

.footer {
  bottom: 0;

  height: 50px;

  width: 100%;

  background-color: #fff;

  position: fixed;

  display: flex;

  justify-content: space-around;

  align-items: center;
}

.footer .footer-list {
  height: 100%;

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;
}

.footer .footer-list .iconfont {
  font-size: 20px;
}

.footer .footer-list:nth-child(3) {
  color: red;
}
</style>