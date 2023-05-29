import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return String(value);
};

const getName = (properties, property) => [...properties, property].join('.');

const buildTree = (node, properties = []) => {
  const {
    type, key, value, value1, value2, children,
  } = node;

  switch (type) {
    case 'root':
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
