// import genDiff from '../src/genDiff.js';

// const pathJSON1 = './__fixtures__/file1.json';
// const pathJSON2 = './__fixtures__/file2.json';
// const pathYML1 = './__fixtures__/file1.yml';
// const pathYML2 = './__fixtures__/file2.yml';

// const expectedDiffFile1File2 = `{
//   {
//     common: {
//       + follow: false
//         setting1: Value 1
//       - setting2: 200
//       - setting3: true
//       + setting3: null
//       + setting4: blah blah
//       + setting5: {
//             key5: value5
//         }
//         setting6: {
//             doge: {
//               - wow: 
//               + wow: so much
//             }
//             key: value
//           + ops: vops
//         }
//     }
//     group1: {
//       - baz: bas
//       + baz: bars
//         foo: bar
//       - nest: {
//             key: value
//         }
//       + nest: str
//     }
//   - group2: {
//         abc: 12345
//         deep: {
//             id: 45
//         }
//     }
//   + group3: {
//         deep: {
//             id: {
//                 number: 45
//             }
//         }
//         fee: 100500
//     }
// }`;
// const expectedDiffFile2File1 = `{
//   + follow: false
//     host: hexlet.io
//   + proxy: 123.234.53.22
//   - timeout: 20
//   + timeout: 50
//   - verbose: true
// }`;

// test('FileJ1 - FileJ2', () => {
//   const diff = genDiff(pathJSON1, pathJSON2);
//   expect(expectedDiffFile1File2).toEqual(diff);
// });

// // test('FileJ2 - FileJ1', () => {
// //   const diff = genDiff(pathJSON2, pathJSON1);
// //   expect(expectedDiffFile2File1).toEqual(diff);
// // });

// test('FileY1 - FileY2', () => {
//   const diff = genDiff(pathYML1, pathYML2);
//   expect(expectedDiffFile1File2).toEqual(diff);
// });

// // test('FileY2 - FileY1', () => {
// //   const diff = genDiff(pathYML2, pathYML1);
// //   expect(expectedDiffFile2File1).toEqual(diff);
// // });

// // test('FileJ1 - FileY2', () => {
// //   const diff = genDiff(pathJSON1, pathYML2);
// //   expect(expectedDiffFile1File2).toEqual(diff);
// // });

// // test('FileJ2 - FileY1', () => {
// //   const diff = genDiff(pathJSON2, pathYML1);
// //   expect(expectedDiffFile2File1).toEqual(diff);
// // });
