/**
 * {build}
 * @author yutent<yutent.io@gmail.com>
 * @date 2021/08/09 11:59:41
 */

import Es from 'esbuild'

Es.build({
  entryPoints: ['src/index.js', 'src/crypto.js', 'src/md5.js', 'src/base64.js'],
  outdir: 'dist',
  target: 'es2017',
  format: 'esm',
  bundle: true,
  minify: true
})
