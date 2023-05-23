import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import _ from 'lodash';
import { log } from 'console';

const parseFile = (filepath) => {
  const fileContent = fs.readFileSync(filepath, 'utf-8');
  if (path.extname(filepath) === '.yml' || path.extname(filepath) === '.yaml') {
    return yaml.load(fileContent);
  }
  return JSON.parse(fileContent);
};

const pathJSON1 = './files/file1.json';
// const pathJSON2 = './files/file2.json';
// const pathYML1 = './files/file1.yml';
const pathYML2 = './files/file2.yml';

const obj1 = parseFile(path.join(process.cwd(), pathJSON1));
const obj2 = parseFile(path.join(process.cwd(), pathYML2));
console.log(obj1);
console.log(obj2);

const keyStore = _.union(Object.keys(obj1), Object.keys(obj2)).sort();
console.log(keyStore);

const diff = keyStore.reduce((acc, key) => {
  // если клю
  if (key in obj1) {

  }
})
