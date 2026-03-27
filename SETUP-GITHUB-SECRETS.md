# GitHub Secrets 配置步骤

## 已提供的凭证
- **CLOUDFLARE_API_TOKEN**: `cfat_LmSiM2KbNyo9Mwp70T4fM7070GNAopWyTa6vnbvm1001874b`
- **CLOUDFLARE_ACCOUNT_ID**: `c8d8314c2515f82e98b9416fa69da4b6`

## 步骤

### 1. 访问 GitHub Secrets 设置页面
访问：https://github.com/yimonli95-code/Chinese-bits/settings/secrets/actions

### 2. 添加第一个 Secret
1. 点击 "New repository secret"
2. **Name**: `CLOUDFLARE_API_TOKEN`
3. **Secret**: `cfat_LmSiM2KbNyo9Mwp70T4fM7070GNAopWyTa6vnbvm1001874b`
4. 点击 "Add secret"

### 3. 添加第二个 Secret
1. 再次点击 "New repository secret"
2. **Name**: `CLOUDFLARE_ACCOUNT_ID`
3. **Secret**: `c8d8314c2515f82e98b9416fa69da4b6`
4. 点击 "Add secret"

### 4. 完成！
现在每次推送到 main 分支都会自动触发部署到 Cloudflare Pages！
