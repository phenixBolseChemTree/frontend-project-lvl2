#!/usr/bin/env node
import { program } from 'commander';

console.log('');

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f --format','<type> output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((str, options) => {
    console.log();
  })
//полезные функции: path.resolve() и process.cwd()).


.action((strings, options) => {
  console.log(strings.join(options.separator));
});

program.parse();
