/**
 * SWPP Configuration for itousouta15.github.io
 */

module.exports = {
  // Service Worker 輸出目錄
  serviceWorkerPath: './public/sw.js',
  
  // 版本文件輸出路徑
  versionPath: './public/versions.json',
  
  // 基本配置
  skipWaiting: true,
  clientsClaim: true,
  
  // 緩存策略
  runtimeCaching: [
    // 靜態資源 - 緩存優先
    {
      urlPattern: /\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|woff|woff2|ttf|eot)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'static-resources',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 天
        },
      },
    },
    
    // HTML 頁面 - 網絡優先
    {
      urlPattern: /\.html$/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'html-pages',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60, // 1 天
        },
      },
    },
    
    // API 請求 - 網絡優先
    {
      urlPattern: /^https:\/\/api\./,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'api-cache',
        expiration: {
          maxEntries: 20,
          maxAgeSeconds: 5 * 60, // 5 分鐘
        },
      },
    },
  ],
};