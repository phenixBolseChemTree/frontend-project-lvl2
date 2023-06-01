import _ from 'lodash';

const indent = (depth, spacesCount = 4) => ' '.repeat(depth * spacesCount - 2);

const stringify = (data, depth, buildTree) => {
  if (!_.isObject(data)) {
    return String(data);
  }
  const output = Object.entries(data).map(([key, value]) => buildTree({ type: 'same', key, value }, depth + 1));
  return `{\n${output.join('\n')}\n${indent(depth)}  }`;
};

const buildTree = (node, depth) => {
  const {
    type, key, value, value1, value2, children,
  } = node;
  // const output = children ? children.map((child) => buildTree(child, depth + 1)) : [];
  const output = children ? children.flatMap((child) => buildTree(child, depth + 1)) : [];

  switch (type) {
    case 'root':
      return `{\n${output.join('\n')}\n}`;
    case 'plus':
      return `${indent(depth)}+ ${key}: ${stringify(value, depth, buildTree)}`;
    case 'minus':
      return `${indent(depth)}- ${key}: ${stringify(value, depth, buildTree)}`;
    case 'replacement':
      return [
        `${indent(depth)}- ${key}: ${stringify(value1, depth, buildTree)}`,
        `${indent(depth)}+ ${key}: ${stringify(value2, depth, buildTree)}`,
      ];
    case 'same':
      return `${indent(depth)}  ${key}: ${stringify(value, depth, buildTree)}`;
    case 'nested':
      return `${indent(depth)}  ${key}: {\n${output.join('\n')}\n${indent(depth)}  }`;
    default:
      throw new Error(`unknown type ${type}`);
  }
};

export default (tree) => buildTree(tree, 0);
