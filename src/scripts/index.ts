import { program, Command } from 'commander'

function apply(action: string, options: Command) {
  import(`./${action}`).then(data => {
    data[action](options)
  })
}

const scripts = [{
  name: 'clone',
  description: 'clone Github Repo',
  usage: 'g-cli get projectName'
}]

for (const item of scripts) {
  program
    .command(item.name)
    .option('-g, --git <git>', 'choose in github/gitlab/gitee, default is github', 'github')
    .option('--path <localPath>', 'choose clone local path, default is current directory', './')
    .description(item.description)
    .action((options) => {
      apply(item.name, options)
    })
}

export default program
