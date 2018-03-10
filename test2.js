const _ = require("lodash");

const arr_fill = _.fill(Array(4), 2);
//console.log(arr_fill);

var users = [
    { user: "barney", active: false },
    { user: "fred", active: false },
    { user: "pebbles", active: true }
];
const arr_findIndex = _.findIndex(users, o => o.user === "barney");
//console.log(arr_findIndex);

const arr_flatten = [1, [2, [3, [4]], 5]];
//console.log(_.flatten(arr_flatten));
//console.log(_.flattenDeep(arr_flatten));
//console.log(_.flattenDepth(arr_flatten, 2));

const arr_fromPairs = _.fromPairs([["fred", 30], ["tom", 60]]);
//console.log(arr_fromPairs);

const i_indexOf = _.indexOf([1, 2, 1, 2], 2, -1);
//console.log(i_indexOf);

const arr_intersection = _.intersection([1, 2], [2, 3], [2, 4]);
//console.log(arr_intersection);

const arr_nth = ["a", "b", "c", "d"];
const value_nth = _.nth(arr_nth, 2);
//console.log(value_nth);

const arr_pull_origin = [1, 2, 3, 1, 2, 3];
const arr_pull = _.pull(arr_pull_origin, 2, 3);
// console.log(arr_pull);
const arr_pullAll = _.pullAll(arr_pull_origin, [2, 3]);
//console.log(arr_pullAll);

var array_pullAllBy = [
    { x: 1, y: 4 },
    { x: 2, y: 6 },
    { x: 3, y: 9 },
    { x: 1, y: 7 }
];
const arr_pullAllBy = _.pullAllBy(array_pullAllBy, [{ x: 1, y: 4 }], "x");
//console.log(arr_pullAllBy);

let arr_pullAt_origin = [5, 10, 15, 20];
const arr_pullAt = _.pullAt(arr_pullAt_origin, 1, 3);
//console.log(arr_pullAt,arr_pullAt_origin);

let arr_remove_origin = [1, 2, 3, 4];
const arr_remove = _.remove(arr_remove_origin, v => v % 2 === 0);
// console.log(arr_remove);

const arr_reverse_origin = [1, 2, 3, 5];
const arr_reverse = _.reverse(arr_reverse_origin);
//console.log(arr_reverse);

const arr_sortedUniq_arigin = [1, 2, 2, 3, 3, 3];
const arr_sortedUniq = _.sortedUniq(arr_sortedUniq_arigin);
console.log(arr_sortedUniq);
 