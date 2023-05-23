import genDiff from '../src/genDiff.js';

const pathJSON1 = './__fixtures__/file1.json';
const pathJSON2 = './__fixtures__/file2.json';
const pathYML1 = './__fixtures__/file1.yml';
const pathYML2 = './__fixtures__/file2.yml';

const expectedDiffFile1File2 = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
const expectedDiffFile2File1 = `{
  + follow: false
    host: hexlet.io
  + proxy: 123.234.53.22
  - timeout: 20
  + timeout: 50
  - verbose: true
}`;

test('FileJ1 - FileJ2', () => {
  const diff = genDiff(pathJSON1, pathJSON2);
  expect(expectedDiffFile1File2).toEqual(diff);
});

test('FileJ2 - FileJ1', () => {
  const diff = genDiff(pathJSON2, pathJSON1);
  expect(expectedDiffFile2File1).toEqual(diff);
});

test('FileY1 - FileY2', () => {
  const diff = genDiff(pathYML1, pathYML2);
  expect(expectedDiffFile1File2).toEqual(diff);
});

test('FileY2 - FileY1', () => {
  const diff = genDiff(pathYML2, pathYML1);
  expect(expectedDiffFile2File1).toEqual(diff);
});

test('FileJ1 - FileY2', () => {
  const diff = genDiff(pathJSON1, pathYML2);
  expect(expectedDiffFile1File2).toEqual(diff);
});

test('FileJ2 - FileY1', () => {
  const diff = genDiff(pathJSON2, pathYML1);
  expect(expectedDiffFile2File1).toEqual(diff);
});
