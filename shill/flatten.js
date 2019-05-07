const _ = require('lodash');
const arr1 = [99, 0, 33, [101, 102], 1, 2];
const arr2 = [1, 2, 2];
const users = [{ user: 'fred', age: 48 }, { user: 'barney', age: 36 }, { user: 'fred', age: 40 }, { user: 'barney', age: 30 }]
const sortedUser = _.sortBy(users, ['user',]);
const flattenArr1 = _.flattenDeep(arr1);
const uniqArr2 = _.uniq(arr2);
console.log(flattenArr1);
console.log(sortedUser);