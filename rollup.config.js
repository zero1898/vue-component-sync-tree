const rollup = require('rollup')
const vue = require('rollup-plugin-vue2')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const uglify = require('rollup-plugin-uglify')
const commonjs = require('rollup-plugin-commonjs')
const ug = require('uglify-es')
const babelHelpers = require('babel-helpers')
const externalHelpersWhitelist = babelHelpers.list.filter(helperName => {
  return helperName !== 'asyncGenerator'
})
const plugins = [
  vue(),
  resolve({
    extensions: ['.js', '.vue']
  }),
  babel({
    exclude: 'node_modules/**',
    plugins: ['external-helpers'],
    externalHelpersWhitelist
  }),
  commonjs()
]

const config = {
  name: 'vueComponentSyncTree',
  entry: './src/index.js',
  dist: 'lib/index'
}

const pkgs = [
  { format: 'cjs', suffix: '.com.js' },
  { format: 'cjs', suffix: '.com.min.js', min: true },
  { format: 'es', suffix: '.esm.js' },
  { format: 'es', suffix: '.esm.min.js', min: true },
  { format: 'umd', suffix: '.umd.js' },
  { format: 'umd', suffix: '.umd.min.js', min: true }
]

pkgs.forEach(runRollup)

function runRollup (it) {
  rollup.rollup({
    input: config.entry,
    external: ['vue', 'element-ui/lib/tree', 'element-ui/lib/icon', 'element-ui/lib/input', 'element-ui/lib/button', 'element-ui/lib/button-group'],
    plugins: it.min ? plugins.concat(uglify({}, ug.minify)) : plugins
  })
  .then(bundle => {
    bundle.write({
      format: it.format,
      name: config.name,
      globals: {
        'element-ui/lib/tree': 'ELEMENT.Tree',
        'element-ui/lib/icon': 'ELEMENT.Icon',
        'element-ui/lib/input': 'ELEMENT.Input',
        'element-ui/lib/button': 'ELEMENT.Button',
        'element-ui/lib/button-group': 'ELEMENT.ButtonGroup'
      },
      file: config.dist + it.suffix
    })
  })
  .catch(e => {
    console.log(`${it.format} - 打包出错：`, e)
    process.exit(1)
  })
}
