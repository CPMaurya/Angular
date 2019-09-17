// ******* with classes ********

class Student {
          fullName: string;
          constructor(public firstName: string, public lastName: string) {
              this.fullName = firstName + " " + lastName;
          }
      }     
interface Person {
          firstName: string;
          lastName: string;
}    
function fun(person: Person) {
          return "Hello, " + person.firstName + " " + person.lastName;
      }
let arg = new Student("Angular", "TypeScript");
document.body.textContent = fun(arg);