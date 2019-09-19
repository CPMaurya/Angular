// ****** with interfaces *******
function hello3(persion) {
    return "Hello, " + persion;
}
var us = {
    firstname: "Type",
    lastname: "Script"
};
document.body.textContent = hello3(us);
// ******* interfaces with class type ******
// interface ClockInterface{
//           curretTime: Date;
// }
// class Clock implements ClockInterface {
//           curretTime: Date = new Date();
//           constructor(h:number, m:number){ }
// }
// console.log(Clock);
