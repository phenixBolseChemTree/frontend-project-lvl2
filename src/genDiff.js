import path from 'node:path';
import parser from './parser.js';
import buildDiffTree from './diff.js';
import constructorFormat from './controlFormat/constructorFormat.js';

const getFormat = (filepath) => {
  const lastIndex = filepath.lastIndexOf('.');
  if (lastIndex === -1) {
    return '';
  }
  return filepath.slice(lastIndex + 1);
};

const buildFullPath = (filepath) => path.resolve(process.cwd(), filepath);

const getData = (filepath) => parser(filepath, getFormat(filepath));

// берет 2 пути файла делает из них абсолютные пути и парсит их в обьекты
const genDiff = (filepath1, filepath2, outputFormat = 'stylish') => {
  const data1 = getData(buildFullPath(filepath1));
  const data2 = getData(buildFullPath(filepath2));
  // buildTree дерево отличий содает вид данных легко поддающийся обработке
  const resultOutput = buildDiffTree(data1, data2);
  console.log(resultOutput);
  // format формирует нужный формат для вывода (указывается 2 арг)
  return constructorFormat(resultOutput, outputFormat);
};
export default genDiff;
