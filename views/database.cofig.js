const mongoose=require('mongoose');

function connectToMongoDB(){
    const DataURI= process.env.Node_environment === "development" ? "mongodb://localhost:27017/Datas" :
 `mongodb+srv://${process.env.mONGODB__nAME}:${process.env.mONGODB__pASSWORD}@sam.ltzmszw.mongodb.net/`;

    mongoose.connect(DataURI)
    .then((response)=>{
        console.log("Database cottection successfully");
    })
    .catch((error)=>{
        console.log(error)});
}

module.exports=connectToMongoDB;