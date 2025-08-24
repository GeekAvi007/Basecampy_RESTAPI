import dotenv from "dotenv"
import app from "./app.js";
import connectDB from "./db/database.js"

dotenv.config({
    path: './.env'
});


const port = process.env.PORT || 8080

connectDB()
.then(()=>{
    app.listen(port, () => {
        console.log(`App Listening at PORT: ${port}`);
        
    })
})
.catch((err) => {
    console.error("MongoDB Connection Error!", err)
    process.exit(1)
})

