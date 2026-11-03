# Bunny Math Windows 版

使用原站页面代码制作的 Windows 桌面应用。界面、字体、音效、动画、两种练习模式、题目生成、分步讲解、贴纸奖励与练习卷均保留。

每个页面右上角都有语言切换按钮：英文界面点击“中文”，中文界面点击“English”。应用题、积木/竖式讲解、结果、贴纸本和打印卷均支持中文；切换不重置本轮练习，语言选择会自动保存。

## 运行

- 免安装单文件版：双击 `Bunny-Math-0.1.0-Windows-x64.exe`。
- 文件夹版：完整解压压缩包，再双击其中的 `Bunny Math.exe`；请保留同目录下的其他文件。
- 支持 Windows 10 / 11，64 位。不需要安装 Node.js，不需要联网。
- F11 切换全屏，Esc 退出全屏；练习卷页面点击 Print 打印，也可按 Ctrl+P。
- 模式、难度、题数、讲解方式、星星和贴纸自动存于当前 Windows 用户的 `%APPDATA%\Bunny Math`。进行中的答题与网页版一样不保存。数据独立于浏览器网页版。
- 程序未使用商业代码签名证书。

## 源码与构建

源码压缩包解压后，安装 Node.js 22.12 或更新版本，执行：

```powershell
npm ci
npm test
npm run desktop
npm run dist:win
```

`desktop` 编译页面并打开桌面应用；`dist:win` 生成 Windows x64 文件夹版和单文件免安装版，输出在 `release` 目录。

原站：https://binarydevil.github.io/bunny-math/

原项目：https://github.com/binarydevil/bunny-math

原项目基准提交：3012a07ccb4f3c07298443e8e39fd73f537bd635。

原项目作者与素材归属保留。上游仓库当前没有 LICENSE 文件；本项目未另行声明对上游代码的许可。
