import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'url'
import svgLoader from 'vite-svg-loader'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import eslintPlugin from 'vite-plugin-eslint'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue({}),
    AutoImport({
      //Targets (file extensions)
      include: [
        /\.[tj]sx?$/, //Regex which says t or j followed by sx. //tsx, jsx, ? next to x says it can happen zero or one time js,ts
        /\.vue$/, //$ at the end says it ends with vue
      ],
      //globals (libraries)
      imports: ['vue', 'vue-router', 'pinia'],
      //other settings/files/dirs to import
      dts: true, //Autoimport all the files that ends with d.ts
      //Autoimport inside vue template
      vueTemplate: true,
      eslintrc: { enabled: true },
    }),
    svgLoader(),
    VueI18nPlugin({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        './src/i18n/locales/**',
      ),
    }),
    tsconfigPaths(),
    eslintPlugin({
      // add options for eslintPlugin here
      include: [
        './src/**/*.ts',
        './src/**/*.d.ts',
        './src/**/*.tsx',
        './src/**/*.vue',
      ], // specify files
      emitWarning: true, // always emit errors as warnings, will not break the build
      failOnWarning: false, // do not fail the build on warnings (default is false)
      failOnError: false, // do not fail the build on errors (default is true in production)
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
