# Hexo Blog 管理指令

## 基本指令

### 清除和生成
```bash
npx hexo clean    # 清除快取和生成的文件
npx hexo generate # 生成靜態文件 (可縮寫為 hexo g)
```

### 啟動本地伺服器
```bash
npx hexo server   # 啟動本地伺服器 (可縮寫為 hexo s)
```
預設網址：http://localhost:4000

### 新增文章
```bash
npx hexo new "文章標題"    # 創建新文章
npx hexo new post "文章標題"  # 創建新文章
npx hexo new page "頁面名稱"  # 創建新頁面
```

### 部署
```bash
npx hexo deploy   # 部署到伺服器 (可縮寫為 hexo d)
```

## 組合指令

### 完整生成和部署
```bash
npx hexo clean
npx hexo generate
npx hexo deploy
```

### 生成並啟動伺服器 (開發模式)
```bash
npx hexo clean
npx hexo generate
npx hexo server
```

## 目錄結構說明

- `source/_posts/` - 文章檔案
- `source/about/` - 關於頁面
- `source/_data/` - 資料檔案
- `themes/anzhiyu/` - 主題檔案
- `_config.yml` - 網站配置
- `_config.anzhiyu.yml` - 主題配置
- `public/` - 生成的靜態檔案

## 常用配置文件

- **網站配置**：`_config.yml`
- **主題配置**：`_config.anzhiyu.yml`
- **友鏈配置**：`source/_data/link.yml`
- **關於頁面**：`source/about/index.md`

## 注意事項

1. 修改配置文件後需要重新啟動伺服器
2. 新增文章後使用 `hexo g` 生成靜態文件
3. 主題更新請參考 AnZhiYu 主題文檔
4. 部署前記得先清除和重新生成