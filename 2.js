// 2. Basic data types

// There are 6 or 7 of them - depends how you look at null
// and you can check them using typeof

// undefined is undefined - it is not nothing because for something to be nothing it needs to be defined - undefined is undefined

// "let" keyword is used to declare variables
// "const" keyword on the other hand is used to declare constants
// and the syntax is
// first the keyword, then the name of the variable/constant, then "=", then the value.
let _undefined = undefined;

// typeof can help you check what data type your variable is
typeof _undefined === "undefined";

// boolean is only either true or false
let _boolean = true;
_boolean = false;
typeof _boolean === "boolean";

// number is a number but only between -(2^53 − 1) and (2^53 − 1)
let _number = 1;
_number = 39;
typeof _number === "number";

// for numbers outside of the range -(2^53 − 1) and (2^53 − 1) we use bigint
let _bigint = 2 ** 53;
// in js ** is responsible for exponentiation (power)
typeof _bigint === "bigint";

// symbols but we wont explain them in this course
let _Symbol = Symbol("Sym");
typeof _Symbol === "symbol";

// null will be explained in the next section
