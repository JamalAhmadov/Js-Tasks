//                                          Task 1

// aletrden imput aliriq

// const a = prompt("a dəyərini daxil edin: ");
// const b = prompt("b dəyərini daxil edin: ");

// if (a > b) {
//     alert("a b-dən böyükdür");
// } else if (a == b) {
//     alert("a və b bərabərdir");
// } else {
//     alert("a b-dən kiçikdir");
// }

//                                          ARRAY OF STUDENTS
let students = [
  { id: 1, name: "Ali", surname: "Alisoy", age: 20, grade: 95 },

  { id: 2, name: "Vusala", surname: "Nabiyeva", age: 34, grade: 77 },

  { id: 3, name: "Aliya", surname: "Gurbanzade", age: 14, grade: 98 },

  { id: 4, name: "Sabir", surname: "Nuruyev", age: 15, grade: 54 },

  { id: 5, name: "Mehman", surname: "Heydarov", age: 22, grade: 100 },

  { id: 6, name: "Sevana", surname: "Mammadli", age: 41, grade: 35 },

  { id: 7, name: "Ilham", surname: "Babayev", age: 24, grade: 95 },

  { id: 8, name: "Namiq", surname: "Gulahmedov", age: 20, grade: 95 },

  { id: 9, name: "Aygun", surname: "Kazimova", age: 24, grade: 100 },
];

//                                          Task 2


//     let cuntIndexliStudents = [];

// for (let i = 0; i < students.length; i += 2) {
//     cuntIndexliStudents.push(students[i]);
// }
// console.log(cuntIndexliStudents);

//                                          Task 3

// for (let i = 0; i < students.length; i++) {
//     if (students[i].id % 2 === 1) {
//         console.log(students[i].name);
//     }
// }


//                                          Task 4

// let yasi20denBoyukTelebeler = [];

// for (let i = 0; i < students.length; i++) {
//     if (students[i].age >= 20) {
//         yasi20denBoyukTelebeler.push(students[i]);
//     }
// }
// console.log(yasi20denBoyukTelebeler);

//                                           Task 5

// let  secilenTelebeler= [];

// for (let i = 0; i < students.length; i++) {
//     if (students[i].id % 2 === 0 && students[i].grade >= 90) {
//         secilenTelebeler.push(students[i]);
//     }
// }

// console.log(secilenTelebeler);


//                                           Task 6

// let oxuyanTelebeler = [];

// for (let i = 0; i < students.length; i++) {
//     if (students[i].grade == 100 || students[i].grade == 95) {
//         oxuyanTelebeler.push(students[i].name);
//     }
// }
// console.log(oxuyanTelebeler);
