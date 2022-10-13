<template>
  <nav>
    <ul>
      <li>
        <router-link to="/order/now"
                     active-class="active">
          <span>当前订单</span>
        </router-link>
      </li>
      <li>
        <router-link to="/order/old"
                     active-class="active">
          <span>历史订单</span>
        </router-link>
      </li>
    </ul>
  </nav>
  <router-view></router-view>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eaeaea;

  ul {
    display: flex;
    text-align: center;

    li {
      flex: 1;
      display: flex;
      justify-content: center;
      a.active {
        width: 40%;
        border-bottom: 2px solid red;
        display: block;
        color: #fe5100;
      }
    }
  }
}
</style>