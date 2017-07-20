let cache = [], store = {}

function addStyle(style) {
  cache.push(style)
}

function getStyle(path) {
  if (!store.hasOwnProperty(path)) {
    store[path] = cache.join('')
    cache = []
  }
  return store[path]
}

function clearStyle() {
  store = {}
}

module.exports = {
  addStyle: addStyle,
  getStyle: getStyle,
  clearStyle: clearStyle
}
