var foo = ['one', 'two', 'three'];
var [red, green, blue] = foo
console.log(red);
console.log(green);
console.log(blue);

// default value
var a, b;
[a=5, b=7] = [1];
console.log(a);
console.log(b);

// return an array from a function
function array_return(){
          return [1,2];
}
var a, b;
[a, b] = array_return();
console.log(a);
console.log(b);

// Ignoring some returned values
function array_ignore(){
          return [1,2,3];
}
var a, b;
[a, , b] = array_ignore();
console.log(a);
console.log(b);

// Assigning the rest of an array to a variable
var [c, ...d] = [1, 2, 3]
console.log(c);
console.log(d);
