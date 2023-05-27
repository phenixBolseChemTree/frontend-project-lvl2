import _ from 'lodash';

// Функция для преобразования значения в строку
const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]'; // Если значение является объектом, возвращаем '[complex value]'
  }
  if (typeof value === 'string') {
    return `'${value}'`; // Если значение является строкой, возвращаем строку, заключенную в одинарные кавычки
  }
  return String(value);
// В остальных случаях, используем встроенную функцию String() для преобразования значения в строку
};

// Функция для получения полного имени свойства
const getName = (properties, property) => [...properties, property].join('.');

// Функция для рендеринга узлов дерева
const buildTree = (node, properties = []) => {
  const {
    type, key, value, value1, value2, children,
  } = node;

  switch (type) {
    case 'zeroDeep':
      return children.flatMap((child) => buildTree(child, properties)).join('\n');
    case 'plus':
      return `Property '${getName(properties, key)}' was added with value: ${stringify(value)}`;
    case 'minus':
      return `Property '${getName(properties, key)}' was removed`;
    case 'same':
      return [];
    case 'replacement':
      return `Property '${getName(properties, key)}' was updated. From ${stringify(value1)} to ${stringify(value2)}`;
    case 'nested':
      return children.flatMap((child) => buildTree(child, [...properties, key])).join('\n');
    default:
      throw new Error(`Unknown node type received ${type} from tree ${node}`);
  }
};

export default (tree) => buildTree(tree);
