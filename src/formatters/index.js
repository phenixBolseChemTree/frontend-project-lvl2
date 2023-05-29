import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

export default (nodeTree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(nodeTree);
    case 'json':
      return json(nodeTree);
    case 'plain':
      return plain(nodeTree);
    default:
      throw new Error(`Unknown ${format}`);
  }
};
