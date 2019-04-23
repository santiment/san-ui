const glob = require('glob')
const path = require('path')
const fs = require('fs')

const source = path.resolve(__dirname, '..', 'src')
const destination = path.resolve(__dirname, '..', 'lib-build')

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination)
}

const filesToCopyFromSrcRoot = ['package.json']

filesToCopyFromSrcRoot.forEach(fileName => {
  fs.copyFile(
    path.resolve(source, fileName),
    path.resolve(destination, fileName),
    err => {
      if (err) throw err
      console.log(`👍 ${fileName} was copied into build`)
    }
  )
})

const copySCSSToBuildFolder = () => {
  glob.sync(source + '/**/*.scss').forEach(fileName => {
    const name = path.basename(fileName)
    const folder = path.relative(source, path.dirname(fileName))
    const resultFolderPath = path.resolve(destination, folder)
    if (!fs.existsSync(resultFolderPath)) {
      fs.mkdirSync(resultFolderPath)
    }

    fs.copyFile(fileName, path.resolve(resultFolderPath, name), err => {
      if (err) throw err
    })
  })
  console.log(`👍 scss files were copied into build`)
}

copySCSSToBuildFolder()
