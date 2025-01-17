import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://ms5392363:ms5392363@cluster0.n99eg.mongodb.net/Protfolio-Projects");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        process.on('SIGINT', async () => {
            await conn.close();
            process.exit(0);
        });
    } catch (err) {
        console.error("---------------unable to connect with DataBase---------------")
        console.error(err);
        process.exit(1);
    }
}
export default connectDB;