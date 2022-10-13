<template>
  <div class="boxx">
    <img
      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202006%2F04%2F20200604013432_uzPeL.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668216634&t=ec84b506fc30208d656700a4ef567d67"
      alt=""
    />
  </div>
  <van-nav-bar title="注册" left-arrow @click-left="onClickLeft" />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <div>
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
                '请输入正确用户名:支持中文、字母、数字、“-”“_”的组合,4-20个字符',
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
                '请输入正确格式:以字母开头,长度在6~18之间,包含字母、数字和下划线',
            },
          ]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit" class="btn">
          提交
        </van-button>
      </div>
    </van-form>
    <p @click="goLogin">已有账号，点击登录</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import md5 from "js-md5";
import { Toast } from "vant";
import emitter from "../../mitt/eventbus.ts";
import moment from "moment";
// location.reload();
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

// 验证成功之后的回调
const onSubmit = async (val) => {
  let data = {
    username: val.username,
    password: md5(val.password),
    avatar:
      "https://i1.hdslb.com/bfs/face/52fdc546888d1cc16628d90785e89f84f9d1b202.jpg@240w_240h_1c_1s.webp",
    registerTime:moment(new Date()).format('YYYY-MM-DD hh:mm:ss')
  };
  await axios({
    url: "http://localhost:12580/user",
    method: "post",
    data,
  }).then((res) => {
    Toast("注册成功");
    router.push("/login");
  });
};
// const onFailed = (errorInfo) => {
//   console.log("failed", errorInfo);
// };
const onClickLeft = () => {
  history.back();
};
const goLogin = () => {
  router.push("/login");
};
</script>

<style scoped lang="scss">
p {
  text-align: center;
  z-index: 999;
}
.boxx {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    display: block;
    position: absolute;
    top: -61px;
    left: 0;
    z-index: -100;
  }
}
.btn {
  background-color: rgb(90, 109, 171);
  border: 0;
}
</style>
