### Hexlet tests and linter status:
[![Actions Status](https://github.com/phenixBolseChemTree/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/phenixBolseChemTree/frontend-project-lvl2/actions)

[![Node CI](https://github.com/phenixBolseChemTree/frontend-project-lvl2/actions/workflows/node.js.yml/badge.svg)](https://github.com/phenixBolseChemTree/frontend-project-lvl2/actions/workflows/node.js.yml)

[![Maintainability](https://api.codeclimate.com/v1/badges/e751996640618d33ffcb/maintainability)](https://codeclimate.com/github/phenixBolseChemTree/frontend-project-lvl2/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/e751996640618d33ffcb/test_coverage)](https://codeclimate.com/github/phenixBolseChemTree/frontend-project-lvl2/test_coverage)

## CLI консольное приложение "Вычислитель отличий" принимающее 2 пути до файлов и выводящая в терминал diff их отличий.

## После установки выполните в терминале команду make install (она установит все необходимые зависимости в вашем проекте)

## Для ознакомления вы можете вбить терминал gendiff -h. Этот флаг выведет в терминал справку об приложении и о его прочих флагах таких как --versin и --format
### Поддерживает разрешиния файлов: json, yml, yaml.

## Инструкция использования.

## Для использования пакета водите в терминал gendiff и 2 абсолютных или относительных путя до файлов. Ниже предоставленны примеры использования данного консольного приложения.

### Без флагов, сравнение файлов json
```
gendiff __fixtures__/file1.json __fixtures__/file2.yaml
```
[![asciicast](https://asciinema.org/a/585916.svg)](https://asciinema.org/a/585916)

### Без флагов, сравнение файлов yml
```
gendiff __fixtures__/file1.yml __fixtures__/file2.yml
```
[![asciicast](https://asciinema.org/a/586694.svg)](https://asciinema.org/a/586694)

## Вызовы с флагом формата
```
gendiff --format <FORMAT> __fixtures__/file1.json __fixtures__/file2.yaml
```

###  plain
[![asciicast](https://asciinema.org/a/586694.svg)](https://asciinema.org/a/587786)

### stylish
[![asciicast](https://asciinema.org/a/586694.svg)](https://asciinema.org/a/587789)

### json
[![asciicast](https://asciinema.org/a/586694.svg)](https://asciinema.org/a/587788)
