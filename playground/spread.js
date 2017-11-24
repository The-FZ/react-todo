// function add(a,b){
//   return a+b;
// }
//
// console.log(add(3,1));
// var toadd =[9,5];
//
// console.log(add(...toadd));
//
// var groupA = ['jen','cory'];
// var groupB = ['Vikram'];
//
// var final = [...groupA,...groupB];
//
// console.log(final);


var person = ['ANdrew',25];
var p2 = ['Jen',29];

function msg(name,age){
  console.log('Hello '+name +' , you are '+age);
}

msg(...person);
msg(...p2);

var names =['mike','ben'];
var final = ['Zak'];

final = [...names,...final];
final.forEach(function(item){
  console.log(item);
});
