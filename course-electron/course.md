### electron 入门教程
* 环境依赖(自行安装)
    1. ) node.js  
    2. ) npm
* 一、安装 electron.js
  ```
  终端输入：
    npm install -g electron-prebuilt（墙内有问题请自行切换至`淘宝源`）
  ```
* 二、新建项目（基本包含 3 个文件）
    1. ) package.json
    2. ) index.html
    3. ) main.js
    * 图示 ![项目结构图示](img/1.png)
* 文件基本内容
    1. ) package.json 内容、关注点在 `main` 该配置文件为引导文件
    ```
    {
      "name": "my-app",
      "version": "1.0.0",
      "description": "",
      "main": "main.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "zhangxianglin",
      "license": "MIT"
    }
    ```
    2. ) index.html 内容安装 html 格式来写即可(具体不再展示)
    3. ) main.js 内容是核心
    ```
      const app = require("app")
      const BrowserWindow = require("browser-window")

      const mainWindow = null

      app.on("window-all-closed", function() {
        if (process.platform != "darwin") {
          app.quit()
        }
      })

      // 当 Electron 完成了初始化并且准备创建浏览器窗口的时候
      // 这个方法就被调用
      app.on('ready', function() {
        // 创建浏览器窗口。
        mainWindow = new BrowserWindow({width: 800, height: 600});

        // 加载应用的 index.html
        mainWindow.loadURL('file://' + __dirname + '/index.html');

        // 打开开发工具
        mainWindow.openDevTools();

        // 当 window 被关闭，这个事件会被发出
        mainWindow.on('closed', function() {
          // 取消引用 window 对象，如果你的应用支持多窗口的话，
          // 通常会把多个 window 对象存放在一个数组里面，
          // 但这次不是。
          mainWindow = null;
        });
      });
    ```
* 三、打包
  1. ) 安装打包工具
    ```
    终端输入
    npm install -g asar
    ```
  2. ) 命令行切换至项目
    ```
    终端输入
    asar pack 项目 你要的名字.asar
    ```
  3. ) 终端的目录下找到 `你要的名字.asar`
* 四、运行
  1. ) 在文件目录搜索 `npm`
    ```
    找到路径
    C:\Users\这里是你的电脑名称\AppData\Roaming\npm\node_modules\electron-prebuilt\dist\resources\
    ```
  2. ) 把 `你要的名字.asar` 文件复制一份到上一步找到的目录中
  3. ) 找到如下路径后执行 `electron.exe`
    ```
    找到路径
    C:\Users\这里是你的电脑名称\AppData\Roaming\npm\node_modules\electron-prebuilt\dist\
    ```
  * 五、大功告成
    * ![成功抵达](img/2.png)
* 尾声
   * 其中 `dist` 可复制到其他地方运行 `electron.exe` 重命名、可更换图标 
