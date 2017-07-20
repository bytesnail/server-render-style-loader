# server-style-loader

## Usage

* webpack服务端打包配置中, 使用loader加载需要处理的模块
* 服务端脚本执行时, 通过getStyle方法获取模块样式内容
* **异步模块需加载完成后, 才可以获取到其样式内容**
* 每个模块的样式内容仅在模块加载时缓存一次, 清除后不能再获取

## API

### getStyle(path)
后端渲染时, 获取指定路径对应的模块样式, 可以用于异步模块

**server.js**
```
import { getStyle } from 'server-style-loader'

let css = getStyle(curPath) // curPath标示当前路径, 缓存相应样式字符串
```

### clearStyle()
清除所有路径对应的样式缓存
