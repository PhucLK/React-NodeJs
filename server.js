const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Connection = require('./DB/Connection');
//const router = require('./routers/router');
const router = express.Router();
const Product = require('./models/product')

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen( 3002, () =>{
    console.log('listening port 3002')
})

router.get('/products', async (req,res) =>{
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.json(error);
    }
})


router.post('/add', async (req,res) =>{
    console.log(req.body.name);
    
    const product = new Product ({
        name : req.body.name,
        price : req.body.price,
    });
    await product.save().then(data => {
        res.json(data);
    })
    .catch(err =>{
        res.send(err)
    })
})

router.get('/products/:id', async (req,res) =>{
    console.log(req.params.id);
    
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.send(err)
    }
    
})

router.delete('/products/:id', async (req,res) =>{
    console.log(req.params.id);
    
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.send('delete successfully !');
    } catch (error) {
        res.send(err)
    }
    
})



router.put('/products/:id', async (req,res) =>{
    console.log(req.params.id);
    
    try {
        const product = await Product.findByIdAndUpdate({
            _id: req.params.id
        },{
            name : req.body.name,
            price : req.body.price
        });
        res.json(product);
    } catch (error) {
        res.send(err)
    }
    
})



