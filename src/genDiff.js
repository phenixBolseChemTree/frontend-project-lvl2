import _ from 'lodash';
import parseFile from './parser.js';

const genDiff = (filepath1, filepath2) => {
  const obj1 = parseFile(filepath1);
  const obj2 = parseFile(filepath2);

  const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort();

  const diff = keys.reduce((acc, key) => {
    if (key in obj1 && key in obj2) { // Если ключ присутствует в обоих объектах
      if (obj1[key] === obj2[key]) {
        return [...acc, `    ${key}: ${obj1[key]}`];
      }
      return [...acc, { [`- ${key}`]: obj1[key] }, { [`+ ${key}`]: obj2[key] }];
    }
    if (key in obj1) { // Если ключ присутствует только в первом объекте, добавляем строку
      return [...acc, { [`- ${key}`]: obj1[key] }];
    }
    if (key in obj2) { // Если ключ присутствует только во втором объекте, добавляем строку
      return [...acc, { [`+ ${key}`]: obj2[key] }];
    }
    return acc; // Если ключ отсутствует в обоих объектах, оставляем разницу без изменений
  }, []);
  // Форматирование разницы для вывода
  const formattedDiff = diff.map((item) => {
    if (typeof item === 'string') {
      return item; // Если элемент является строкой, оставляем его без изменений
    }
    const key = Object.keys(item)[0]; // Форматирование строки

    const value = item[key];
    return `  ${key}: ${value}`;
  });
  return `{\n${formattedDiff.join('\n')}\n}`; // Возврат отформатированной разницы
};

export default genDiff;
