#!/usr/bin/env node
import { program } from 'commander';
import path from 'path';
import genDiff from './src/genDiff.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .usage('[options] <filepath1> <filepath2>')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .helpOption('-h, --help', 'output usage information')
  .action((filepath1, filepath2) => {
    const dirPath = process.cwd();
    const absolutePath1 = path.resolve(dirPath, filepath1);
    const absolutePath2 = path.resolve(dirPath, filepath2);
    const diff = genDiff(absolutePath1, absolutePath2);
    console.log(diff);
  })
  .parse(process.argv);
