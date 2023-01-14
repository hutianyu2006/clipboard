English | [简体中文](https://github.com/hutianyu2006/clipboard/blob/main/README-zh-CN.md)

#Bengbu Clipboard

  This is a Web 3.0 Pastebin similar to [Ubuntu Pastebin](https://pastebin.ubuntu.com/), but it is running based on a peer-to-peer hypermedia protocol called [IPFS](https://ipfs.tech/). No login required, and theoretically it may store unlimited data.

  ##Features

  1.The only place where the overhead is higher should be to build your own IPFS read-write nodes, after all, the free services I know are now charging.

  2.You don't have to worry about abuse even if no login page, because the amount of space IPFS can give you to use is larger than huge.

  3.The UI is not beautiful, but simple and practical.

  4.Using native Javascript, ~~because I can't understand the Vue documentation~~.

  ##Demo

  [https://😅.eu.org/](https://xn--j28h.eu.org/) (The origin of the name of this program, which is a Chinese meme.)

  [https://i-am-cjc.ml/](https://i-am-cjc.ml/) 

  ##Depolyment

  As the main files are static HTML files, you can just clone it into a folder and set it as the web root(details can be seen in the help page of the server software you are using). Also, it is a Cloudflare Pages friendly project, just folk it and depoly it to [Cloudflare Pages](https://pages.cloudflare.com/)

  ##Configuration

  It does not have much configuration to do, mainly the three variables in `config.js`:

  `ipfsNode`: A read-writeable IPFS Node. It is POSSIBLE to launch one in the user's browser, but there would be no difference between storing it directly into the localStorage, as data in IPFS flows slowly. So,  that plan won't be included in consideration. The current default node is sponsored by [Pigeon Cloud](https://fast.pigeon.sbs/).

  `urlShortener`: A link shortener. As the original link of a clipboard stored is usually long(thanks to the Content ID of IPFS), a link shortener is required. Link shortener built by [klein](https://github.com/kamaln7/klein) can be used here, and if you hope that you can use another link shortening service, please modify the displayURL() function in both `index.html` and `mobile.html`.

  `key`: An array containing 32 random integers, used for AES encryption and decryption.**WARNING: MODIFYING IT WILL DESTORY ALL THE DATA PREVIOUSLY STORED. BE CAREFUL!**

  ##Development

  Fork or clone it, and just have fun editing.

  ##Contribute

  I am learning about Github, and I need some time to understand how to deal with pull requests. However, [Issues](https://github.com/hutianyu2006/clipboard/issues) are welcomed anytime.

  ##Credits

  [jquery/jquery](https://github.com/jquery/jquery)

  [ipfs-inactive/js-ipfs-http-client](https://github.com/ipfs-inactive/js-ipfs-http-client)

  [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss)

  [ricmoo/aes-js](https://github.com/ricmoo/aes-js)

  ##Translation

  I tried to add a Google translate addon for multi-language, but it didn't work. Just talk about it later.