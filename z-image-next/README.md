# Z-Image - AI图像生成平台

新一代AI图像生成模型，拥有60亿参数，仅需8步推理即可生成高质量图像。支持消费级显卡，RTX 3060也能流畅运行。

## 功能特点

- ⚡ **极速生成**: 仅需8步推理，比传统模型快5倍以上
- 💻 **消费级友好**: RTX 3060即可流畅运行
- 🎯 **精准控制**: 支持多种控制方式，精确实现您的创意构想
- 🔧 **易于集成**: 标准API接口，一行代码即可集成
- 🎨 **多样化风格**: 支持写实、动漫、油画等多种艺术风格

## 技术规格

- **模型参数**: 6 Billion
- **推理步数**: 8-50 Steps
- **最低显存**: 6GB (RTX 3060)
- **推荐显存**: 12GB+
- **生成速度**: ~3秒/张
- **支持分辨率**: 最高 2048px

## 快速开始

### 环境要求

- Node.js 18+
- npm 或 yarn
- NVIDIA GPU (可选，用于本地推理)

### 安装

1. 克隆仓库
```bash
git clone https://github.com/ice-vic/Z-image.git
cd Z-image/z-image-next
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量
```bash
cp .env.example .env.local
# 编辑 .env.local，填入您的 API 密钥
```

4. 启动开发服务器
```bash
npm run dev
```

5. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 环境变量配置

创建 `.env.local` 文件并配置以下变量：

```env
# SiliconFlow API 配置
IMAGE_API_URL=https://api.siliconflow.cn/v1/images/generations
IMAGE_API_KEY=your_api_key_here

# 模型设置
DEFAULT_MODEL=Qwen/Qwen-Image-Edit-2509
DEFAULT_WIDTH=1024
DEFAULT_HEIGHT=1024
DEFAULT_STEPS=20
DEFAULT_GUIDANCE=7.5
```

## 项目结构

```
z-image-next/
├── src/
│   ├── app/              # Next.js 13+ App Router
│   │   ├── api/          # API 路由
│   │   ├── layout.tsx    # 根布局
│   │   └── page.tsx      # 主页
│   ├── components/       # React 组件
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ImageGenerator.tsx
│   │   └── ...
│   └── styles/           # 样式文件
│       ├── globals.css
│       └── generator.css
├── public/               # 静态资源
├── .env.local           # 环境变量（不提交到git）
└── package.json
```

## 部署

### Vercel 部署

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 部署完成

### 自建服务器部署

1. 构建项目
```bash
npm run build
```

2. 启动生产服务器
```bash
npm start
```

## API 使用

### 生成图像

```javascript
const response = await fetch('/api/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    prompt: 'a beautiful landscape',
    width: 1024,
    height: 1024,
    steps: 8,
    guidance: 7.5
  })
});

const data = await response.json();
// data.images 包含生成的图像URL
```

## 常见问题

### Q: 如何提高生成图像的质量？
A: 1）编写详细具体的提示词；2）使用负面提示词；3）适当调整参数；4）使用种子保持一致性。

### Q: 支持哪些图像格式？
A: 支持 PNG、JPEG、WebP 等常见格式，最高支持 2048px 分辨率。

### Q: 是否支持批量生成？
A: 是的，支持批量生成，最多可一次生成4张图像。

## 技术支持

- 📧 邮箱: support@zimage.ai
- 💬 Discord: [加入社区](https://discord.gg/zimage)
- 📖 文档: [查看文档](https://docs.zimage.ai)

## 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

---

**Z-Image Team** - 让AI创作更简单