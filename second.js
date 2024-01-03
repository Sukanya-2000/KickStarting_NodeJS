// Arrow function to calculate the product of two numbers
const multiply = (num1, num2) => num1 * num2;

// Student object
const student = {
  name: "Sukanya Bhattacharyya",
  age: 23,
  grade: "A",
  courses: ["Math", "Science", "English"],
  displayInfo: function () {
    console.log(`Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}`);
  },
};

// Example usage of the arrow function
const result = multiply(5, 7);
console.log(`Product of 5 and 7 is: ${result}`);

// Example usage of the student object
student.displayInfo();
