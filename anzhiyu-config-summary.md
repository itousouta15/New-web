## 📋 開發日誌

### 2025-10-04 - 主題顏色自定義實現

**問題描述**：
- 用戶需要自定義 AnZhiYu 主題的顏色配置
- 指定淺色模式主色調：`#506680`
- 指定深色模式主色調：`#98bfeb`
- 通過 `_config.anzhiyu.yml` 配置的顏色無法正常應用

**解決方案探索**：

1. **第一次嘗試：配置文件注入 CSS**
   ```yaml
   # _config.anzhiyu.yml
   inject:
     head:
       - <style>:root{--anzhiyu-theme:#506680 !important;}[data-theme="dark"]{--anzhiyu-theme:#98bfeb !important;}</style>
   ```
   **結果**：顏色仍未生效，因為主題內部變量優先級更高

2. **第二次嘗試：直接修改主題變量文件**
   
   **文件一：`themes/anzhiyu/source/css/var.styl`**
   ```stylus
   // 修改前
   $bright-blue = #4259ef
   $dark-yellow = #f2b94b
   
   // 修改後  
   $bright-blue = #506680  // 淺色模式主色
   $dark-yellow = #98bfeb  // 深色模式主色
   ```

   **文件二：`themes/anzhiyu/source/css/_global/index.styl`**
   ```stylus
   // 在 +schemeDark() 函數中修改
   --anzhiyu-theme-op: #f2b94b23 → #98bfeb23
   --anzhiyu-lighttext: #f2b94b → #98bfeb
   
   // 在 [data-theme="dark"] 選擇器中修改
   --anzhiyu-theme-op: #f2b94b23 → #98bfeb23  
   --anzhiyu-lighttext: #f2b94b → #98bfeb
   ```

**技術重點**：
- AnZhiYu 主題的顏色系統分為兩層：Stylus 變量層和 CSS 變量層
- Stylus 變量在編譯時處理，CSS 變量在運行時處理
- 主題色彩需要同時修改兩個層級才能完全生效
- `$bright-blue` 影響淺色模式，`$dark-yellow` 影響深色模式
- CSS 變量中的 `--anzhiyu-theme-op` 和 `--anzhiyu-lighttext` 需要相應更新

**文件修改清單**：
- ✅ `themes/anzhiyu/source/css/var.styl` (2處修改)
- ✅ `themes/anzhiyu/source/css/_global/index.styl` (4處修改)
- ✅ `_config.anzhiyu.yml` (移除CSS注入)

**後續操作**：
- 需要執行 `npx hexo clean && npx hexo generate` 重新編譯
- 重啟本地服務器以應用更改
- 驗證淺色/深色模式切換時顏色是否正確顯示

**經驗總結**：
- 修改主題顏色時，配置文件方式可能因為優先級問題無效
- 直接修改主題源碼文件是最可靠的方式
- 需要理解主題的顏色系統架構才能準確定位修改點
- Stylus 預處理器變量和 CSS 自定義屬性需要配合修改