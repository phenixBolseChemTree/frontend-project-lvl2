import parseFile from './parser.js';
import makeDiff from './diff.js';
import formattedDiff from './formatedDiff.js';

const genDiff = (filepath1, filepath2) => {
  const obj1 = parseFile(filepath1);
  const obj2 = parseFile(filepath2);

  const diff = makeDiff(obj1, obj2);

  return formattedDiff(diff);
};
export default genDiff;
