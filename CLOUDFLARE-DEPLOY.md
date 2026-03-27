# Cloudflare Pages 部署指南

## 项目信息
- GitHub 仓库: yimonli95-code/Chinese-bits
- 框架: Next.js
- 构建命令: `npm run build`
- 输出目录: `.next`

## 方法一：Cloudflare Pages 原生 GitHub 集成（推荐）

### 步骤 1: 登录 Cloudflare
访问 https://dash.cloudflare.com/ 登录你的账户

### 步骤 2: 创建 Pages 项目
1. 在侧边栏点击 "Workers & Pages"
2. 点击 "Create application" → "Pages"
3. 点击 "Connect to Git"

### 步骤 3: 连接 GitHub 仓库
1. 选择 "Chinese-bits" 仓库
2. 点击 "Begin setup"

### 步骤 4: 配置构建设置
- **Project name**: `chinese-bits` (或你喜欢的名字)
- **Production branch**: `main`
- **Framework preset**: `Next.js` (会自动配置)
- **Build command**: `npm run build`
- **Build output directory**: `.next`

### 步骤 5: 环境变量（可选）
如果需要，添加环境变量：
- `NODE_VERSION`: `20`

### 步骤 6: 部署
点击 "Save and Deploy"

---

## 方法二：使用 Wrangler CLI 部署

### 1. 安装 Wrangler
```bash
npm install -g wrangler
```

### 2. 登录 Cloudflare
```bash
wrangler login
```

### 3. 创建 Pages 项目
```bash
wrangler pages project create chinese-bits
```

### 4. 部署
```bash
npm run build
wrangler pages deploy .next --project-name=chinese-bits
```

---

## 方法三：使用 GitHub Actions 自动部署

### 1. 在 Cloudflare 获取 API Token
1. 访问 https://dash.cloudflare.com/profile/api-tokens
2. 点击 "Create Token"
3. 使用 "Edit Cloudflare Workers" 模板
4. 配置权限：
   - Account: Cloudflare Pages: Edit
   - Account: Workers KV Storage: Edit
   - Zone: DNS: Edit
5. 创建并复制 Token

### 2. 在 GitHub 设置 Secrets
1. 访问 https://github.com/yimonli95-code/Chinese-bits/settings/secrets/actions
2. 添加以下 Secrets:
   - `CLOUDFLARE_API_TOKEN`: 你的 Cloudflare API Token
   - `CLOUDFLARE_ACCOUNT_ID`: 你的 Cloudflare 账户 ID（在 Workers & Pages 页面右上角）

### 3. 推送代码触发部署
`.github/workflows/deploy.yml` 已配置好，推送到 main 分支会自动部署。

---

## 部署后
- 你的网站将在 `https://chinese-bits.pages.dev` 上线
- 可以在 Cloudflare Pages 仪表板绑定自定义域名
