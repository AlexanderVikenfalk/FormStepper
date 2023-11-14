import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'url'
import svgLoader from 'vite-svg-loader'
import dynamicImport from 'vite-plugin-dynamic-import'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import eslintPlugin from 'vite-plugin-eslint'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue({}),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/],

      imports: ['vue', 'vue-router', 'pinia'],

      dts: true,

      vueTemplate: true,
      eslintrc: { enabled: true },
    }),
    svgLoader(),
    dynamicImport(),
    VueI18nPlugin({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        './src/i18n/locales/**',
      ),
    }),
    tsconfigPaths(),
    eslintPlugin({
      include: [
        './src/**/*.ts',
        './src/**/*.d.ts',
        './src/**/*.tsx',
        './src/**/*.vue',
      ],
      emitWarning: true,
      failOnWarning: false,
      failOnError: false,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
})
