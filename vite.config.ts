import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import ElementPlus from 'element-plus'
// import * as path from 'path' // 安装 @types/node -S
import { resolve } from 'path' // 安装 @types/node -S

// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import commonjs from 'rollup-plugin-commonjs'
// import externalGlobals from 'rollup-plugin-external-globals'
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'
import viteCompression from 'vite-plugin-compression'
import viteImagemin from 'vite-plugin-imagemin'
// const globals = externalGlobals({
//   // vue - 这里需要和external对应，这个字符串就是(import xxx from aaa)中的aaa，也就是包的名字
//   // Vue - 这个是js文件导出的全局变量的名字，比如说vue就是Vue，查看源码或者参考作者文档可以获得
//   vue: 'Vue',
//   'element-plus': 'element'
// })

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()]
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()]
    // }),
    // 使用 cdn 按需引入
    importToCDN({
      modules: [
        {
          name: 'vue', // 因为依赖于 vue 所以要导入 vue 的 cdn
          var: 'Vue',
          path: 'https://unpkg.com/vue@next'
        },
        {
          name: 'element-plus', // element-plus 的包也要一起下载 main.ts 中也要全局导入写法
          var: 'ElementPlus',
          path: 'https://unpkg.com/element-plus',
          css: 'https://unpkg.com/element-plus/dist/index.css'
        },
        autoComplete('axios'),
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: 'https://unpkg.com/vue-router@4.0.5/dist/vue-router.global.js'
        }
      ]
    }),
    commonjs(),
    viteCompression(), // gzip
    // 图片压缩
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 20
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      comp: resolve(__dirname, 'src/components')
      // vue: 'https://esm.sh/vue@3.0.6',
      // 'element-plus': 'https://unpkg.com/element-plus'
    }
  },
  build: {
    minify: 'terser', // 更新了 esbulid 如果使用 build 一定要加上这句
    terserOptions: {
      compress: {
        // 生产环境移除 console
        drop_console: true,
        drop_debugger: true
      }
    }
    // rollupOptions: {
    //   external: ['vue', 'element-plus'],
    //   plugins: [commonjs(), globals]
    // }
  }
})
