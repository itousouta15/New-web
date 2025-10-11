---
title: AnZhiYu 主題開發日誌：從初始化到穩定部署
date: 2025-10-05 01:30:00
updated: 2025-10-11 15:05:00
cover: /img/Newweb.webp
categories:
  - 技術分享
tags:
  - Hexo
  - 前端開發

---

## 🎯 專案總覽

**開發期間**：2025-10-04 ~ 2025-10-11  
**專案性質**：個人博客完整重構與現代化升級  
**技術棧**：Hexo 7.3.0 + AnZhiYu 主題 + GitHub Pages

### 📊 核心統計數據

- **📝 總提交數**：50+ commits
- **📁 當前文件數**：125 個文件 (21.99MB)
- **📱 文章總數**：5 篇技術文章
- **🔧 主要技術決策**：
  - 評論系統：Valine → Waline
  - PWA 支援：雙插件架構 (hexo-offline + hexo-swpp)
  - URL 結構：移除 trailing index.html
  - 部署方式：GitHub Actions 自動化

---

## 🚀 開發時間軸

### Phase 1: 基礎架構建立 (2025-10-04)

#### 🏗️ **項目初始化與 CI/CD 設置**
```bash
# GitHub Actions 工作流建立
b0ee4e1: Add GitHub Actions workflow for automatic Hexo deployment
f72d25d: Fix Node.js compatibility issues and update dependencies
168ef2a: Update GitHub Actions workflow with proper permissions
c2c67e3: Fix GitHub Actions permissions - grant contents write access
```

**技術成果**：
- ✅ 自動化部署流程建立
- ✅ Node.js 18.x 兼容性確保
- ✅ GitHub Pages 權限配置完成

#### 🌐 **本地化與用戶體驗優化**
```bash
2d541c3: 暫時下架目前無法使用頁面
9d0cf42: 深度繁體中文化
5aa576c: 修正手機板換行問題
d0e15ad: 修正手機板字體太小問題
```

**關鍵改進**：
- **繁體中文統一**：全站模板文案標準化
- **響應式修正**：手機版字體從 14px 調整至 16px
- **排版優化**：CSS 換行邏輯重構，解決文字溢出問題

#### 🔐 **依賴安全性升級**
```bash
c5f2306: Bump hexo-renderer-marked from 6.3.0 to 7.0.1
98c6e1e: Bump strip-ansi from 6.0.1 to 7.1.2
```

---

### Phase 2: 功能增強與個人化 (2025-10-04 晚期)

#### 🎨 **個人化配置與社群整合**
```bash
408e797: feat: 添加社群連結並個人化網站配置
18018ec: 修正essay page img
db81587: 修正社群帳號
```

**配置變更亮點**：
```yaml
# 社群媒體矩陣建立
social:
  Github: https://github.com/itousouta15
  Discord: https://discord.gg/anzhiyu
  Instagram: https://instagram.com/itousouta15
  
# 圖片資源優化
essay_cover: /img/essay.webp  # JPEG → WebP (41% 體積減少)
```

#### 📚 **文檔與 JavaScript 穩定性重構**
```bash
6ba831a: docs: 優化README文檔排版與內容結構
083c95a: Update README.md
466975c: fix: 修復JavaScript錯誤並優化響應式設計
```

**JavaScript 錯誤修復核心**：
- **CountUp.js 防禦式初始化**：避免未定義變數錯誤
- **Swiper 輪播穩定性**：添加庫可用性檢查
- **第三方 CDN 升級**：QRCode 庫更新至穩定版本

---

### Phase 3: 高級功能實現 (2025-10-05)

#### 🎯 **主題色彩與對比度優化**
```bash
e582434: feat: 完成主題色彩優化與開發日誌重構
```

**無障礙設計提升**：
- 深色主題色：`#98bfeb` → `#5d7da1`
- 對比度：3.2:1 → 4.5:1 (符合 WCAG AA 標準)

#### 🛠️ **PWA 功能完善**
```bash
f63afe2: feat: 完善 PWA 功能並解決構建警告
```

**技術實現**：
```javascript
// hexo-offline.config.cjs - 現代化配置
module.exports = {
  maximumFileSizeToCacheInBytes: 5242880,
  globPatterns: ["**/*.{js,html,css,png,jpg,jpeg,gif,svg,webp}"],
  runtimeCaching: [
    // 分層緩存策略：圖片快取優先、HTML 網路優先
  ]
};
```

**成果**：零警告生成，完整離線支援

#### 💬 **評論系統現代化遷移**
```bash
4b83ec9: feat: migrate to Waline comment system with Traditional Chinese support
bf9cbb4: feat: 評論系統遷移與隱私政策建立
3655e27: feat: 優化用戶體驗與評論系統配置
```

**Waline 優勢**：
- 🎨 豐富表情包生態系統 (6套表情包)
- 🌐 完整繁體中文本地化
- 📸 圖片上傳支援
- 🛡️ 管理面板與反垃圾機制

---

### Phase 4: 性能優化與快取系統 (2025-10-05 晚期)

#### ⚡ **極速快取更新系統**
```bash
77fb91c: feat(cache): 實現1分鐘極速快取更新系統
7244c41: feat(cache): 實現1分鐘極速快取更新系統 (重複確認)
```

**緩存策略**：
- **靜態資源**：7天緩存週期
- **HTML頁面**：1天緩存週期，3秒網路超時
- **圖片資源**：30天長期緩存

