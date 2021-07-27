// 3. Structural data types - complex ones

// there are only one or two but there are actually many

// there are objects
typeof Object === "object";

// and there is null - which is a lack of object
typeof null === "object";

// the object can be a few things
// and all objects can be created using "new" keyword
// it can be an Object called Dictionary

let dict = new Object();

// it can be an Array

let arr = new Array();

// it can be a Date

let date = new Date();

// and it can be also a Map, Set, WeakMap, WeakSet and many many more but we wont explain them in this course

// the last type is a function
// theoretically it is not a data structure but typeof does work on it so we will show it as well
let _function = function () {};
typeof _function === "function";
