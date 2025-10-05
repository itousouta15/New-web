/**
 * hexo-offline 配置文件
 * 用於生成 Service Worker 和 PWA 離線功能
 */

module.exports = {
  // 最大文件大小 (5MB)
  maximumFileSizeToCacheInBytes: 5242880,
  
  // 要缓存的文件模式
  globPatterns: [
    "**/*.{js,html,css,png,jpg,jpeg,gif,svg,webp,ico,woff,woff2,ttf,eot}",
    "**/*.json",
    "**/*.xml"
  ],
  
  // 目录配置
  globDirectory: 'public',
  swDest: 'public/service-worker.js',
  
  // 跳过等待
  skipWaiting: true,
  clientsClaim: true,
  
  // 运行时缓存策略
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|gif|svg|webp|ico)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
    {
      urlPattern: /\.(?:js|css)$/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-resources',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
        },
      },
    },
    {
      urlPattern: /\.html$/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'html-pages',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60, // 1 day
        },
        networkTimeoutSeconds: 3,
      },
    },
  ],
};