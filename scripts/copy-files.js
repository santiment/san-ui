const fs = require('fs')
const path = require('path')

const copyAtBuild = () => {
  const filesToCopyFromSrcRoot = [
    'mixins.scss',
    'variables.scss',
    'package.json'
  ]

  filesToCopyFromSrcRoot.forEach(fileName => {
    fs.copyFile(
      path.resolve(__dirname, '..', 'src', fileName),
      path.resolve(__dirname, '..', 'build', fileName),
      err => {
        if (err) throw err
        console.log(`👍 ${fileName} was copied into build`)
      }
    )
  })
}

copyAtBuild()
