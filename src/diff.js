import _ from 'lodash';

const makeDiff = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort();
  const diff = keys.reduce((acc, key) => {
    if (key in obj1 && key in obj2) {
      if (obj1[key] === obj2[key]) {
        return [...acc, { key, value: obj1[key], type: 'same' }];
      }
      return [...acc, { key, value: obj1[key], type: 'minus' }, { key, value: obj2[key], type: 'plus' }];
    }
    if (key in obj1) {
      return [...acc, { key, value: obj1[key], type: 'minus' }];
    }
    if (key in obj2) {
      return [...acc, { key, value: obj2[key], type: 'plus' }];
    }
    return acc;
  }, []);
  return diff;
};
export default makeDiff;
