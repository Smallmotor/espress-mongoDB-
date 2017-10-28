# express+mongodb建立简单的文章发布系统
> 最近转战后端,发现还是nodejs比较好玩,就抽时间做个小玩意来练练手,回忆一下nodejs
## 使用了express
> 我看了一下,发现还是expres脚手架比较简洁,直接生成,项目比较小,省时又省力

学习express可以到我的另一篇博客进行学习

https://segmentfault.com/a/1190000011654289
## 使用了mongodb
> 因为我们只是做一个简单的文章发布系统,mongodb具有查询数据简单又快捷,操作起来简单易用,所以我就选择了mongodb,比较适合新手学习使用.

学习mongodb可以到我的另一篇博客进行学习

https://segmentfault.com/a/1190000011759860
## 环境的搭建
首先我们要安装[express脚手架]和[mongodb]
```c
npm install express-generator -g
//安装express脚手架
express Blog -e
//创建项目文件夹,使用ejs模版
cd Blog
//进入项目文件夹
npm install
// 安装所有依赖包
```
mongodb安装包可以去官网下载,安装之后启动后台服务端
```c
//启动服务端
D:\MongoDB\Server\3.2\bin\mongod.exe --dbpath "D:\MongoDB\data" --journal --storageEngine=mmapv1
```
完整代码在我的github上,有兴趣的可以看一看


https://github.com/Smallmotor/express-mongoDB-  
