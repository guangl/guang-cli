#! /usr/bin/env node

import config from 'config'
import program from './scripts'

const VERSION: string = config.get('version')

program
  .version(VERSION, '-V, --version', 'print the version')
  .parse(process.argv)