import _ from "lodash";
import * as fs from "node:fs";

const file1 = JSON.parse(fs.readFileSync('file1.json','utf-8'));
const file2 = JSON.parse(fs.readFileSync('file2.json','utf-8'));
const keysNotFiltred = Object.keys(file1).concat(Object.keys(file2)).sort();
const keys = keysNotFiltred.filter((element, index) => {
    return keysNotFiltred.indexOf(element) === index;
});

  // - follow: false
  //   host: hexlet.io
  // - proxy: 123.234.53.22
  // - timeout: 50
  // + timeout: 20
  // + verbose: true

  const getDataPrepation = (file1, file2, keys) => {
    const resultArr = [];
    keys.forEach((key)=> {
      if (file1.hasOwnProperty(key) && file2.hasOwnProperty(key)) {
        if (file1[key] !== file2[key]) {
          resultArr.push({
            key: key,
            type: '-',
            value: file1[key], 
          })
          resultArr.push({
            key: key,
            type: '+',
            value: file2[key], 
          })
        } else {
        resultArr.push({
          key: key,
          type: ' ',
          value:file1[key],
        })
      }
      } else {
        if (file1.hasOwnProperty(key)) {
          resultArr.push({
            key: key,
            type: '-',
            value:file1[key],
          })
        } else {
          resultArr.push({
            key: key,
            type: '+',
            value:file2[key],
          })
        }
      }
    })
    return resultArr;
  }

const dataPrepate = getDataPrepation(file1,file2,keys)

const dataString = (dataArray) => {
  const rr = `
{
${
      dataArray.map(
       (elem) => `  ${elem.type} ${elem.key}: ${elem.value}`
      ).join('\n')
    }
}
  `
  return rr;
}

console.log(dataString(dataPrepate));
