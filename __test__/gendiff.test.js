import genDiff from '../src/genDiff.js';

const filepath1 = './files/file1.json';
const filepath2 = './files/file2.json';
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
const expectedDiffOnlyFile1 = `{
    follow: false
    host: hexlet.io
    proxy: 123.234.53.22
    timeout: 50
}`;
const expectedDiffOnlyFile2 = `{
    host: hexlet.io
    timeout: 20
    verbose: true
}`;

test('testFile1WithFile2', () => {
  const diff = genDiff(filepath1, filepath2);
  expect(expectedDiffFile1File2).toEqual(diff);
});

test('testFile2WithFile1', () => {
  const diff = genDiff(filepath2, filepath1);
  expect(expectedDiffFile2File1).toEqual(diff);
});

test('testFile1WithFile1', () => {
  const diff = genDiff(filepath1, filepath1);
  expect(expectedDiffOnlyFile1).toEqual(diff);
});

test('testFile2WithFile2', () => {
  const diff = genDiff(filepath2, filepath2);
  expect(expectedDiffOnlyFile2).toEqual(diff);
});
