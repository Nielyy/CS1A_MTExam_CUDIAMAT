// Collect user information using prompt()
let studentName = prompt("Enter your name:"); // Get the student's name
let subjectTitle = prompt("Enter the subject title:"); // Get the subject title
let classSchedule = prompt("Enter the class schedule (Time, Days):"); // Get the class schedule
let classroom = prompt("Enter the classroom:"); // Get the classroom
let classInstructor = prompt("Enter the class instructor:"); // Get the class instructor

// Log the formatted information to the console
console.log(`${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at room ${classroom}. The instructor for the subject is ${classInstructor}.`);