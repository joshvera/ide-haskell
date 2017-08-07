const cp = require('child_process')
const {AutoLanguageClient} = require('atom-languageclient')
const path = require('path')

class HaskellLanguageClient extends AutoLanguageClient {
  getGrammarScopes () { return [ 'source.haskell' ] }
  getLanguageName () { return 'Haskell' }
  getServerName () { return 'Haskell IDE Engine' }

  startServerProcess () {
    console.log("hello")
    return cp.spawn('./hie-vscode.sh', [], { cwd: path.join(__dirname, '..') })
  }
}

module.exports = new HaskellLanguageClient()
