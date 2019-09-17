// ******* with classes ********
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function fun(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var arg = new Student("Angular", "TypeScript");
document.body.textContent = fun(arg);
