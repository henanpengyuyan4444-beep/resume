# resume

个人简历站：深色、照片首屏、克制动效。单页静态站点，另带一个 A4 一页版打印页面。

- **在线地址**：<https://henanpengyuyan4444-beep.github.io/resume/>
- **一页 PDF**：<https://henanpengyuyan4444-beep.github.io/resume/resume.pdf>

![首页](./preview-hero.png)

## 设计

- 首屏：**全屏照片铺满 100svh**，左侧渐变压暗 + 局部柔焦保证文字可读；超大姓名压字、坐标标签、贴纸式「2026 · OPEN TO WORK」、右下「SCROLL TO EXPLORE」引导
- 滚动：照片视差放大并淡出，内容区接在后面
- 主色：取自照片里的雪服黄 `#FFC53D`，辅色天空青 `#4FD1E0`
- 版式：深色底 + 1px 描边卡片 + 细分隔线，中文用系统黑体、数字和标签用等宽字体
- 动效：首屏文字淡入、区块滚动淡入、顶栏滚动变实、导航高亮、项目卡光标跟随光斑、技术栈跑马灯
- 响应式：手机端照片重新定位（把人和雪板放进画面），文字压在下方，按钮胶囊化

## 页面

| 路径 | 用途 |
| --- | --- |
| `/` | 主站（深色） |
| `/resume/` | 打印版简历页（浅色、A4 版式，`noindex`），PDF 由它导出 |
| `/resume.pdf` | 一页 A4 PDF，正好 1 页 |

## 改内容

只改 `src/config.ts`（姓名、职位、联系方式、关于、技能、项目、经历、教育都在里面）。
删掉某个数组对应区块自动隐藏。

## 换照片

1. 把自己的竖版照片（建议 3:4）覆盖 `src/assets/portrait-ski.jpg`
2. 重新生成网页用的三档尺寸：

```bash
ffmpeg -y -i src/assets/portrait-ski.jpg -vf "scale=900:-2"  -q:v 4 public/portrait.jpg
ffmpeg -y -i src/assets/portrait-ski.jpg -vf "scale=480:-2"  -q:v 5 public/portrait-sm.jpg
```

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321/resume/
npm run build    # 产物在 dist/
npm run preview
```

## 部署

推 `main` 自动构建发布（GitHub Actions，`.github/workflows/deploy.yml`）。
仓库设置里 Pages 的 Source 已设为 **GitHub Actions**。

项目站点发布在子路径 `/<仓库名>/`，所以 `astro.config.mjs` 里有：

```js
site: "https://henanpengyuyan4444-beep.github.io",
base: "/resume",
```

**换仓库名或账号时要同步改这两行**，否则 CSS、图片、图标都会 404。

## 导出 PDF

打印版页面是 `/resume/`，用浏览器打印成 A4 即可；仓库里的 `张雨-简历-Astro.pdf`
是用 Chrome DevTools 的 `Page.printToPDF`（print 媒体、A4）导出的，正好 1 页。

## 技术栈

- [Astro](https://astro.build/) 5
- [Tailwind CSS](https://tailwindcss.com/) 4
- 无运行时 JS 框架，交互全部是原生脚本

## 来源与许可

最初版式参考 [RyanFitzgerald/devportfolio](https://github.com/RyanFitzgerald/devportfolio)（MIT），
现在是独立重写的设计，仅保留其 MIT 许可证文件作为致谢。

## 说明

- 页面包含真实手机号和邮箱，仓库与站点均公开；不想公开就清空 `phone`、把邮箱换成表单。
- 照片是本人素材，公开仓库里包含该图片；如不希望被下载，可以把仓库转私有或把照片换成插画头像。
