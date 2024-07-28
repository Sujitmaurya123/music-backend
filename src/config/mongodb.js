import mongoose from "mongoose";

// const connectDB=async()=>{
//     mongoose.connection.on('connected',()=>{
//         console.log("Connection successfully")
//     })
// await mongoose.connect(`${process.env.MONGODB_URI}/spotify`);
// }

export const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        dbName: "spotify"
    }).then(() => {
        console.log(`Connectioned to database ! `);
    }).catch((err) => {
        console.log(`Some error occured while connection to database: ${err}`);
    });
};





export default connectDB;