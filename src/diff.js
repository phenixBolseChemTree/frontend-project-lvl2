import _ from 'lodash';

const buildDiff = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2)).sort();
  return keys.map((key) => {
    if (!_.has(data1, key)) {
      return { type: 'plus', key, value: data2[key] };
    }
    if (!_.has(data2, key)) {
      return { type: 'minus', key, value: data1[key] };
    }
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { type: 'nested', key, children: buildDiff(data1[key], data2[key]) };
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return {
        type: 'replacement', key, value1: data1[key], value2: data2[key],
      };
    }
    return { type: 'same', key, value: data1[key] };
  });
};

const buildTree = (data1, data2) => ({ type: 'zeroDeep', children: buildDiff(data1, data2) });

export default buildTree;
