import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import autoImport from 'unplugin-auto-import/vite';
import components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import { createStyleImportPlugin } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    open: true,
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    autoImport({
      imports: [
        'vue',
        '@vueuse/core',
        // 不可以再配置Imports,否则样式会出错
        // VantImports(),
      ],
      resolvers: [ VantResolver() ],
      dts: 'auto-import.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),
    components({
      dirs: [ 'src/components' ],
      resolvers: [ VantResolver() ],
    }),
    createStyleImportPlugin({
      resolves: [
        {
          libraryName: 'vant',
          libraryNameChangeCase: 'pascalCase',
          esModule: true,
          // eslint-disable-next-line no-shadow
          resolveStyle: (name:string) => {
            return `vant/es/${ name.toLowerCase() }/index.css`
          },
        },
      ],
    }),
  ],
  build: {
    target: 'es2015',
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.ts', '.tsx', '.vue', '.json', '.mjs', '.cjs' ],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
