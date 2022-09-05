export default defineAppConfig({
  pages: ["pages/home/index", "pages/pay/index", "pages/my/index"],
  tabBar: {
    color: "#000000",
    selectedColor: "#4f4f4f",
    backgroundColor: "#cccccc",
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "assets/img/home.png",
        selectedIconPath:"assets/img/home-active.png"
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
        iconPath: "assets/img/my.png",
        selectedIconPath:"assets/img/my-active.png"
      }
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
