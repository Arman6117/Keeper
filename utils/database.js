import mongoose from "mongoose";

let isConnected = false;

export const connectDb = async () => {
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log('MongoDB already Connected');
        return;
    }else{
        try {
            await mongoose.connect(process.env.MONGODB_URL,{
                dbName:'Keeper',
                useNewUrlParser:true,
                useUnifiedTopology:true
            })
            isConnected = true;
            console.log('Connected Successfully To MongoDB');
        } catch (error) {
            console.log(error.message);
        }
    }
};
