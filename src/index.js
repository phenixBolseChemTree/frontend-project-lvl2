import path from 'node:path';
import parser from './parser.js';
import makeDiff from './diff.js';
import formatters from './formatters/index.js';

const getFormat = (filepath) => {
  const lastIndex = filepath.lastIndexOf('.');
  if (lastIndex === -1) {
    return '';
  }
  return filepath.slice(lastIndex + 1);
};

const buildFullPath = (filepath) => path.resolve(process.cwd(), filepath);

const getData = (filepath) => parser(filepath, getFormat(filepath));

const genDiff = (filepath1, filepath2, outputFormat = 'stylish') => {
  const obj1 = getData(buildFullPath(filepath1));
  const obj2 = getData(buildFullPath(filepath2));
  const resultOutput = makeDiff(obj1, obj2);
  return formatters(resultOutput, outputFormat);
};
export default genDiff;
