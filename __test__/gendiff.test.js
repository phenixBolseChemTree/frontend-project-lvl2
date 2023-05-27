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

test('1 default', () => {
  expect(genDiff(getPath('file1.json'), getPath('file2.json'))).toBe(resultStylish);
  expect(genDiff(getPath('file1.yml'), getPath('file2.yml'))).toBe(resultStylish);
});

test('2 stylish', () => {
  expect(genDiff(getPath('file1.json'), getPath('file2.json'), 'stylish')).toBe(resultStylish);
  expect(genDiff(getPath('file1.yml'), getPath('file2.yml'), 'stylish')).toBe(resultStylish);
});

test('3 plain', () => {
  expect(genDiff(getPath('file1.json'), getPath('file2.json'), 'plain')).toBe(resultPlain);
  expect(genDiff(getPath('file1.yml'), getPath('file2.yml'), 'plain')).toBe(resultPlain);
});

test('4 json', () => {
  expect(genDiff(getPath('file1.json'), getPath('file2.json'), 'json')).toBe(resultJson);
  expect(genDiff(getPath('file1.yml'), getPath('file2.yml'), 'json')).toBe(resultJson);
});

test('5 other types', () => {
  expect(genDiff(getPath('file1.json'), getPath('file2.yml'), 'json')).toBe(resultJson);
  expect(genDiff(getPath('file1.yml'), getPath('file2.json'), 'json')).toBe(resultJson);
});
