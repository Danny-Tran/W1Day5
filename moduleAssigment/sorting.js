module.exports = a;

// var students = [
//   { id: 1, name: "bruce",    age: 40 },
//   { id: 2, name: "zoidberg", age: 22 },
//   { id: 3, name: "alex",     age: 22 },
//   { id: 4, name: "alex",     age: 30 }
// ];

// var a = students.sort(function(a,b){
//    return a.name > b.name;
//   })


//   console.log(students)

var num = [12,414,14,1421536,2434647,12,3434,2334];

var a = num.sort(function sort(a,b){
  return a - b
});
console.log(a);
