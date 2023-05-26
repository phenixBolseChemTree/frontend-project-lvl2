import stylish from './stylish.js';
import plain from './plain.js';

export default (nodeTree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(nodeTree);
    case 'json':
      return JSON.stringify(nodeTree);
    case 'plain':
      return plain(nodeTree);
    default:
      throw new Error(`Uncnown ${format}`);
  }
};
