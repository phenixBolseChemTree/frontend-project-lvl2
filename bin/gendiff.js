#!/usr/bin/env node
import { program } from 'commander';
import { diff } from '../index.js'
console.log('');

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f --format','<type> output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((file1, file2) => {
    console.log(diff(file1, file2));
  })

program.parse();