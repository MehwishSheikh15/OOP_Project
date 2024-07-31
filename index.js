import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const person = new Person();
const programStart = async (person) => {
    do {
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices: ["Staff", "Student", "Exit"]
        });
        if (ans.select == "Staff") {
            console.log("Welcome!");
            console.log("You approach the staff room.Please feel free to ask any question");
        }
        if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                name: "Student",
                type: "input",
                message: "Enter a Student name you wish to engage with:?",
            });
            const student = person.students.find(val => val.name == ans.Student);
            if (!student) {
                const name = new Student(ans.Student);
                person.addStudent(name);
                console.log(`Hello I am ${name.name}!Nice to meet you!`);
                console.log("New Student Added");
                console.log("Current Student List:");
                console.log(person.students);
            }
            else {
                console.log(`Hello I am ${student.name} Nice to see you again!`);
                console.log("Existing Student List");
                console.log(person.students);
            }
        }
        else if (ans.select == "Exit") {
            console.log("GoodBye!");
            process.exit();
        }
    } while (true);
};
programStart(person);
