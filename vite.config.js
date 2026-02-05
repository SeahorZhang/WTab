import { fileURLToPath, URL, resolve } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Info from 'unplugin-info/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

function getCache({ name, pattern }) {
  return {
    urlPattern: pattern,
    handler: 'CacheFirst',
    options: {
      cacheName: name, // 缓存名称
      expiration: {
        maxEntries: 500, // 最大缓存数量
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
      },
      cacheableResponse: {
        statuses: [200], // 只缓存状态码为200的请求
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'
  return {
    base: './',
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/core'],
        // 缓存生成的文件
        dts: 'auto-imports.d.ts',
        vueTemplate: true,
      }),
      Info(),
      tailwindcss(),
      VitePWA({
        injectRegister: 'script-defer',
        devOptions: {
          enabled: true,
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,webp,png,svg,ico}'],
          cleanupOutdatedCaches: true, // 清理过期缓存
          runtimeCaching: [
            // 捕获所有其他网络请求
            getCache({
              pattern: /.*/,
              name: 'all-requests-cache',
            }),
          ],
        },
        manifest: {
          name: 'WTab小组件',
          short_name: 'WTab',
          description: '自定义小组件',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/pwa/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/pwa/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      // CSS打包配置
      cssCodeSplit: false, // 禁用CSS代码拆分，将所有CSS打包到一个文件

      // 生产环境优化
      terserOptions: {
        compress: {
          drop_console: isProd, // 生产环境下移除console
          drop_debugger: isProd, // 生产环境下移除debugger
        },
      },
      // 启用CSS压缩
      cssMinify: true,
      // 启用sourcemap
      sourcemap: !isProd,
      // 分块大小警告的限制（单位kb）
      chunkSizeWarningLimit: 1000,

      rollupOptions: {
        // https://rollupjs.org/guide/en/#outputmanualchunks
        output: {
          // 更精细的chunks划分
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('vue') || id.includes('@vue')) {
                return 'vendor.vue'
              }
              if (id.includes('@vueuse')) {
                return 'vendor.vueuse'
              }
              if (id.includes('iconify') || id.includes('icon')) {
                return 'vendor.icons'
              }
              return 'vendor'
            }
          },
          // 确保CSS打包到一个文件
          assetFileNames: () => {
            return 'assets/[name].[hash][extname]'
          },
          // 自定义入口文件名
          entryFileNames: 'assets/[name].[hash].js',
          // 块文件名
          chunkFileNames: 'assets/[name].[hash].js',
        },
        input: {
          main: resolve('./', 'index.html'),
        },
      },
    },
  }
})
