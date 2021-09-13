// Tanpa ORM
let query = "SELECT * FROM Students"
// psql.runQuery(query)

// ORM
Students.findAll(); // "SELECT * FROM Students"

let cities = Cities.findAll();
console.log(cities) 
// [
//   {
//     id: 1,
//     name: "Jakarta"
//   },
//   {
//     id: 2,
//     name: "Kuala Lumpur"
//   },
//   {
//     id: 3,
//     name: "Rome"
//   },
//   {
//     id: 4,
//     name: "Bandung"
//   }
// ]