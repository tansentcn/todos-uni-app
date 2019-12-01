# todos-uni-app
基于uni-app的一款多端项目。  
Todo —— 专注要做的事。
## 功能需求
- 已完成功能
  - 添加待做项
  - 完成待做项（点击未完成项）
  - 删除已完成项（点击已完成项）
  - 时间戳格式化（ISO 8601）
  - 多端运行 其他未进行测试
    - 微信小程序
	- H5
  - 使用vuex
  - 使用本地存储
	- 一开始使用[vuex-persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate)插件，结果在小程序端报错，应该是不兼容多端
	- 之后采用uni官方的api进行本地数据存储解决了这个问题
  - 优化todo列表（未完成的按添加最久时间排列-先添加的排前面，同时完成的项目会放到最后，删除操作不影响列表顺序）
- 待完成功能
  - 修复BUG
	- 已知在APP上操作时会出现错误
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




## 关于

> 使用[HBuilderX](https://www.dcloud.io/hbuilderx.html)编辑器

仅供学习使用。  


