#!/usr/bin/env node
import { program } from "commander";

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .usage('[options] <filepath1> <filepath2>')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .helpOption('-h, --help', 'output usage information')
  .parse(process.argv);

const { format } = program;

//Этот код проверяет, был ли предоставлен аргумент для опции --format
if (!format) {
  console.error('Error: --format option is required');
  //для удобства вывожу снова help
  program.outputHelp();
  //бросаю ошибку из стека с ошибками
  process.exit(1);
}