import vuePlugin from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
import replacePlugin from 'rollup-plugin-replace'
export default {
  input: 'src/main.js',
  output: {
    file: 'src/.temp/browser.js',
    format: 'iife',
  },
  plugins: [
    resolve(),
    vuePlugin({
      compileTemplate: true,
      target: 'browser',
    }),
    replacePlugin({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    commonjs(),
  ],
  external: [ 'Vue' ]
}