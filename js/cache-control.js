// 智能快取控制腳本 - 解決客戶端更新問題
(function() {
  'use strict';
  
  // 配置
  const CONFIG = {
    SITE_VERSION: '2.4.1-' + new Date().toISOString().split('T')[0] + '-' + Math.floor(Date.now() / (1000 * 60 * 30)), // 每30分鐘版本號
    STORAGE_KEY: 'itousouta15_blog_version',
    PRESERVE_KEYS: ['theme-mode', 'readmode', 'translate-mode'] // 保留用戶偏好設定
  };
  
  // 版本檢查與快取管理
  function initCacheControl() {
    const storedVersion = localStorage.getItem(CONFIG.STORAGE_KEY);
    
    // 版本不匹配時執行清理
    if (storedVersion !== CONFIG.SITE_VERSION) {
      console.log('🔄 偵測到網站更新 v' + CONFIG.SITE_VERSION);
      clearObsoleteCache();
      updateVersion();
    }
    
    // 註冊 Service Worker 更新監聽
    registerSWUpdateListener();
  }
  
  // 清除過時快取
  function clearObsoleteCache() {
    // 保留用戶設定
    const tempData = {};
    CONFIG.PRESERVE_KEYS.forEach(key => {
      const value = localStorage.getItem(key);
      if (value) tempData[key] = value;
    });
    
    // 清理瀏覽器儲存
    try {
      localStorage.clear();
      sessionStorage.clear();
      
      // 恢復用戶設定
      Object.entries(tempData).forEach(([key, value]) => {
        localStorage.setItem(key, value);
      });
      
      console.log('✅ 瀏覽器儲存已清理');
    } catch (e) {
      console.warn('清理儲存失敗:', e);
    }
    
    // 清理 Service Worker 快取
    if ('caches' in window) {
      caches.keys().then(cacheNames => {
        // 優先清理 HTML 和資料快取
        const targetCaches = cacheNames.filter(name => 
          name.includes('html') || name.includes('pages') || name.includes('data')
        );
        
        return Promise.all(
          targetCaches.map(cacheName => {
            console.log('🗑️ 清理快取:', cacheName);
            return caches.delete(cacheName);
          })
        );
      }).then(() => {
        console.log('✅ Service Worker 快取已清理');
        showUpdateNotification();
      }).catch(e => {
        console.warn('清理快取失敗:', e);
      });
    }
  }
  
  // 更新版本記錄
  function updateVersion() {
    localStorage.setItem(CONFIG.STORAGE_KEY, CONFIG.SITE_VERSION);
  }
  
  // 註冊 Service Worker 更新監聽
  function registerSWUpdateListener() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('🔄 Service Worker 已更新');
        showUpdateNotification();
      });
      
      // 強制檢查 SW 更新
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => {
          registration.update();
        });
      });
    }
  }
  
  // 顯示更新提示
  function showUpdateNotification() {
    // AnZhiYu 主題整合提示
    if (typeof anzhiyu !== 'undefined' && anzhiyu.snackbarShow) {
      anzhiyu.snackbarShow('🎉 網站內容已更新！', false, 2000);
      return;
    }
    
    // 通用提示
    const notification = document.createElement('div');
    notification.className = 'cache-update-notification';
    notification.innerHTML = `
      <div class="notification-content">
        🎉 網站已更新到 v${CONFIG.SITE_VERSION.split('-')[0]}
        <button onclick="location.reload()" class="reload-btn">重新整理</button>
      </div>
    `;
    
    // 樣式
    const style = document.createElement('style');
    style.textContent = `
      .cache-update-notification {
        position: fixed; top: 20px; right: 20px; z-index: 9999;
        background: var(--anzhiyu-main, #506680); color: white;
        padding: 12px 16px; border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-size: 14px; max-width: 280px;
        animation: slideInRight 0.3s ease-out;
      }
      .notification-content { display: flex; align-items: center; gap: 8px; }
      .reload-btn {
        background: rgba(255,255,255,0.2); border: none; color: white;
        padding: 4px 8px; border-radius: 4px; cursor: pointer;
        font-size: 12px; transition: background 0.2s;
      }
      .reload-btn:hover { background: rgba(255,255,255,0.3); }
      @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    // 3秒後自動移除
    setTimeout(() => {
      notification.style.animation = 'slideInRight 0.3s ease-out reverse';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
  
  // DOM 載入完成後初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCacheControl);
  } else {
    initCacheControl();
  }
})();