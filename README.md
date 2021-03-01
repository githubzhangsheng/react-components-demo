# React-Components

React 组件库 Phantom Canyon 幻影峡谷

### 完成一个组件库需要考虑的问题

- 代码结构
- 样式解决方案
- 组件的需求分析和编码
- 组件测试用例分析和编码
- 代码打包输出和发布
- CI/CD、文档生成等

### 样式解决方案分析

- Inline CSS
- CSS in JS
- Styled Component
- Sass/Less ✅

### 样式系统文件结构

```
styles/
  _variables.scss (各种变量以及可配置设置)
  _mixins.scss (全局 mixins)
  _functions.scss (全局 functions)
components/
  Button/
    style.scss (组件单独的样式)
```

### 创建自己的色彩体系

- 系统色板 = 基础色板 + 中性色板 