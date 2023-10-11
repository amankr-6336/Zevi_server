const Product=require('../Model/Products');
const cloudinary=require('cloudinary').v2;



const ProductCreateController=async(req,res)=>{
    try {
        
        const{gender,category,style,styleimg,name,description,color,brand,mrp,price,image,rating,ratingcount}=req.body;

        const cloudImg=await cloudinary.uploader.upload(image,{
            folder:"product"
        })

        const cloudImg1=await cloudinary.uploader.upload(styleimg,{
            folder:"product"
        })

        const product=await Product.create({
           gender,
           category,
           style,
           styleimg:{
            publicId:cloudImg1.public_id,
            url:cloudImg1.url
           },
           name,
           description,
           color,
           brand,
           mrp,
           price,
           image:{
            publicId:cloudImg.public_id,
            url:cloudImg.url
           },
           rating,
           ratingcount
        })

        return res.status(200).send({product});


    } catch (error) {
        console.log(error);
    }
}

const getAllProductController=async(req,res)=>{
    try {
        const products=await Product.find();
        return res.status(200).send({products});
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    getAllProductController,
    ProductCreateController

}
