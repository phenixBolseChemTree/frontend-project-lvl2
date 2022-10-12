import _ from "lodash";
import * as fs from "node:fs";

export const diff = (fileName1, fileName2) => {
  const file1 = JSON.parse(fs.readFileSync(fileName1,'utf-8'));
  const file2 = JSON.parse(fs.readFileSync(fileName2,'utf-8'));
  const keysNotFiltred = Object.keys(file1).concat(Object.keys(file2)).sort();
  const keys = keysNotFiltred.filter((element, index) => {
      return keysNotFiltred.indexOf(element) === index;
  });

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

const rr = `
{
${
resultArr.map(
(elem) => `  ${elem.type} ${elem.key}: ${elem.value}`
).join('\n')
}
}
`
      return rr;
}