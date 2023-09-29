const mysql = require("./config/database/querywrapperMysql")
const Express = require("express")
const app = Express()

app.get('/',async(req, res)=>{
    try {
        // Query the database to fetch some data (replace with your actual query)
        const query = "SELECT * FROM users";
        const result = await mysql.execute(query);

        // Send the database result as a response
        res.json(result);
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: "Database error" });
    }
})

app.listen(5000,()=>{
    console.log("listening to port 5000")
})