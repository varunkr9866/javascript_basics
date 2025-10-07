let a = prompt("Hey whats you age?");
a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  alert("This is an invalid age");
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done")
// HomeWork - Explore switch statement and write a basic program in the comments
// let age = 16;
// switch (age) {
//   case 16:
//     console.log('No entry');
    
//     break;

//   default:
//     console.log('Welcome');
//     break;
// }
//trinary operator
console.log("you can" ,a <18?"not drive":"drive");