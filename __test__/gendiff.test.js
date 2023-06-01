import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);

const __dirname = dirname(__filename);

const getPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFixtures = (filepath) => fs.readFileSync(getPath(filepath), 'utf-8');

const resultStylish = readFixtures('formatStylish.txt');
const resultPlain = readFixtures('formatPlain.txt');
const resultJson = readFixtures('formatJSON.txt');

describe('genDiff', () => {
  test.each([
    ['file1.json', 'file2.json'],
    ['file1.yml', 'file2.yml'],
    ['file1.json', 'file2.yml'],
    ['file1.yml', 'file2.json'],
  ])('%# %s, %s', (path1, path2) => {
    expect(genDiff(getPath(path1), getPath(path2))).toBe(resultStylish);
    expect(genDiff(getPath(path1), getPath(path2), 'stylish')).toBe(resultStylish);
    expect(genDiff(getPath(path1), getPath(path2), 'plain')).toBe(resultPlain);
    expect(genDiff(getPath(path1), getPath(path2), 'json')).toBe(resultJson);
  });
});
