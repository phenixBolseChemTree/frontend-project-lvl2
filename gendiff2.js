#!/usr/bin/env node
import { program } from 'commander';
import path from 'path';
import genDiff from './src/genDiff.js';
import parseFile from './src/parser.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .usage('[options] <filepath1> <filepath2>')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .helpOption('-h, --help', 'output usage information')
  .action((filepath1, filepath2) => {
    const resolvedFilepath1 = path.resolve(filepath1);
    const resolvedFilepath2 = path.resolve(filepath2);
    const obj1 = parseFile(resolvedFilepath1);
    const obj2 = parseFile(resolvedFilepath2);
    console.log(genDiff(obj1, obj2));
  })
  .parse(process.argv);
