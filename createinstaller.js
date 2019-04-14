const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath)

  return Promise.resolve({
    appDirectory: path.join(outPath, 'Lichess_x64'),
    authors: 'Cppdozer Inc.',
    noMsi: true,
    outputDirectory: path.join(outPath, 'Installers'),
    exe: 'Lichess.exe',
    setupExe: 'Lichess_x64_Installer.exe',
    setupIcon: path.join(rootPath,'Lichess.ico')
  })
}
