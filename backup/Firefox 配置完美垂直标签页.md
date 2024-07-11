# 前言
我先把效果放在前面了哈
![Firefox 垂直标签页](https://github.com/Sigechaishijie/Blog/assets/160098482/c36d169d-0328-4c0a-bdd7-bb61f69abaa6)
可以看到这里我配置了非常完美的垂直标签页，并且隐藏掉了原本的水平标签页，先说一下这个方案的缺点：不支持 CSS 主题
由于隐藏掉原本的垂直标签页，虽然非常美观，但是这是用 CSS 主题实现的，要实现就得覆盖掉原有的 userChrome.css
# 扩展
要拥有垂直标签页，首先我们需要装一个扩展，以下扩展三选一即可
1.Sidebery 这是我个人最推荐的一个扩展，它可玩性非常高，设置选项丰富
2.树状标签页 如果不是那么折腾，但又想要一个垂直标签页，并且功能较为丰富，可以选用它
3.Tab Center Reborn 它的设置选项非常少
# CSS 主题
出处：卡饭论坛
链接：[https://bbs.kafan.cn/thread-2266989-1-1.html](url)
若需要不通过卡饭论坛查看，我把它搬运到了https://Sigechaishijie.github.io/Blog/Firefox [配置完美垂直标签页/userChrome.css](url)
请尽量去卡饭论坛
浏览器地址栏输入 about:config，回车进入后，搜索 toolkit.legacyUserProfileCustomizations.stylesheets，将值改为 true
浏览器地址栏输入 about:support，回车进入后，点击打开配置文件夹，在其中新建一个 chrome 文件夹（如果没有）
进入此文件夹，新建一个名叫 userChrome.css 的文件，用记事本打开此文件，将在卡饭论坛中的代码复制进去，保存（如果已有，添加在最后即可）
# 大功告成
现在，重启浏览器，打开之前安装的扩展，你应该能看到你的，完美的，垂直标签页了