简体中文 | [English](https://github.com/hutianyu2006/clipboard/blob/main/README.md)

# 蚌埠剪贴板

  这是一个类似于[Ubuntu Pastebin](https://pastebin.ubuntu.com/)的Web 3.0 剪贴板, 但它是基于一个名为 [IPFS](https://ipfs.tech/)的点对点超媒体协议运行的。不需要登录，而且理论上它可以存储无限的数据。

  ## 特性

  1.唯一开销较大的地方应该就是自建IPFS可读写节点了，毕竟我知道的免费服务现在都收费了。

  2.即使不设置登录也不用担心滥用，因为IPFS可以给你使用的空间相当庞大。

  3.UI虽说说不上美观，但是简单实用。

  4.使用原生Javascript，~~因为看不懂Vue文档~~。

  ## 部署

  由于主要文件是静态HTML文件，你只需将其克隆到一个文件夹中，并将其设置为网站根目录（详情可在你所使用的服务器软件的帮助页面中查看）。此外，它是一个对Cloudflare Pages友好的项目，只要Fork一下，然后部署到[Cloudflare Pages](https://pages.cloudflare.com/)就行。

  ## Demo

  [https://😅.eu.org/](https://xn--j28h.eu.org/) （蚌埠剪贴板的名字来源）（中国大陆貌似不可用）

  [https://i-am-cjc.ml/](https://i-am-cjc.ml/) 

  ## 配置

  它没有太多的配置要做，主要是`config.js`中的三个变量 :

  `ipfsNode`: 一个可读可写的IPFS节点。在用户的浏览器中启动一个节点其实可以，但是和直接存储在localStorage中没有什么区别，因为IPFS中的数据更新超慢。所以，这个方案不做考虑。现在使用的默认节点由 [鸽云](https://fast.pigeon.sbs/)赞助。

  `urlShortener`: 一个短链接API. 由于存储的剪贴板链接通常很长(IPFS的内容ID干的好事), 短链接很有必要. 用[klein](https://github.com/kamaln7/klein)搭建的短链接服务可以在这直接使用, 如果你希望使用别家的短链接服务, 请修改`js/main.js`里的`displayURL()`函数。

  `key`: 一个包含了32个整数的数组。用于AES加密和解密。**警告：修改它将破坏所有先前存储的数据。请注意!**

  ## 开发

  Fork或者clone一下，随你怎么皮。

  ## 做贡献

  ~~Github我还不怎么会用,怎么处理交上来的PR也还在学，但是[Issues](https://github.com/hutianyu2006/clipboard/issues)随时欢迎。~~ 已经学废了，直接交PR或者Issues吧。

  ## 使用的其他开源项目

  [jquery/jquery](https://github.com/jquery/jquery)

  [ipfs-inactive/js-ipfs-http-client](https://github.com/ipfs-inactive/js-ipfs-http-client)

  [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss)

  [ricmoo/aes-js](https://github.com/ricmoo/aes-js)