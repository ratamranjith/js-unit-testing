import { v4, parse } from 'uuid';
import { v7, validate, version } from 'uuid';
let val = v7();
console.log(val);
console.log(parse(val));
console.log(version(val));
