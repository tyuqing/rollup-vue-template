import vuePlugin from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'
import replacePlugin from 'rollup-plugin-replace'
import copyPlugin from 'rollup-plugin-copy'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/browser.js',
    format: 'iife',
  },
  plugins: [
    copyPlugin({
      targets:[{ src: 'public/*', dest: 'dist' }]
    }),
    commonjs({
      include: 'node_modules/**',
      extensions: [ '.js', '.vue' ],
      
    }),
    resolve(),
    vuePlugin({
      css: true,
      compileTemplate: true,
      target: 'browser',
    }),
    replacePlugin({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
  ],
  external: [ 'Vue','element-ui' ]
}