#!/usr/bin/env node
import { program } from 'commander';

console.log();
console.log('Compares two configuration files and shows a difference.')
console.log('');
program
  .version('0.0.1')

program.parse();
