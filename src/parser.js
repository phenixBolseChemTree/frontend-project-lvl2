import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parseFile = (filepath) => {
  const fileContent = fs.readFileSync(filepath, 'utf-8');
  if (path.extname(filepath) === '.yml' || path.extname(filepath) === '.yaml') {
    return yaml.load(fileContent);
  }
  return JSON.parse(fileContent);
};

export default parseFile;
