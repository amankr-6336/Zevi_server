const mongoose=require('mongoose');

module.exports=async()=>{
   const mongouri=`mongodb+srv://amanuserk:Callofduty@cluster0.1exmj6a.mongodb.net/?retryWrites=true&w=majority`

   try {
       const connect=await mongoose.connect(mongouri,{
           useUnifiedTopology:true,
           useNewUrlParser:true
       });

       console.log(`mongodb connected : ${connect.connection.host}`);
   } catch (error) {
       console.log(error);
       process.exit(1);
   }
}