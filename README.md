# vue-sample
## 指令
以`v-`开头
- `v-bind`
绑定参数和表达式值
``` html
<!--在这里class是参数，告知v-bind指令将该元素的class属性与表达式"{'class1': use}"的值绑定-->
<div v-bind:class="{'class1': use}">
</div>
```
- `v-if`
条件控制
``` html
<p v-if="seen">v-if指令使用true，false</p>
```
- `v-for`
遍历数组
``` html
<li v-for="site in sites">
   {{ site.text }}
</li>
```
- `v-on` 
用于监听DOM事件
``` html
<a v-on:click="show()"> 超链接点击事件 </a>
```