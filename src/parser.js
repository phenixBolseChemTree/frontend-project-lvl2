import yaml from 'js-yaml';

const parse = (fileObject, format) => {
  try {
    if (format === 'yml' || format === 'yaml') {
      return yaml.load(fileObject);
    }
    return JSON.parse(fileObject);
  } catch (e) {
    throw new Error(`${e} error in parser`);
  }
};

export default parse;
