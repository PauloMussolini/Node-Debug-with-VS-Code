import express from 'express';
const bodyParser = require('body-parser');
import { getProducts,addProduct} from './repositories/Productrepository';

const app = express();
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) =>{
    const products = getProducts();
    return res.json({ products });
})

app.post('/', (req, res, next) => {

    addProduct(req.query);
   res.status(200).send({
        success: true,
        code: 'Id do Produto',
        message: 'Produto criado com sucesso!',
        NomeProduto: req.query.name
    }).end();
})

app.listen(7777);