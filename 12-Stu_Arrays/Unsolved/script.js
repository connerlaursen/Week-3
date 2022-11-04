// WRITE YOUR CODE HERE
var studentNames=["Conner", "Conner2", "Conner3", "Conner4"];
console.log(studentNames.length);

console.log("welcome to the class " + studentNames [0]);
console.log("welcome to the class " + studentNames [1]);
console.log("welcome to the class " + studentNames [2]);
console.log("welcome to the class " + studentNames [3]);

studentNames[0] = "replaced_name";

if (studentNames[0] != "Conner") {
    console.log(studentNames[0] + " is in class");
  } 
 
  