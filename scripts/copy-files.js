const fs = require('fs')
const path = require('path')

const copyAtBuild = () => {
  const filesToCopyFromSrcRoot = [
    'mixins.scss',
    'variables.scss',
    'package.json'
  ]

  filesToCopyFromSrcRoot.forEach(fileName => {
    if (fileName === 'package.json') {
      const packageData = fs.readFileSync(
        path.resolve(__dirname, '..', 'src', 'package.json')
      )

      if (!packageData) throw 'Could not read file'

      const jsonData = JSON.parse(packageData.toString())
      const version = jsonData.version.split('.')
      version[1] = parseInt(version[1], 10) + 1
      jsonData.version = version.join('.')

      fs.writeFileSync(
        path.resolve(__dirname, '..', 'src', 'package.json'),
        JSON.stringify(jsonData)
      )

      console.log('package.json file version updated')
    }

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
