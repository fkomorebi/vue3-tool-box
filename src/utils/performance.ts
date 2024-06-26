const ob = new PerformanceObserver((list) => {
  // TODO: 处理出现的性能问题
})

// TODO: 设置你想要监控哪方面的性能问题
ob.observe({ entryTypes: [ 'resource' ]})
