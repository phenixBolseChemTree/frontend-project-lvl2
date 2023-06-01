import path from 'node:path';
import fs from 'node:fs';
import parse from './parser.js';
import makeDiff from './diff.js';
import formatters from './formatters/index.js';

// берем разрешение
const getFormat = (filepath) => (path.extname(filepath).slice(1));
// нахожим фаил в системе
const getObject = (filepath) => (fs.readFileSync(filepath, 'utf-8'));
// билдим полный путь
const buildFullPath = (filepath) => path.resolve(process.cwd(), filepath);
// парсим данные в нужный формат
const getData = (filepath) => parse(getObject(filepath), getFormat(filepath));

const genDiff = (filepath1, filepath2, outputFormat = 'stylish') => {
  const data1 = getData(buildFullPath(filepath1));
  const data2 = getData(buildFullPath(filepath2));
  const resultOutput = makeDiff(data1, data2);
  return formatters(resultOutput, outputFormat);
};
export default genDiff;
