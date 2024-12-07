# 前言
我先把效果放在前面了哈  
[![Firefox 垂直标签页](https://github.com/Sigechaishijie/Blog/assets/160098482/c36d169d-0328-4c0a-bdd7-bb61f69abaa6)](https://github.com/Sigechaishijie/Blog/assets/160098482/c36d169d-0328-4c0a-bdd7-bb61f69abaa6)  
可以看到这里我配置了非常完美的垂直标签页，并且隐藏掉了原本的水平标签页，先说一下这个方案的缺点：不支持 CSS 主题  
由于隐藏掉原本的垂直标签页，虽然非常美观，但是这是用 CSS 主题实现的，要实现就得覆盖掉原有的 userChrome.css
# 扩展
要拥有垂直标签页，首先我们需要装一个扩展，以下扩展三选一即可  
1.Sidebery 这是我个人最推荐的一个扩展，它可玩性非常高，设置选项丰富  
2.树状标签页 如果不是那么折腾，但又想要一个垂直标签页，并且功能较为丰富，可以选用它  
3.Tab Center Reborn 它的设置选项非常少
# CSS 主题
出处：卡饭论坛 [链接](https://bbs.kafan.cn/thread-2266989-1-1.html)  
若需要不通过卡饭论坛查看，下面是代码：
```js
@-moz-document url("chrome://browser/content/browser.xhtml") {

  :root:has(#browser > #sidebar-box:is([sidebarcommand="treestyletab_piro_sakura_ne_jp-sidebar-action"],
      [sidebarcommand="_3c078156-979c-498b-8990-85f7987dd929_-sidebar-action"], [sidebarcommand="tabcenter-reborn_ariasuni-sidebar-action"], [sidebarcommand="treetabs_jagiello_it-sidebar-action"], [sidebarcommand="_8d808887-ed13-4931-9f5a-4c0bff979a5a_-sidebar-action"], [sidebarcommand="sidebartabs_asamuzak_jp-sidebar-action"], [sidebarcommand="_f463182b-f93b-4b6d-9a68-b5e9d6d0fd40_-sidebar-action"]):not([hidden="true"])) {
	--uc-control-width: 136.5px;
    /** 默认模式控制按钮高度 */
    --uc-control-height: 40px;

    &[uidensity="compact"] {
      /** 紧凑模式控制按钮高度 */
      --uc-control-height: 34px;
    }

    &[uidensity="touch"] {
      /** 触控模式控制按钮高度 */
      --uc-control-height: 44px;
    }

    #navigator-toolbox {
      position: relative;
    }

    &[tabsintitlebar] {
      #titlebar:has(#toolbar-menubar[inactive="true"]) {
        height: 0;

        .titlebar-buttonbox-container {
          background-color: var(--toolbar-bgcolor);
        }
      }

      #titlebar {
        height: calc(12px + 2 * var(--toolbarbutton-inner-padding));
      }

      .titlebar-buttonbox-container {
        position: absolute;
        top: 0;
        right: 0;

        @media (-moz-bool-pref: "layout.css.osx-font-smoothing.enabled") {
          right: unset;
          left: 0;
        }
      }
    }

    #TabsToolbar {
      --tabs-navbar-shadow-size: 0px;

      &>*:not(.titlebar-buttonbox-container) {
        display: none;
      }

      .titlebar-buttonbox-container {
        height: var(--uc-control-height, calc(12px + 2 * var(--toolbarbutton-inner-padding)));
      }
    }

    /** 菜单栏未激活时，在菜单栏里的控制按钮就不显示，不然控制按钮重叠显示 */
    #toolbar-menubar[inactive="true"] .titlebar-buttonbox-container {
      display: none !important;
    }

    #navigator-toolbox:has(#toolbar-menubar[inactive="true"]) {
      >#nav-bar {
        margin-inline: 0 var(--uc-control-width);

        @media (-moz-bool-pref: "layout.css.osx-font-smoothing.enabled") {
          margin-inline: var(--uc-control-width) 0;
        }
      }
    }
  }
}
```
请尽量去卡饭论坛  
浏览器地址栏输入 about:config 回车进入后，搜索 toolkit.legacyUserProfileCustomizations.stylesheets，将值改为 true  
浏览器地址栏输入 about:support 回车进入后，点击打开配置文件夹，在其中新建一个 chrome 文件夹（如果没有）  
进入此文件夹，新建一个名叫 userChrome.css 的文件，用记事本打开此文件，将在卡饭论坛中的代码复制进去，保存（如果已有，添加在最后即可）
# 大功告成
现在，重启浏览器，打开之前安装的扩展，你应该能看到你的，完美的，垂直标签页了