var _a, _b, _c, _d, _e;
var foo = ['one', 'two', 'three'];
var red = foo[0], green = foo[1], blue = foo[2];
console.log(red);
console.log(green);
console.log(blue);
// default value
var a, b;
_a = [1], _b = _a[0], a = _b === void 0 ? 5 : _b, _c = _a[1], b = _c === void 0 ? 7 : _c;
console.log(a);
console.log(b);
// return an array from a function
function array_return() {
    return [1, 2];
}
var a, b;
_d = array_return(), a = _d[0], b = _d[1];
console.log(a);
console.log(b);
// Ignoring some returned values
function array_ignore() {
    return [1, 2, 3];
}
var a, b;
_e = array_ignore(), a = _e[0], b = _e[2];
console.log(a);
console.log(b);
// Assigning the rest of an array to a variable
var _f = [1, 2, 3], c = _f[0], d = _f.slice(1);
console.log(c);
console.log(d);
