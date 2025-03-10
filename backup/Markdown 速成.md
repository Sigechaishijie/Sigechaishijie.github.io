# 前言
Gmeek 博客框架使用 Markdown 进行编写博客，并具有一些有趣的特性
段落

要创建段落，请使用空行来分隔。

这是一个段落。

这是另一个段落。

多个空格
小标题

要创建小标题，在小标题文本前添加至多六个 # 符号。# 符号的数量决定了小标题的级别。

# 这是标题 1
## 这是标题 2
### 这是标题 3
#### 这是标题 4
##### 这是标题 5
###### 这是标题 6

这是标题 1
这是标题 2
这是标题 3
这是标题 4
这是标题 5
这是标题 6
粗体、斜体、高亮

格式化文本也可以使用编辑相关的快捷键。
样式 	语法 	示例 	输出
粗体 	** ** 或 __ __ 	**粗体文本** 	粗体文本
斜体 	* * 或 _ _ 	*斜体文本* 	斜体文本
删除线 	~~ ~~ 	~~删除线文本~~ 	删除线文本
粗体和嵌套斜体 	** ** 和 _ _ 	**粗体和 _嵌套斜体_ 文本** 	粗体和 嵌套斜体 文本
粗体和斜体 	*** *** 或 ___ ___ 	***粗体和斜体文本*** 	粗体和斜体文本

如果需要将语法符号视为普通文本进行展示，需要在语法符号前加反斜杠进行转义。比如：

**这里的加粗会真正的加粗**

\*\*这里的加粗不会真正的加粗\*\*

*这里的倾斜会真正的倾斜*

\*这里的倾斜不会真正的倾斜\*

内部链接

Markdown 支持这种风格的内部链接：
    [运动三定律](运动三定律.md)

外部链接

如果要链接到外部URL，可以通过在方括号（[ ]）中填入描述链接的文本，然后在括号中（()）添加URL来创建内联链接。

[思哥の博客](https://blog.sigechaishijie.us.kg/)

思哥の博客

在链接中转义空格

如果你的URL包含空格，必须用 %20 替换它们。

外部图片

你可以通过在外部链接前加上 ! 符号来在笔记中插入外部图片。

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

恩格尔巴特

你可以通过在链接的锚文本中添加 |640x480 来更改图片尺寸，其中640是宽度，480是高度。

![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

如果只指定了宽度，图片会根据原始长宽比进行缩放。例如：

![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Tip

如果要添加来自仓库内部的图片，你也可以使用嵌入图片语法。
引用

你可以在文本前加上 > 符号来引用文本。

> 人类面临着越来越复杂和紧迫的问题，他们有效应对这些问题的能力对于社会的稳定和持续发展至关重要。

\- 道格·恩格尔巴特，1961

    人类面临着越来越复杂和紧迫的问题，他们有效应对这些问题的能力对于社会的稳定和持续发展至关重要。

- 道格·恩格尔巴特，1961
Tip

你可以通过在引用中的第一行添加 [!信息] 来将引用变成标注。
列表

你可以在文本前加上 -、* 或 + 来创建无序列表。

- 第一条
- 第二条
- 第三条

    第一条
    第二条
    第三条

要创建有序列表，每行以数字加上 . 开头。

1. 第一条
2. 第二条
3. 第三条

    第一条
    第二条
    第三条

任务列表

要创建任务列表，每个列表项以连字符和空格开头，后跟 [ ]。

- [x] 这是已完成的任务。
- [ ] 这是未完成的任务。

    这是已完成的任务。
    这是未完成的任务。

你可以在阅读视图中通过点击复选框来切换任务状态。
Tip

你可以通过在括号内添加字符 x 来将任务标记为已完成状态。

- [x] 牛奶

    牛奶

嵌套列表

所有类型的列表都支持嵌套。

要创建嵌套列表，请缩进一个或多个列表项：

1. 第一条
   1. 有序嵌套列表项
2. 第二条
   - 无序嵌套列表项

    第一条
        有序嵌套列表项
    第二条
        无序嵌套列表项

同样，你可以通过缩进一个或多个列表项来创建嵌套任务列表：

- [ ] 任务项 1
	- [ ] 子任务 1
- [ ] 任务项 2
	- [ ] 子任务 1

    任务项 1
        子任务 1
    任务项 2
        子任务 1

使用 Tab 或 Shift+Tab 来缩进或取消缩进一个或多个已选择的列表项，以便快速地组织列表。
水平线

你可以在单独的一行上使用三个或更多星号 ***、短横线 --- 或下划线 ___ 来添加水平线。这些分隔符号里允许有空格。

***
****
* * *
---
----
- - -
___
____
_ _ _

代码

你可以在段落里插入代码，或将其放在代码块中。
行内代码

你可以使用一对反引号在句子插入代码。

`反引号`中的文本将被格式化为代码。

反引号中的文本将被格式化为代码。

如果要在行内代码中使用反引号，请用双反引号将其包围，比如： 这是一句内部带有`反引号`的代码。

这是一句内部带有`反引号`的代码
代码块

要创建一个代码块，请用三个反引号括住代码。

```sh
cd ~/Desktop
```

cd ~/Desktop

你也可以通过使用 Tab 键或4个空格缩进文本来创建代码块。

    cd ~/Desktop

你可以在开头的三个反引号后添加语言名称来为代码块添加语法高亮。

```js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}

脚注

你可以使用以下语法向笔记中添加脚注[1]：

这是一个简单的脚注[^1]。

[^1]: 这是脚注的内容文本。
[^2]: 在每一行的开头添加2个空格，
  可以编写跨越多行的脚注。
[^注释]: 可以使用非数字来命名脚注。但渲染时，脚注仍然会显示为数字。这样可以更容易地识别脚注内容。

你也可以在句子中使用行内脚注。请注意插入符号在方括号外，将脚注内容写在方括号内。

你也可以使用内联脚注。^[这是一个内联脚注。]

Note

行内脚注仅在阅读视图中有效，不适用于实时预览。