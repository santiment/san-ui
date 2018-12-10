const fs = require('fs')
const path = require('path')
const exec = require('child_process').execSync

const filesToCopyFromSrcRoot = ['mixins.scss', 'variables.scss', 'package.json']

filesToCopyFromSrcRoot.forEach(fileName => {
  fs.copyFile(
    path.resolve(__dirname, '..', 'src', fileName),
    path.resolve(__dirname, '..', 'pckg-build', fileName),
    err => {
      if (err) throw err
      console.log(`👍 ${fileName} was copied into build`)
    }
  )
})
