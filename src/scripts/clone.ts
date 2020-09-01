import config from 'config'
import SimpleGit from 'simple-git'
import ora from 'ora'
import { Command, } from 'commander'
import { getPath } from '../utils/path'

export async function clone(options: Command) {
  for (let item of options.args) {
    //  deal with data
    const projectName = item.split('/')[1]
    const localPath = getPath(options.path, projectName)
    const url = `${config.get('git.github')}/${item}.git`

    const loading = ora(`downloading ${item}`)
    const git = SimpleGit()

    try {
      loading.start()
      await git.clone(url, localPath)
      loading.succeed(`download succeed: ${item}`)
    } catch (err) {
      loading.fail(`download error: ${err.message}`)
    }
  }
}