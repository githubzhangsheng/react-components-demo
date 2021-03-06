### 自定义 Hook

- 将组件逻辑提取到可重用的函数中

### 使用自定义 Hook 抽象鼠标跟踪器

每个自定义 hook 都拥有独立的 effect, 互不影响

### HOC

Higher order component
高阶组件： 高阶组件就是一个函数，接收一个组件作为参数，返回一个新的组件

### useState

Hook 是 React 16.8 的新增特性。useState 可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
### useRef

 - 示例参考： Ref.tsx

useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。

本质上，useRef 就像是可以在其 .current 属性中保存一个可变值的“盒子”。

你应该熟悉 ref 这一种访问 DOM 的主要方式。如果你将 ref 对象以 <div ref={myRef} /> 形式传入组件，则无论该节点如何改变，React 都会将 ref 对象的 .current 属性设置为相应的 DOM 节点。

然而，useRef() 比 ref 属性更有用。它可以很方便地保存任何可变值，其类似于在 class 中使用实例字段的方式。

这是因为它创建的是一个普通 Javascript 对象。而 useRef() 和自建一个 {current: ...} 对象的唯一区别是，useRef 会在每次渲染时返回同一个 ref 对象。

请记住，当 ref 对象内容发生变化时，useRef 并不会通知你。变更 .current 属性不会引发组件重新渲染。如果想要在 React 绑定或解绑 DOM 节点的 ref 时运行某些代码，则需要使用回调 ref 来实现。


### useContext

 - 示例参考： Context.tsx
#### context 是什么？

在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），这些属性是应用程序中许多组件都需要的。Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。

#### context 使用文档

https://react.docschina.org/docs/context.html

#### useContext 使用文档

https://react.docschina.org/docs/hooks-reference.html#usecontext
### Hook 规则

- 只在最顶层使用 Hook
- 只在 React 函数中调用 Hook

### 其它 Hook

useReducer: 简化 state
useCallback: 性能调优

### 更多 Hook 示例
usehooks.com
