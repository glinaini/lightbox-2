# vue模版规范说明

1. 目录结构说明
   - view每个文件夹与尽量保持与路由对应一一对应，其中对应的子组件都需要新建文件夹，命名方式为`todo ／ todo-item`，下面的.vue文件默认命名为Index.vue，而且只跟这个组件相关的assets（如img/样式）都放在该文件夹下，如果该文件夹下面存在2个.vue文件，说明这个时候应该分离出去
   - utils文件夹下面为一些公用的function
   - store文件夹下面为vuex状态管理的一些东西，store/module文件夹下面为vuex的模块文件，具体规范请参考[vuex官网](https://vuex.vuejs.org/guide/modules.html)
   - services文件夹存放所有请求，默认按照模块来分离，可以与store里面的module一一对应
   - config中存放一些公用的常用配置
   - components里面存放一些公用的组件
   - common下面存放一些最基础的组件
   - assets下面存放一些公用的资源
   - 后续可以新建mixin/filter等功能性文件夹
2. 关于eslint/format，现在项目都是使用的eslint+prettier，提交代码前必须`npm run lint`，如果存在错误或警告，需要修复错误和警告再提交，建议在自己熟悉的编辑器安装对应的plugin来完成`autoFixOnSave`,如`vscode中的Prettier - Code formatter`，具体可以查看`package.json`
3. 关于一些规范说明
   - 每个文件的代码行数尽量控制在300行以内，一个文件行数过多时，需要考虑分离
   - 除了路由组件，其他所有组件内部状态不能与vuex相关联，组件的状态都由组件本身管理。属性通过`props`传递，交互通过事件`vm.$emit()`
   - 后续补充