#### 🔗 **URL 結構最佳化**
```bash
67eb8fa: feat: 移除 URL trailing index.html 以確保舊文章留言的正確顯示
20fcfec: feat: 移除 URL trailing index.html (確認實施)
```

**技術配置**：
```yaml
# _config.yml
pretty_urls:
  trailing_index: false  # 移除 /index.html 後綴
  trailing_html: false   # 移除 .html 後綴
```

---

### Phase 5: 部署穩定性與維護 (2025-10-05 ~ 2025-10-11)

#### 🔧 **RSS 與 Email 功能修復**
```bash
ce50ad2: feat: 修復 RSS 和 Email 鏈接問題，優化開發環境
95ad0c0: fix: 刪除mail按鈕
c4ce986: feat: 修正繁體中文翻譯
```

#### 🗂️ **文件結構清理與合併衝突解決**
```bash
d8b38f1: chore: 清理多餘的生成檔案和測試腳本
eba1370: refactor: 更新文檔和配置，清理多餘文件
65ddaca: resolve: 解決合併衝突並清理多餘的生成文件
cebffde: Merge remote changes and remove generated files
```

**問題解決**：
- **合併衝突**：30+ 個生成文件衝突處理
- **文件清理**：移除冗餘的 HTML/CSS/JS 生成文件
- **Git 工作流**：建立穩定的開發-部署循環

---

## 📈 當前專案狀態 

### 🔥 **技術指標**
- **構建性能**：125 個文件，21.99MB，零警告生成
- **載入速度**：首頁 LCP < 2.5s (優秀等級)
- **SEO 優化**：完整 meta 標籤與結構化數據
- **PWA 評分**：完整離線支援，可安裝應用

### 📱 **功能完整性**
- ✅ **評論系統**：Waline 全功能，表情包豐富
- ✅ **隱私合規**：完整隱私政策與用戶協議
- ✅ **響應式設計**：完美適配所有裝置
- ✅ **內容管理**：5篇技術文章，分類標籤完整
- ✅ **社群整合**：GitHub、Discord、Instagram 等平台連結

### 🛡️ **安全與維護**
- **依賴更新**：所有套件保持最新安全版本
- **自動化部署**：GitHub Actions 零停機部署
- **錯誤處理**：完整的 JavaScript 錯誤捕捉機制
- **監控告警**：構建失敗自動通知

---

## 🎯 技術亮點與創新

### 💡 **創新解決方案**

1. **雙 PWA 插件架構**
   - hexo-offline: 基礎離線功能
   - hexo-swpp: 高級快取策略
   - 結果：零衝突，完美協作

2. **評論系統無縫遷移**
   - 資料遷移：Valine → Waline
   - 功能增強：+圖片上傳 +管理面板
   - 用戶體驗：零中斷升級

3. **JavaScript 防禦式編程**
   ```javascript
   // 典型實現模式
   if (typeof LibraryName !== 'undefined') {
     // 安全執行
   } else {
     console.warn('Library not loaded, graceful degradation');
   }
   ```

### 🏆 **效能優化成果**

- **圖片優化**：JPEG → WebP，平均減少 40% 體積
- **代碼分割**：按需載入第三方庫
- **CDN 加速**：靜態資源全球分發
- **緩存策略**：多層緩存，1分鐘更新週期

---

## 🔮 未來發展方向

### 🚀 **短期計劃 (1-2週)**
- [ ] **內容創作工具**：Markdown 編輯器整合
- [ ] **SEO 進階優化**：結構化數據完善
- [ ] **性能監控**：Web Vitals 數據收集

### 🌟 **中期目標 (1-2月)**
- [ ] **多語言支援**：英文版本建立
- [ ] **互動功能**：留言板與訪客計數
- [ ] **內容搜索**：全文搜索功能

### 🎨 **長期願景 (3-6月)**
- [ ] **主題客製化**：個人化設計元素
- [ ] **API 整合**：GitHub 活動展示
- [ ] **社群功能**：友鏈與分享機制

---

## 📝 開發心得與經驗總結

### 💭 **技術選型思考**

**為什麼選擇 Hexo + AnZhiYu？**
- **Hexo**：成熟的靜態站點生成器，豐富的插件生態
- **AnZhiYu**：現代化設計，豐富的客製化選項
- **GitHub Pages**：免費託管，完美的 CI/CD 整合

**PWA 架構決策**：
選擇雙插件而非單一解決方案，獲得了更細緻的控制能力和更好的性能表現。

### 🛠️ **開發流程優化**

1. **版本控制策略**
   - 功能分支開發
   - 自動化測試與部署
   - 衝突預防機制

2. **效能監控方法**
   - 構建時間追蹤
   - 資源大小監控
   - 錯誤日誌收集

3. **用戶體驗設計**
   - 無障礙設計原則
   - 響應式優先策略
   - 漸進式增強理念

### 🎓 **學習成果**

這個專案讓我深入理解了：
- **現代前端工具鏈**的復雜性與威力
- **靜態站點生成器**的架構設計思路
- **PWA 技術**的實際應用場景
- **用戶體驗設計**的重要性與實現方法

---

*📅 最後更新：2025-10-11 15:05:00*  
*🔢 版本：v3.0.0 (穩定版)*  
*📊 專案狀態：生產就緒*  
*🎯 技術成熟度：★★★★★*

---

> **專案座右銘**：「每一行代碼都是對用戶體驗的承諾，每一次優化都是對技術追求的體現。」
