#**概览**
***
####深入了解 Tui 底层结构的关键部分，包括我们让 web 开发变得更好、更快、更强壮的最佳实践。

##**排版与链接**
####Tui采用官方的网页初始化代码,为了增强跨浏览器表现的一致性，后期准备使用 Normalize.css 。

##**布局容器**
####Tui 需要为页面内容和栅格系统包裹一个 .container 容器。我们提供了两个作此用处的类。注意，由于 padding 等属性的原因，这两种 容器类不能互相嵌套。
####**.container** 类用于固定宽度并支持响应式布局的容器。
>     <div class="container">
>  		...
>     </div>

#**栅格系统**
***
####Tui 提供了一套响应式栅格系统,会自动分为最多12列。它包含了易于使用的预定义类,非常有益于响应式的布局。

##**简介**
####栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。下面就介绍一下Tui 栅格系统的工作原理：
>* “行”需要包含在 .container （固定宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。
>* 通过“行”在水平方向创建一组“列（column）。”
>* 例如.col-xs-4 这种预定义的类，可以用来快速创建栅格布局。
>* 栅格系统中的列是通过指定1到12的值来表示其跨越的范围。例如，三个等宽的列可以使用三个 .col-xs-4 来创建。
>* 栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。
>* 屏幕大于1000像素(@media (min-width: 1001px))使用**.col-md-**\*，屏幕在768像素到1000像素之间(@media(min-width:768px) and (max-width: 1000px))使用**\.col-md-**\*,屏幕小于768像素(@media(max-width:768px))使用**\.col-xs-**\*.
##**列顺序**

####通过使用 **.col-md-push-**\*和 **.col-md-pull-**\* 类就可以很容易的改变列（column）的顺序。

#**响应式工具**
***
##**可用的类**
####通过单独或联合使用以下列出的类，可以针对不同屏幕尺寸隐藏或显示页面内容。
>* .visible-md-block、.visible-sm-block、.visible-xs-block:分别是在不同屏幕下设置其display: block;
>* .visible-md-inline、.visible-md-inline、.visible-md-inline:分别是在不同屏幕下设置其display: inline;
>* .visible-md-inline-block、.visible-md-inline-block、.visible-md-inline-block:分别是在不同屏幕下设置其display: inline-block;
>* .hidden-md、.hidden-sm、.hidden-xs:分别是在不同屏幕下设置其display: none;

#**辅助类**
***
##**三角符号**
####通过使用三角符号可以指示某个元素具有下拉菜单的功能。注意，向上弹出式菜单中的三角符号是反方向的。
>     <span class="caret"></span>

