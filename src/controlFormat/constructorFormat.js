import stylish from './stylish.js';

export default (nodeTree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(nodeTree);
    case 'json':
      return JSON.stringify(nodeTree);
    default:
      throw new Error(`Uncnown ${format}`);
  }
};
