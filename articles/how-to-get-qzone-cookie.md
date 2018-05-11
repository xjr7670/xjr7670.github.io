以chrome为例

打开浏览器，打开网址：qzone.qq.com，此时按下键盘上的**F12**键，会弹出开发者工具。在这个工具里面切换到Network标签

然后输入自己的QQ账号、密码，登录进空间

此时在开发者工具的Network标签的左下角，有个Name标签页，把滚动条拉到最上面，会发现有一个只显示了自己的QQ号码的请求。用鼠标右键点击一下它

此时把视线转移到右边，通常会有5个标签：

---
Headers: 
Preview:
Response:
Cookies:
Timing:
---

选择`Headers`，在下面的内容中，找到`Request Headers`，再从这个Headers的内容中找到cookie那个参数，冒号后面的内容就是需要的cookie内容了


*用Firefox的用户要注意，据我所知它的F12中是会自动把过长的值隐藏的，要把隐藏的内容也展开，这样才会得到完整的cookie*
