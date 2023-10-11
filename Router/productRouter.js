const router=require('express').Router();
const productController=require('../controller/productController');

router.post('/createproduct',productController.ProductCreateController);
router.get('/getproducts',productController.getAllProductController);

module.exports=router