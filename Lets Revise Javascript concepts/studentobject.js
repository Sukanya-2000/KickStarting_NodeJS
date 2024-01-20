//Watch video 6 as well and create a student object

const student = {
    name: "Sukanya Bhattacharyya",
    age: 23,
    grade: "A",
    courses: ["Math", "Science", "English"],
    displayInfo: function () {
      console.log(`Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}`);
    },
  };

  // Example usage of the student object
student.displayInfo();