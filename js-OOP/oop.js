//  目标：生成一个表格
// 　１.找到一个地方　２.　画表格　３.　完成

class DrawTable {
  constructor() {

  }

  drawtable() {
    var tabNode = document.createElement("table");
    var tabbody = document.createElement('body')
    var tabtr = document.createElement('tr')
    var tabtd = document.createElement('td')

    tabtr.appendChild(tabtd)
    tabbody.appendChild(tabtr)
    tabNode.appendChild(tabbody)

    return tabNode
  }

  finda(callback) {
    var a = document.querySelector('body')
    a.appendChild(callback)
  }

  write(factor, html) {
    var a = document.querySelector('td')
    a.innerText = factor
    a.insertAdjacentHTML('afterEnd', html)
  }

}

var __main = function() {
  var start = new DrawTable()

  var callbackfunc = start.drawtable()

  start.finda(callbackfunc)

  start.write('find here is contents.', '<div>wanger')
}

__main()



// 工具函数
class zhangsan {
  constructor() {

  }

  log() {
    console.log.apply(console, arguments)
  }

  e(selector) {
    return document.querySelector(selector)
  }

  es(selector) {
    return document.querySelectorAll(selector)
  }

  appendHtml(elements, html) {
    elements.insertAdjacentHTML('beforeEnd', html)
  }

  bindEvent(element, eventName, callback) {
    element.addEventListener(eventName, callback)
  }

  toggleClass(element, className) {
    if (element.classList.contains(className)) {
      element.classList.remove(className)
    } else {
      element.classList.add(className)
    }
  }

  removeClassAll(className) {
    var selector = '.' + className
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
      var e = elements[i]
      e.classList.remove(className)
    }
  }

  bindAll(selector, eventName, callback) {
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
      var e = elements[i]
      bindEvent(e, eventName, callback)
    }
  }

  findAll(element, selector) {
    return element.querySelectorAll(selector)
  }
}
