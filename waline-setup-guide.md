# Waline 部署指南

## 📋 概覽
Waline 是基於 Valine 的增強版評論系統，支持後端數據庫、管理員功能、郵件通知等功能。

## 🚀 快速部署到 Vercel

### 第一步：準備工作
1. 註冊 [Vercel](https://vercel.com/) 帳號
2. 註冊 [LeanCloud](https://console.leancloud.app/) 帳號（國際版）

### 第二步：部署 Waline 服務器
1. 點擊下方按鈕一鍵部署：
   [![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample)

2. 或者手動部署：
   - Fork [Waline](https://github.com/walinejs/waline) 倉庫
   - 在 Vercel 中導入你的 Fork 倉庫
   - 部署完成後會獲得一個域名，例如：`https://your-waline-server.vercel.app`

### 第三步：配置環境變數
在 Vercel 專案設置中添加以下環境變數：

#### LeanCloud 配置
```
LEAN_ID=你的LeanCloud-AppID
LEAN_KEY=你的LeanCloud-AppKey
LEAN_MASTER_KEY=你的LeanCloud-MasterKey
LEAN_SERVER=https://你的域名.api.lncldglobal.com  # 國際版
```

#### 其他可選配置
```
SITE_NAME=伊藤蒼太的技術博客  # 網站名稱
SITE_URL=https://itousouta15.tw  # 網站地址
AUTHOR_EMAIL=your-email@example.com  # 管理員郵箱
```

### 第四步：更新 Hexo 配置
將以下配置中的 `serverURL` 替換為你的 Vercel 部署地址：

```yaml
waline:
  serverURL: https://your-waline-server.vercel.app  # 替換為你的實際地址
```

### 第五步：郵件通知配置（可選）
如果需要郵件通知功能，在 Vercel 環境變數中添加：

```
SMTP_SERVICE=gmail  # 郵件服務商
SMTP_USER=your-email@gmail.com  # 發送郵箱
SMTP_PASS=your-app-password  # 應用密碼
```

## 🔧 LeanCloud 配置

### 創建應用
1. 在 [LeanCloud 國際版](https://console.leancloud.app/) 創建應用
2. 進入 `設置 > 應用 Keys`，複製：
   - App ID
   - App Key
   - Master Key

### 域名配置
1. 進入 `設置 > 域名綁定`
2. 添加你的網站域名到 Web 安全域名

## 📝 配置說明

### 核心配置
- `serverURL`: Waline 服務器地址（必填）
- `lang`: 界面語言，設為 `zh-TW`
- `meta`: 評論者信息字段 `['nick', 'mail', 'link']`
- `requiredMeta`: 必填字段 `['nick', 'mail']`

### 功能配置
- `emoji`: 表情包 CDN 地址
- `imageUploader`: 圖片上傳功能
- `wordLimit`: 評論字數限制
- `pageSize`: 分頁大小

### 進階功能
- `login`: 登錄模式（enable/disable/force）
- `copyright`: 版權信息顯示
- `reaction`: 文章反應功能

## 🎨 自定義樣式

Waline 支持通過 CSS 自定義樣式，可以在主題中添加：

```css
/* Waline 自定義樣式 */
.wl-cards .wl-user.wl-author {
  color: #5d7da1;
  background-color: rgba(93, 125, 161, 0.1);
}

.wl-btn {
  background-color: #5d7da1;
}

.wl-btn:hover {
  background-color: #4a6a8a;
}
```

## 🔐 管理員功能

部署完成後，可以通過以下方式訪問管理面板：
- 訪問 `https://your-waline-server.vercel.app/ui`
- 使用配置的管理員郵箱註冊並登錄

管理功能包括：
- 評論審核和管理
- 用戶管理
- 數據統計
- 配置修改

## 🐛 常見問題

### 評論不顯示
1. 檢查 `serverURL` 是否正確
2. 確認 LeanCloud 域名配置
3. 查看瀏覽器控制台錯誤信息

### 無法發送評論
1. 檢查必填字段配置
2. 確認字數限制設置
3. 檢查網絡連接

### 郵件通知不工作
1. 確認 SMTP 配置正確
2. 檢查郵箱應用密碼
3. 確認收件人郵箱有效

## 📚 更多資源

- [Waline 官方文檔](https://waline.js.org/)
- [Waline GitHub](https://github.com/walinejs/waline)
- [LeanCloud 文檔](https://docs.leancloud.app/)
- [Vercel 文檔](https://vercel.com/docs)

---

*配置完成後，記得測試評論功能並根據需要調整設置！*