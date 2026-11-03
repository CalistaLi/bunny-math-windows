# 兔兔数学 · Bunny Math Windows

可离线使用的儿童数学练习 Windows 应用，支持中文和 English 一键切换。

基于 [binarydevil/bunny-math](https://github.com/binarydevil/bunny-math) 的页面代码制作，保留原有兔兔角色、配色、动画和数学题目逻辑，加入 Electron 桌面窗口与完整中文翻译。

![中文版首页](docs/chinese-home.png)

## 下载和使用

前往 [Releases](https://github.com/CalistaLi/bunny-math-windows/releases) 下载 `Bunny-Math-0.1.0-Windows-x64.exe`，双击运行。

- 支持 Windows 10 / 11，64 位，无需安装 Node.js，无需联网。
- 点击右上角的“中文”或“English”切换语言，自动记住选择。
- 应用题、积木图解、竖式讲解、结果总结、贴纸本和打印练习卷均支持中英文。
- 模式、难度、题数、讲解方式、成绩和贴纸自动保存在当前 Windows 用户的应用数据目录。进行中的一轮练习不保存。
- F11 切换全屏，Esc 退出全屏；在练习卷页面点击打印按钮或按 Ctrl+P。
- 程序未使用商业代码签名证书。

## 功能

- 加减法 6 个难度，加减乘除 4 个难度。
- 每轮随机生成 10、15 或 20 题。
- 数字键盘、选择题、填空、比较大小和情景应用题。
- 积木图解与竖式两种分步讲解，答错的题目在最后再练一次。
- 星星评分、技能反馈和贴纸奖励。
- 可打印多页练习卷，附参考答案。

## 本地开发与打包

使用 Node.js 22.12 或更新版本。

```powershell
npm ci
npm test
npm run desktop
```

构建 Windows x64 免安装版：

```powershell
npm run dist:win
```

构建结果位于 `release/`。源码不包含 Node.js 依赖和 Electron 二进制文件，首次安装和构建需要联网下载。

网页开发使用 `npm run dev`，静态页面构建使用 `npm run build`。

## 验证

- 35 项自动化测试通过，包含原有题目生成、数学讲解，以及各难度应用题和双风格讲解的中文覆盖测试。
- 已实际验证免安装 EXE 启动、中英文切换、完整答题和错题回顾、贴纸与设置保存、练习卷 PDF 输出和全屏快捷键。
- 推送主分支后，GitHub Actions 自动执行测试与页面构建。
- GitHub Pages 工作流保留为手动触发；启用 Pages 后可自行运行，本仓库上传时不自动部署网站。

## 上游来源

原站：[Bunny Math](https://binarydevil.github.io/bunny-math/)。

原项目：[binarydevil/bunny-math](https://github.com/binarydevil/bunny-math)，基准提交 `3012a07ccb4f3c07298443e8e39fd73f537bd635`。上游提交历史及作者归属保留，原说明见 [README.upstream.md](README.upstream.md)。

上游仓库未提供 LICENSE 文件，本仓库不另行声明对上游代码和素材的许可。
