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
