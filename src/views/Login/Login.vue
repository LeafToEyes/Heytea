<template>
  <div>
    <div class="boxx">
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F02%2F20200502154654_x4FfF.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668216119&t=034a6a97d4355cfe89bb33e9b1a31096"
        alt=""
      />
    </div>
    <van-nav-bar title="登录" left-arrow @click-left="onClickLeft" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <!-- 通过 validator 进行函数校验 -->
        <van-field
          v-model="value1"
          name="username"
          placeholder="用户名"
          :rules="[
            {
              validator,
              message:
                '请输入正确用户名:用户名仅支持中文、字母、数字、“-”“_”的组合,4-20个字符',
            },
          ]"
          ref="ruleFormRef"
        />
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          type="password"
          v-model="value2"
          name="password"
          placeholder="密码"
          :rules="[
            {
              pattern,
              message:
                '请输入正确格式:以字母开头,长度在6~18之间,只能包含字母、数字和下划线',
            },
          ]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit" class="btn">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
  <p @click="goRegister">没有账号，点击注册</p>
</template>

<script setup lang="ts">
import { ref, onUnmounted, onMounted, watch } from "vue";
import { Toast } from "vant";
import axios from "axios";
import md5 from "js-md5";
import { useRouter } from "vue-router";
import emitter from "../../mitt/eventbus.ts";
import { useRoute } from "vue-router";
const route = useRoute();

emitter.emit("Footer", false);
onUnmounted(() => {
  emitter.emit("Footer", true);
});
const router = useRouter();
const value1 = ref("");
const value2 = ref("");
// console.log(value2);
// 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
const pattern = /^[a-zA-Z]\w{5,17}$/;
// 校验函数返回 true 表示校验通过，false 表示不通过
// 用户名仅支持中文、字母、数字、“-”“_”的组合，4-20个字符
const validator = (val) => /^[\u2E80-\u9FFF\w-]{4,20}$/.test(val);

// 校验函数可以返回 Promise，实现异步校验
const onSubmit = async (val) => {
  let params = {
    username: val.username,
    password: md5(val.password),
  };
  // console.log(params)

  await axios({
    url: "http://localhost:12580/user",
    method: "GET",
    data: {},
    params,
  }).then((res) => {
    // console.log(res.data[0].username)
    if (res.data[0].username == val.username) {
      router.push("/home");
      //  登录信息存储到本地
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      Toast.success("登录成功");
    } else {
      Toast.fail("登录失败,请检查用户名或密码");
    }
  });
};
// 跳转到注册页面
const goRegister = () => {
  router.push("/register");
};
const onClickLeft = () => {
  history.back();
};
</script>

<style scoped lang="scss">
p {
  text-align: center;
  // color: blue;
  z-index: 999;
}
.boxx {
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    display: block;
    position: fixed;
    top: -43px;
    left: 0;
    z-index: -100;
  }
}
.btn {
  background-color: rgb(198, 98, 111);
  border: 0;
}
</style>
