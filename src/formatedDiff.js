const formattedDiff = (diff) => {
  const gendiff = diff.map(({ key, value, type }) => {
    switch (type) {
      case 'same':
        return `    ${key}: ${value}`;
      case 'minus':
        return `  - ${key}: ${value}`;
      case 'plus':
        return `  + ${key}: ${value}`;
      default:
        return '';
    }
  });
  return `{\n${gendiff.join('\n')}\n}`;
};
export default formattedDiff;
