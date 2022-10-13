import { createStore } from 'vuex'
export default createStore({
  // 定义公共的数据资源
  state: {
    // cityInfo: window.localStorage.getItem("cityinfo") ?
    //   JSON.parse(window.localStorage.getItem("cityinfo") as string) :
    //   {
    //     cityId: "440100",
    //     name: "广州"
    //   },
    userInfo: window.localStorage.getItem("userInfo") ?
      window.localStorage.getItem("userInfo") : ""
  },

  // 计算属性
  getters: {
  },

  // 同步修改
  mutations: {
    // 修改数据资源的方法
    // SetChoseCity(state, cityInfo) {
    //   // 防止刷新页面后丢失token
    //   window.localStorage.setItem("cityinfo", JSON.stringify(cityInfo));
    //   // state.cityInfo = cityInfo;
    // },
    // 更新Token的值
    UpdateToken(state, userInfo) {
      window.localStorage.setItem("userInfo", userInfo);
      // state._token = _token;
    }
  },
  // 异步操作在action中进行，再传递到mutation
  actions: {
    // 修改 state 的数据 commit提交
    // ASYNCSetChoseCity(context, cityInfo) {
    //   context.commit("SetChoseCity", cityInfo);
    // },
    AUpdateToken(context, userInfo) {
      context.commit("UpdateToken", userInfo);
    }
  },

  // 管理复杂模块
  modules: {


  }
})