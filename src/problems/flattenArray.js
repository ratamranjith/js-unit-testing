let flattenArray = arr => arr.map(value => Array.isArray(value) ? flattenArray(value) : value).reduce((a, b) => a.concat(b), []);
export default flattenArray;