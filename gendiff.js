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
    const resolvedFilepath1 = path.resolve(filepath1);
    const resolvedFilepath2 = path.resolve(filepath2);
    console.log(genDiff(resolvedFilepath1, resolvedFilepath2));
  })
  .parse(process.argv);

// const { format } = program;

// //Этот код проверяет, был ли предоставлен аргумент для опции --format
// if (!format) {
//   console.error('Error: --format option is required');
//   //для удобства вывожу снова help
//   program.outputHelp();
//   //бросаю ошибку из стека с ошибками
//   process.exit(1);
// }
