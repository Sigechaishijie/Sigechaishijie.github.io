# 前言
我先把效果放在前面了哈
![Chrome 垂直标签页](https://github.com/user-attachments/assets/e3e9dd0d-677a-400d-9107-34f546fd6a78)
可以看到这里我配置了非常完美的垂直标签页，并且隐藏掉了原本的水平标签页，先说一下这个方案的缺点：顶部的按钮变得十分的大，并且扩展栏不可随着浏览器一起启动，必须在浏览器启动后，按一次 Alt + V
这里我并没有使用 Chrome，而是使用了百分浏览器，不过配置过程是一样的
# 扩展
想要实现垂直标签页的效果，就得装一个扩展。这里推荐[侧边栏垂直标签页](https://chromewebstore.google.com/detail/akahnknmcbmgodngfjcflnaljdbhnlfo?hl=zh-CN&utm_source=ext_sidebar)
不过，考虑大陆上 Chrome 应用商店可能有点刑，让生活越来越有判头，因此给出[一个 CRX 搜搜的第三方扩展商店](https://www.crxsoso.com/webstore/detail/akahnknmcbmgodngfjcflnaljdbhnlfo)
# 隐藏水平标签页
要隐藏水平标签页，我们需要启用两个实验性功能
浏览器地址栏输入 chrome://flag 回车进入
搜索 Touch UI Layout，启用
搜索 WebUI tab strip，启用
# 大功告成
现在重启 Chrome，使用快捷键 Alt + V，应该就能看到你的，完美的，垂直标签页了