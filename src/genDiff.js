import fs from "fs";
import _ from "lodash";

const genDiff = (filepath1, filepath2) => {
  const file1 = fs.readFileSync(filepath1, "utf-8");
  const file2 = fs.readFileSync(filepath2, "utf-8");

  const obj1 = JSON.parse(file1);
  const obj2 = JSON.parse(file2);

  // Получение всех ключей из обоих объектов, сортировка и удаление дубликатов
  const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort();

  const diff = keys.reduce((acc, key) => {
    // Если ключ присутствует в обоих объектах
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      if (obj1[key] === obj2[key]) {
        return [...acc, `    ${key}: ${obj1[key]}`];
      }
      return [...acc, { [`- ${key}`]: obj1[key] }, { [`+ ${key}`]: obj2[key] }];
    }
    // Если ключ присутствует только в первом объекте, добавляем строку (старое значение) в разницу
    if (obj1.hasOwnProperty(key)) {
      return [...acc, { [`- ${key}`]: obj1[key] }];
    }
    // Если ключ присутствует только во втором объекте, добавляем строку (новое значение) в разницу
    if (obj2.hasOwnProperty(key)) {
      return [...acc, { [`+ ${key}`]: obj2[key] }];
    }
    // Если ключ отсутствует в обоих объектах, оставляем разницу без изменений
    return acc;
  }, []);

  // Форматирование разницы для вывода
  const formattedDiff = diff.map((item) => {
    if (typeof item === "string") {
      // Если элемент является строкой, оставляем его без изменений
      return item;
    }
    // Извлечение ключа и значения из объекта разницы и форматирование строки
    const key = Object.keys(item)[0];
    const value = item[key];
    return `  ${key}: ${value}`;
  });

  // Возврат отформатированной разницы
  return `{\n${formattedDiff.join("\n")}\n}`;
};

export default genDiff;
