# 个人简历站

一个静态的单页简历，浅色、等宽字体、克制动效。内容全部集中在一个配置文件里，改完 `npm run build` 就能发布。

![首页预览](./preview-hero.png)

## 特点

- **Astro 5 + Tailwind CSS 4**，构建产物只有 3 个文件（HTML + CSS + 图标），零运行时 JS 依赖
- 内容与样式分离：所有文案在 `src/config.ts`，改内容不用碰组件
- 中文排版：拉丁字母用 IBM Plex Mono，中文回落到系统字体（苹方 / 雅黑 / 思源）
- 轻交互：首屏淡入、区块滚动入场、导航随滚动高亮、鼠标悬停反馈
- 打印友好：`打印 / 存为 PDF` 时隐藏固定顶栏、压缩留白，导出 A4（仓库里有 `张雨-简历-Astro.pdf` 示例）
- 响应式：桌面双栏、移动端单列

## 快速开始

```bash
npm install
npm run dev      # 本地开发 http://localhost:4321
npm run build    # 产物在 dist/
npm run preview  # 预览构建结果
```

## 改内容

只改 `src/config.ts` 一个文件：

```ts
export const siteConfig = {
  name: "你的名字",
  title: "职位 / 方向",
  accentColor: "#4F46E5",        // 主色，全站跟着变
  location: "北京",
  phone: "13800000000",
  status: "2026 届 · 随时到岗",
  social: { email: "you@example.com" },  // github / linkedin / twitter 可选
  aboutMe: "自我介绍……",
  skills: ["Python", "FastAPI"],
  projects: [{ name, description, link, skills }],
  experience: [{ company, title, dateRange, bullets }],
  education: [{ school, degree, dateRange, achievements }],
};
```

删掉某个数组（比如 `projects`）对应区块会自动隐藏。

## 部署

仓库里已经放好 GitHub Actions 工作流（`.github/workflows/deploy.yml`）：

1. 仓库 **Settings → Pages → Build and deployment → Source** 选 **GitHub Actions**
2. push 到 `main` 后自动构建并发布，地址形如 `https://<用户名>.github.io/<仓库名>/`

也可以用 Vercel / Netlify 拖拽 `dist/`，或任何静态托管。

## 技术栈

- [Astro](https://astro.build/) 5
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Tabler Icons](https://tabler.io/icons)（图标路径内联）

## 来源与许可

页面骨架来自开源项目 [RyanFitzgerald/devportfolio](https://github.com/RyanFitzgerald/devportfolio)（MIT），
在其基础上做了内容填充、中文本地化、电话号码字段、滚动入场 / 导航高亮、打印样式与中文回退字体。

原项目的 MIT 许可证见 [LICENSE.md](./LICENSE.md)。

## 说明

- 页面包含真实联系方式，公开部署前请确认可公开；不想公开就把 `phone` 留空、邮箱换成表单。
- 导出的 PDF 是「网页打印」版（5 页），用于存档；投递用的精简一页版建议单独排版。
