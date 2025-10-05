// Valine Comment 表初始化腳本
// 請在瀏覽器控制台運行此腳本來測試 LeanCloud 連接

// 配置你的 LeanCloud 信息
const APP_ID = 'enNryGwveuZzVlq3wK9RKdI5-MdYXbMMI';
const APP_KEY = '28ErkaERrMOsA6JwTqhYCnZZ';

// 初始化 LeanCloud
AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
  serverURL: 'https://enNryGwv.api.lncldglobal.com'
});

// 創建測試評論
async function createTestComment() {
  try {
    const Comment = AV.Object.extend('Comment');
    const comment = new Comment();
    
    comment.set('nick', '測試用戶');
    comment.set('mail', 'test@example.com');
    comment.set('link', 'https://itousouta15.tw');
    comment.set('comment', '這是一條測試評論，用來初始化 Comment 表');
    comment.set('url', '/');
    comment.set('insertedAt', new Date());
    
    const result = await comment.save();
    console.log('✅ Comment 表創建成功！', result);
    
    // 創建成功後可以刪除這條測試數據
    // await result.destroy();
    // console.log('🗑️ 測試數據已清理');
    
  } catch (error) {
    console.error('❌ 創建失败：', error);
  }
}

// 在瀏覽器中運行
// 1. 首先載入 LeanCloud SDK：
// <script src="https://cdn.jsdelivr.net/npm/leancloud-storage@4.15.2/dist/av-min.js"></script>
// 2. 然後運行：createTestComment()

console.log('📝 請先引入 LeanCloud SDK，然後運行 createTestComment() 函數');
console.log('SDK 載入指令：');
console.log('const script = document.createElement("script");');
console.log('script.src = "https://cdn.jsdelivr.net/npm/leancloud-storage@4.15.2/dist/av-min.js";');
console.log('document.head.appendChild(script);');