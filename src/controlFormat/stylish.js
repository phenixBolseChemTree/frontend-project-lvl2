import _ from 'lodash';

const indent = (depth, spacesCount = 4) => ' '.repeat(depth * spacesCount - 2);

const stringify = (data, depth, render) => {
  if (!_.isObject(data)) {
    return String(data);
  }
  const output = Object.entries(data).map(([key, value]) => render({ type: 'same', key, value }, depth + 1));
  return `{\n${output.join('\n')}\n${indent(depth)}  }`;
};

const render = (node, depth) => {
  switch (node.type) {
    case 'zeroDeep': {
      const output = node.children.map((children) => render(children, depth + 1));
      return `{\n${output.join('\n')}\n}`;
    }
    case 'plus': {
      return `${indent(depth)}+ ${node.key}: ${stringify(node.value, depth, render)}`;
    }
    case 'minus': {
      return `${indent(depth)}- ${node.key}: ${stringify(node.value, depth, render)}`;
    }
    case 'replacement': {
      const output1 = `${indent(depth)}- ${node.key}: ${stringify(node.value1, depth, render)}`;
      const output2 = `${indent(depth)}+ ${node.key}: ${stringify(node.value2, depth, render)}`;
      return `${output1}\n${output2}`;
    }
    case 'same': {
      return `${indent(depth)}  ${node.key}: ${stringify(node.value, depth, render)}`;
    }
    case 'nested': {
      const output = node.children.map((children) => render(children, depth + 1));
      return `${indent(depth)}  ${node.key}: {\n${output.join('\n')}\n${indent(depth)}  }`;
    }
    default:
      throw new Error(`unknown type ${node.type}`);
  }
};

export default (tree) => render(tree, 0);
