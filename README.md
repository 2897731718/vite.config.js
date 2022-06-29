# vite 配置
base
alias
"/images":"..."

build
terserOptions
        minify: 'terser',
        terserOptions: {
            compress: {
                //生产环境时移除console
                drop_console: true,
                drop_debugger: true,
            },
        },

rollupOptions
          output: {
               chunkFileNames: 'static/js/[name]-[hash].js',
               entryFileNames: 'static/js/[name]-[hash].js',
               assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
           },
plugin
element-plus
mock
npm i vite-plugin-mock mockjs  -D
server
    server: {
        proxy: {
            '/ss': {
                target: 'https://saucenao.com/search.php?db=999&output_type=2&url=https://pica.zhimg.com/v2-178387c7e8e907910d715e890bfd7519_1440w.jpg?source=172ae18b&api_key=33d4bee5c19583cd3756ee47f2ebef8edd5bef7e',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/ss/, ''),
            },
        },
    },
.env.production
VITE_BASE_API=/api
VITE_BASE_API=https://www.manga2020.com/api/v3/comic/hydxjxrwgb/chapter/cb321fca-c608-11e8-879b-024352452ce0?timeout=10000
CDN
npm install vite-plugin-cdn-import --save-dev
代码压缩
npm i vite-plugin-compression -D
        viteCompression({
            //生成压缩包gz
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: 'gzip',
            ext: '.gz',
        }),
打包图片
cnpm i vite-plugin-imagemin@0.4.6 -D
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 50,
            },
            pngquant: {
                quality: [0.8, 0.9],
                speed: 4,
            },
            svgo: {
                plugins: [
                    {
                        name: 'removeViewBox',
                    },
                    {
                        name: 'removeEmptyAttrs',
                        active: false,
                    },
                ],
            },
        }),
格式化
npm i eslint prettier @typescript-eslint/eslint-plugin  @typescript-eslint/parser @vue/eslint-config-prettier @vue/eslint-config-typescript  babel-eslint eslint-config-prettier  eslint-plugin-prettier eslint-plugin-vue -D
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        // '@vue/prettier/@typescript-eslint',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/indent': ['off'],
        '@typescript-eslint/no-unused-vars': ['error'],
    },
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineComponent: 'readonly',
        defineExpose: 'readonly',
    },
}
module.exports = {
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    singleQuote: true,
    semi: false,
    trailingComma: 'es5',
    bracketSpacing: true,
    jsxBracketSameLine: false,
    arrowParens: 'avoid',
    endOfLine: 'auto',
}
