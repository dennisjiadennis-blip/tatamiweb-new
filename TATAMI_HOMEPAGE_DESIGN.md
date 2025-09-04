# Tatami Labs - Japandi 杂志风格首页设计

## 📌 项目概览

本项目实现了一个专业级的 Japandi 风格杂志布局网站首页，基于 Next.js 15.4.6 + React 19.1.0 + TypeScript 架构。设计灵感来自日本榻榻米的有机排列和北欧简约美学，创造出现代化的非对称杂志风格界面。

**在线预览**: `http://localhost:3000`  
**GitHub 仓库**: https://github.com/dennisjiadennis-blip/tatamiweb-new

---

## 🎨 设计特色

### 核心设计理念
- **非对称杂志布局**: 基于 CSS Grid 系统的12x8网格，创造动态的视觉层次
- **榻榻米美学**: 方块间一致的20px间隙，模拟传统榻榻米的排列方式
- **PC屏幕优化**: 90vw宽度×80vh高度，充分利用现代宽屏显示器
- **响应式设计**: clamp()函数实现流畅的字体和图标缩放

### 视觉系统

#### 🌈 色彩方案
- **背景色**: `#2D323A` - 深蓝灰色，营造沉静氛围
- **烧橙色**: `#D97D54` - 主要强调色，用于核心内容块
- **粉蓝色**: `#B0C4DE` - 辅助色彩，柔和平衡
- **苔绿色**: `#7A8A6B` - 自然色调，增加有机感
- **米白色**: `#F5F0E8` - 纯净背景，确保内容可读性
- **边框色**: `#8B8B8B` - 统一灰色边框，增强结构感

#### ✒️ 字体系统
- **主标题**: Cormorant Garamond - 优雅英文衬线字体
- **内容文字**: Cormorant Garamond - 保持视觉一致性
- **字重**: 300-500，确保清晰度和层次感

---

## 🏗️ 技术架构

### 核心技术栈
```json
{
  "framework": "Next.js 15.4.6",
  "react": "React 19.1.0",
  "typescript": "Latest",
  "styling": "Tailwind CSS + CSS-in-JS",
  "fonts": "Google Fonts (Cormorant Garamond)",
  "icons": "Custom SVG Components"
}
```

### 项目结构
```
src/
├── app/
│   ├── layout.tsx          # 根布局，字体配置
│   ├── page.tsx           # 主页面，Grid布局实现
│   └── globals.css        # 全局样式
├── components/
│   ├── ui/
│   │   └── illustrations.tsx  # 自定义SVG插图组件
│   └── providers/
│       └── session-provider.tsx  # NextAuth会话管理
```

---

## 🧩 布局组件详解

### Grid 系统架构
```css
{
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridTemplateRows: 'repeat(8, 1fr)',
  gap: '20px'
}
```

### 方块布局映射

#### 1. "A Story Woven with a Master" - 粉蓝色
- **网格位置**: `gridColumn: '1 / 5', gridRow: '1 / 3'`
- **尺寸**: 4列 × 2行 (大型横向)
- **用途**: 品牌故事入口

#### 2. "Stories" - 米白色  
- **网格位置**: `gridColumn: '6 / 9', gridRow: '1 / 2'`
- **尺寸**: 3列 × 1行 (中型横向)
- **用途**: 内容导航

#### 3. "The Masters Who Shape Your World" - 粉蓝色
- **网格位置**: `gridColumn: '9 / 13', gridRow: '2 / 4'`
- **尺寸**: 4列 × 2行 (大型横向)
- **用途**: 大师介绍

#### 4. "My Tatami" + Sneakers图标 - 苔绿色
- **网格位置**: `gridColumn: '1 / 3', gridRow: '3 / 6'`
- **尺寸**: 2列 × 3行 (纵向)
- **用途**: 个人空间入口

#### 5. "One Journey, a Lifetime of Insight" - 烧橙色
- **网格位置**: `gridColumn: '3 / 9', gridRow: '4 / 6'`
- **尺寸**: 6列 × 2行 (超大横向，核心内容)
- **用途**: 主要价值主张

#### 6. Geta Sandal 图标 - 烧橙色
- **网格位置**: `gridColumn: '10 / 12', gridRow: '4 / 6'`
- **尺寸**: 2列 × 2行 (方形)
- **用途**: 传统文化象征

#### 7. Sleeping Fox 图标 - 苔绿色
- **网格位置**: `gridColumn: '10 / 12', gridRow: '6 / 8'`
- **尺寸**: 2列 × 2行 (方形)
- **用途**: 宁静禅意表达

