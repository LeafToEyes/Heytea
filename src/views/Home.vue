<template>
  <!-- 轮播图 -->
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in bannerList" :key="'banner' + index">
      <img :src="item.bannerPic" alt="" class="banner1" />
    </van-swipe-item>
  </van-swipe>
  <!-- 门店自取  外卖按钮 -->
  <div class="box">
    <div class="store">
      <div @click="GoOrder">门店自取</div>
    </div>
  </div>

  <!-- 会员模块 -->
  <div class="member">
    <!-- 上方欢迎 -->
    <div class="member-top" v-if="!userName">
      <div class="member-left">
        <p class="welcome">欢迎来到喜茶GO</p>
        <span>更好的会员服务，注册登录即可体验</span>
      </div>
      <div class="member-right">
        <button class="login" @click="GoLogin">立即登录</button>
      </div>
    </div>
    <div class="member-top" v-else="userName">
      <div class="member-left">
        <p class="name" @click="goMy">{{ userName }}</p>
        <span>已解锁周一免配送费一项特权></span>
      </div>
      <div class="member-right">
        <h2>喜茶券<van-icon name="gold-coin-o" /></h2>
        <br />
      </div>
    </div>
    <!-- 下方会员功能 -->
    <div class="member-bottom">
      <ul class="member-equity">
        <li @click="teaParty">
          <img src="../assets/icon/喜 · 茶话会.png" alt="" />喜·茶话会
        </li>
        <li @click="drinkTogether">
          <img src="../assets/icon/一起喝.png" alt="" />一起喝
        </li>
        <li @click="studentCard">
          <img src="../assets/icon/学子贵宾卡.png" alt="" />学子贵宾卡
        </li>
        <li @click="MemberShipCard">
          <img src="../assets/icon/喜卡.png" alt="" />喜卡
        </li>
        <li @click="GroupPurchase">
          <img src="../assets/icon/阿喜团餐.png" alt="" />阿喜团餐
        </li>
        <li @click="Grocery">
          <img src="../assets/icon/喜茶百货.png" alt="" />喜茶百货
        </li>
      </ul>
    </div>
  </div>

  <!-- news -->
  <div id="news" @click="goBanner">
    <van-swipe class="my-swipe" indicator-color="white" @change="onChange">
      <van-swipe-item
        v-for="(item, index) in bannerList2"
        :key="'bannerList2' + index"
      >
        <img :src="item.bannerPic" alt="" class="banner2" />
      </van-swipe-item>
    </van-swipe>
    <div class="p0 p">
      <p>喜茶×原神 | 约定之旅，再遇欢「喜」</p>
      <h3>点击查看「喜遇原神」特别版旅行手记</h3>
    </div>
    <div class="p1 p">
      <p>七夕，只喜青绿，只喜你</p>
      <h3>当古风碰撞新茶饮，中式美学亦可现代。</h3>
    </div>
    <div class="p2 p">
      <p>喜茶×梦华录│喜·半遮面，开张!</p>
      <h3>路过就闻得紫苏香，相传店内还有点茶绝技?</h3>
    </div>
    <div class="p3 p">
      <p>诚邀见证，绝不打脸</p>
      <h3>一个事实，一个决定</h3>
    </div>
  </div>
  <!-- ads -->
  <div class="bottompic" @click="goNewTea">
    <img :src="pic" alt="" />
    <!-- <NewTeaCreator /> -->
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import axios from "axios";
import { onMounted, ref } from "vue";
import { PullRefresh } from "vant";
// import NewTeaCreator from "../components/home/NewTeaCreator";
const router = useRouter();
// 顶部banner
let bannerList = ref<Array>([]);
// 底部banner
let bannerList2 = ref<Array>([]);
// 底部图片
let pic = ref();
// 用户名
let userName = ref("");
userName.value = JSON.parse(localStorage.getItem("userInfo"))
  ? JSON.parse(localStorage.getItem("userInfo"))[0].username
  : "";
// JSON.parse 还原
// console.log(JSON.parse(localStorage.getItem("userInfo"))[0].username);

onMounted(async () => {
  // 获取底部图片
  axios.get("http://localhost:12580/others").then((res) => {
    pic.value = res.data[2].picture;
  });
  // 顶部banner
  const res = await axios.get("http://localhost:12580/bannerHomeTop");
  bannerList.value = res.data;

  // 底部banner
  const ret = await axios.get("http://localhost:12580/bannerHomeBottom");
  bannerList2.value = ret.data;
});
// 跳转到茶话会
const teaParty = () => {
  router.replace({ path: "/teaparty" });
};
// 跳转到点单
const drinkTogether = () => {
  router.push("/buy");
};
const studentCard = () => {
  router.push("/studentcard");
};
const MemberShipCard = () => {
  router.push("/membershipcard");
};
const GroupPurchase = () => {
  router.push("/grouppurchase");
};
const Grocery = () => {
  router.push("/grocery");
};
const goMy = () => {
  router.push("/center");
};

// 跳转到登录页面
const GoLogin = () => {
  // console.log(router);
  router.push({ path: "/login" });
};
// 跳转到点单模块
const GoOrder = () => {
  router.push({ path: "/buy" });
};
// 跳转到外卖______________________
// const GoTakeOut=()=>{
// router.push({path:""})
// }
// 跳转到灵感来了
const goNewTea = () => {
  router.push("/newteacreator");
};
// 新闻轮播切换文字
const onChange = (index) => {
  //   console.log(index + "我出现啦");
  const p = document.querySelectorAll(".p");
  //   console.log(p);
  //   全部隐藏
  p[0].style.display = "none";
  p[1].style.display = "none";
  p[2].style.display = "none";
  p[3].style.display = "none";
  //   展示需要的p
  p[index].style.display = "block";
};
// 底部轮播图
const goBanner = () => {
  router.push("/bottombanner");
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
//门店自取  外卖按钮
.box {
  display: flex;
  width: 90%;
  height: 100px;
  justify-content: center;
  align-content: center;
  text-align: center;
  line-height: 100px;
  font: 550 22px/100px "";
  background-color: #fff;
  margin: 5%;
  .store {
    width: 150px;
  }
}

// 会员模块
.member {
  background-color: #fff;
  margin: 15px;
  .member-top {
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: space-evenly;
    // line-height: 100px;
    // align-content:center;
    padding-top: 25px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 5px;
    .welcome {
      font: 500 25px/30px "黑体";
    }
    .name {
      padding-bottom: 10px;
      font: 800 25px/30px "黑体";
    }
    h2 {
      font: 500 18px/70px "黑体";
    }
  }
  .member-bottom {
    ul {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      li {
        display: block;
        width: 33%;
        height: 100px;
        // margin-bottom: 30px;
        text-align: center;
        font: 200 16px "宋体";
        img {
          display: block;
          margin: 7px 30px;
          width: 50%;
          height: 50%;
        }
      }
    }
  }
  .login {
    width: 80px;
    height: 40px;
    background-color: #222;
    color: white;
    border: none;
  }
}
// 新闻板块
#news {
  margin: 15px;
  // padding-bottom: 150px;
  background-color: #fff;
  .p1,
  .p2,
  .p3 {
    display: none;
  }
  .p {
    p {
      font: 500 18px/30px "";
      color: black;
    }
    h3 {
      font: 300 15px/20px "";
    }
  }
}
.banner1,
.banner2 {
  width: 100%;
  height: 100%;
}
// 底部图片
.bottompic {
  width: 100%;
  height: 100%;
  padding-bottom: 55px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
