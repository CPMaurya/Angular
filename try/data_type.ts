// let done: boolean = false;
// let list: number[] = [1, 2, 3]; // array
let color: string = "blue";
color = 'red';
let fullName: string = 'Chandra Prakash';
let age: number = 22;
let sentence: string = "Hello, my name is "+ fullName+" and my age is  "+ age; 

// enum Color {Red, Green, Blue}
// let c: Color = Color.Green;

function data(){
          return sentence;
}
document.body.textContent = data()