#### 8. "Join a Journey" - 烧橙色
- **网格位置**: `gridColumn: '3 / 7', gridRow: '7 / 8'`
- **尺寸**: 4列 × 1行 (中型横向)
- **用途**: 行动召唤

#### 9. Tatami Logo - 米白色
- **网格位置**: `gridColumn: '6 / 10', gridRow: '6 / 8'`
- **尺寸**: 4列 × 2行 (横向)
- **用途**: 品牌标识展示

---

## 🎭 自定义插图组件

### SVG 组件特性
- **响应式缩放**: 使用 `clamp()` 函数
- **颜色继承**: `currentColor` 支持动态着色
- **完整的 TypeScript**: `React.SVGProps<SVGSVGElement>` 类型支持

#### 组件列表
1. **TatamiLogo**: 品牌标识，带纹理滤镜效果
2. **Sneakers**: 运动鞋插图，代表行动和探索
3. **GetaSandal**: 传统木屐，象征日本文化传承
4. **SleepingFox**: 睡眠狐狸，表达宁静与智慧

---

## 🚀 开发与部署

### 本地开发
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问应用
open http://localhost:3000
```

### 构建生产版本
```bash
# 构建应用
npm run build

# 启动生产服务器
npm start
```

### 环境要求
- Node.js 18.0+
- npm 或 yarn
- 现代浏览器支持 CSS Grid

---

## 📱 响应式设计

### 断点策略
- **桌面优先**: 主要针对PC端宽屏设计
- **字体缩放**: `clamp(最小值, 推荐值, 最大值)`
- **图标适配**: SVG矢量图标自动缩放
- **间距调整**: 基于视口单位的动态间距

### 关键响应式特性
```css
/* 标题字体 */
fontSize: 'clamp(3rem, 4.5vw, 4.8rem)'

/* 内容字体 */
fontSize: 'clamp(1.2rem, 1.6vw, 1.8rem)'

/* 图标尺寸 */
width: 'clamp(60px, 6vw, 80px)'
```

---

## 🎯 设计实现亮点

### 1. 视觉层次
- **Z-index管理**: 标题悬浮于最顶层
- **阴影系统**: 不同深度的盒阴影创造立体感
- **边框统一**: 所有方块采用一致的灰色边框

### 2. 交互体验
- **悬停效果**: `transition: 'all 0.4s ease'`
- **光标指示**: `cursor: 'pointer'` 表明可交互
- **平滑动画**: CSS过渡效果提升用户体验

### 3. 可访问性
- **对比度优化**: 确保文字在背景上清晰可读
- **语义化HTML**: 正确使用标题和区域标签
- **键盘导航**: 支持标准的键盘交互

---

## 🔧 自定义与扩展

### 添加新的方块
1. 在 Grid 容器内添加新的 div
2. 设置 `gridColumn` 和 `gridRow` 属性
3. 应用统一的样式模式：
```tsx
<div style={{
  gridColumn: 'start / end',
  gridRow: 'start / end', 
  backgroundColor: '#色彩代码',
  borderRadius: '16px',
  border: '2px solid #8B8B8B',
  // ... 其他样式
}}>
```

### 修改色彩方案
在 `page.tsx` 中更新相应的 `backgroundColor` 值，建议保持色彩和谐度。

### 扩展 SVG 插图
在 `illustrations.tsx` 中添加新的 SVG 组件：
```tsx
export const NewIcon = ({ style, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" style={style} {...props}>
    {/* SVG 路径 */}
  </svg>
);
```

---

## 📋 版本历史

### v1.0.0 (Current)
- ✅ 完整 Japandi 设计实现
- ✅ 响应式 CSS Grid 布局
- ✅ 自定义 SVG 插图组件
- ✅ TypeScript 完整类型支持
- ✅ 生产级代码质量

---

## 👥 贡献指南

欢迎贡献代码和设计建议！请遵循以下步骤：

1. Fork 项目仓库
2. 创建功能分支: `git checkout -b feature/新功能`
3. 提交更改: `git commit -m "添加新功能"`
4. 推送分支: `git push origin feature/新功能`
5. 创建 Pull Request

---

## 📄 许可证

MIT License - 详见 LICENSE 文件

---

## 🙏 致谢

- **设计灵感**: 日本榻榻米文化与北欧简约美学
- **技术支持**: Next.js、React、Tailwind CSS 社区
- **开发工具**: Claude Code AI 辅助开发

---

**项目维护者**: Dennis Jia  
**最后更新**: 2025年9月4日  
**文档版本**: v1.0.0

> "One Journey, a Lifetime of Insight" - Tatami Labs 的核心理念，通过精心设计的数字体验传递深度思考与美学追求。