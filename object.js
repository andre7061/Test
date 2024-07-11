// Object
"use strict";

function Student(name, gender, age) {
    (this.name = name), (this.gender = gender), (this.age = age),this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName
  }

Student.prototype.addMarks = function (...rest){
    if(this.marks){
        this.marks.push(...rest)
    }
}

Student.prototype.exclude =function(reason){
    this.excluded = reason
    delete this.marks
    delete this.subject
}

  let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
student1.addMarks(4, 5, 4, 5);
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
console.log(student1)
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}