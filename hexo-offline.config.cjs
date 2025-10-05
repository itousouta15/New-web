// hexo-offline 簡化配置 - 消除警告
module.exports = {
  maximumFileSizeToCacheInBytes: 5242880,
  globDirectory: 'public',
  swDest: 'public/service-worker.js',
  skipWaiting: true,
  clientsClaim: true,
  globPatterns: [
    '**/*.{js,html,css,png,jpg,jpeg,gif,svg,webp,ico,woff,woff2,ttf,eot,json,xml}'
  ],
  globIgnores: [
    '**/search.xml',
    '**/sitemap.xml',
    '**/atom.xml',
    '**/rss.xml'
  ],
  runtimeCaching: [
    {
      urlPattern: /\.html$/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'html-pages',
        networkTimeoutSeconds: 2,
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 60  // 30分鐘（而不是6小時）
        }
      }
    },
    {
      urlPattern: /\.(js|css)$/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-resources',
        expiration: {
          maxEntries: 60,
          maxAgeSeconds: 60  // 1小時（而不是1天）
        }
      }
    },
    {
      urlPattern: /\.(png|jpg|jpeg|gif|svg|webp|ico)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 3600  // 圖片1小時快取（較合理）
        }
      }
    }
  ]
};