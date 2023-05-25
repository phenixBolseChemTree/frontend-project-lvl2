import yaml from 'js-yaml';

const parseFile = (data, format) => {
  try {
    if (format === 'yml' || format === 'yaml') {
      return yaml.load(data);
    }
    return JSON.parse(data);
  } catch (e) {
    throw new Error(`${e} error in parser`);
  }
};

export default parseFile;
