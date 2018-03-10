const _ = require("lodash");

const arr = ["a", "b", "c", "d"];
const arr2 = _.chunk(arr, 3);
// console.log(arr2);

const arr_compact = _.compact([0, 1, false, 2, "", 3]);
//console.log(arr_compact);

const arr_concat = _.concat([1], 2, [3], [[4]]);
//console.log(arr_concat);

const arr_difference = _.difference([1, 2, 3, 4], [2, 3, 5]);
//console.log(arr_difference);

const arr_differenceBy = _.differenceBy(
    [3.1, 2.4, 5.6],
    [2.6, 7.2],
    Math.floor
);
//console.log(arr_differenceBy);

const arr_differenceBy2 = _.differenceBy([{ x: 1 }, { x: 2 }], [{ x: 2 }], "x");
//console.log(arr_differenceBy2);

const arr_differenceWith_first = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
const arr_differenceWith = _.differenceWith(arr_differenceWith_first, [{ 'x': 1, 'y': 2 }], _.isEqual)
//console.log(arr_differenceWith);

const arr_drop = _.drop([1, 2, 3], 2);
//console.log(arr_drop);


var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];
   
  const arr_dropRightWhile = _.dropRightWhile(users, function(o) { return !o.active; });

  console.log(arr_dropRightWhile);
  