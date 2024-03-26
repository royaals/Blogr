if (typeof window === 'undefined') {
    global.window = {}
  }
  
  if (typeof window.performance === 'undefined') {
    window.performance = require('perf_hooks').performance;
  }
  