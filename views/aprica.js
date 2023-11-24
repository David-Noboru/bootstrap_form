const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/products', (req, res) => {
  const { productName, supplierName, purchaseDate, purchaseValue, saleValue, category } = req.body;
  
  res.render('products', {
    productName,
    supplierName,
    purchaseDate,
    purchaseValue,
    saleValue,
    category
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
