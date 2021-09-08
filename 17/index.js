const express = require('express');
const app = express();

// disini memerlukan package ejs "npm install ejs"
app.set("view engine", "ejs")
// app.set("view engine", "html")

const port = 3000;
const router = require("./routes/index");

app.use('/', router)

// app.get('/', (req,res) => {
//     // console.log("req.url", req.url)
//     // console.log("req.headers", req.headers)
//     // let obj = {
//     //   firstName: "Josh",
//     //   lastName: "don"
//     // }
//     // res.json(obj);
//     // res.render("index"); // nama file di folder views
//     res.render("helloworld"); // nama file di folder views, dengan extension .ejs
// })


let products = ["Apple", "Redmi", "One Plus One"];
let orders = [
  {
    id: 1,
    paid: false,
    user: 1
  },
  {
    id: 2,
    paid: false,
    user: 1
  }
]

// endpoint "/product, mengembalikan/mereturn/meresponse data product"
// app.get('/products', (req, res) => {
//   res.render("products", { products });
// });

// endpoint "/order, mengembalikan/mereturn/meresponse data order"
app.get('/orders', (req, res) => {
    res.json(orders)
});

// error handling untuk page/route not found
app.get('*', function(req, res){
  res.status(404).send('not found');
});

app.listen(port, () => {console.log(`example listening in port ${port}`)})

// app.post('createProuct', function(req, res){
  // req.body = {
  //   productName: "Sabun",
  //   price: "5000",
  // }
  // ModelProduct.create(req.body, function (req, res) {
  //   res.json({ "message": "product has been created"})
  // })

  // ModelProduct.create(req.body)
  //   .then((req, res) => {
  //     res.json({ "message": "product has been created"})
  //   })

  // let product = await ModelProduct.create(req.body)
  // res.json(product)
// });