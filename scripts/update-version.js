const exec = require('child_process').execSync

const onlineVersion = exec('npm show @santiment-network/ui version')
  .toString()
  .slice(0, -1)
const result = exec(
  `cd pckg-build && yarn version --new-version ${onlineVersion} --no-git-tag-version && yarn version --patch --no-git-tag-version`
).toString()
console.log(result)
