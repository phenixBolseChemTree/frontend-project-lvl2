import yaml from 'js-yaml';
import fs from 'fs';

const parseFile = (filepath, format) => {
  const fileData = fs.readFileSync(filepath, 'utf-8');
  try {
    if (format === 'yml' || format === 'yaml') {
      return yaml.load(fileData);
    }
    return JSON.parse(fileData);
  } catch (e) {
    throw new Error(`${e} error in parser`);
  }
};

export default parseFile;
