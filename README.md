# todos-uni-app
基于uni-app的一款多端项目。  
Todo —— 专注要做的事。
## 功能需求
- 已完成功能
  - 添加待做项
  - 完成待做项（点击未完成项）
  - 删除已完成项（点击已完成项）
  - 时间戳格式化（ISO 8601）
  - 多端 其他未进行测试
    - 微信小程序
	- H5
  - 使用vuex
  - 使用本地存储（使用了[vuex-persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate)插件）
  - 优化todo列表（未完成的按添加最久时间排列-先添加的排前面，同时完成的项目会放到最后，删除操作不影响列表顺序）
- 待完成功能
  - 修复BUG
  - ……

## 项目界面
遗憾的是没有把鼠标录进去  
H5端效果展示  
![H5](https://api.tansent.top/assets/todo-h5.gif)  
微信小程序端效果展示  
![Wechat](https://api.tansent.top/assets/todo-wechat.gif)  

## 使用项目
克隆/下载
```git
git clone git@github.com:tansentcn/todos-uni-app.git
```


> 使用[dcloud](https://www.dcloud.io/)编辑器

## 问题
1. 项目加载vuex-persistedstate插件失败  
首先在项目根目录创建文件夹node_modules，然后使用命令进行安装
```node
npm install --save vuex-persistedstate
```

## 关于
仅供学习使用。