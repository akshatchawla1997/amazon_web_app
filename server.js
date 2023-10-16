// // app.get('/',async(req, res)=>{
// //     try {
// //         // Query the database to fetch some data (replace with your actual query)
// //         const query = "SELECT * FROM users";
// //         const result = await mysql.execute(query);

// //         // Send the database result as a response
// //         res.json(result);
// //     } catch (error) {
// //         console.error("Database error:", error);
// //         res.status(500).json({ error: "Database error" });
// //     }
// // })



const Express = require("express");
const app = Express();
const publicRoute = require('./routes/publicRoute');

app.use(publicRoute);


// Define the root route at the end
app.get('/', (request, response) => {
  response.json({
    message: 'Works',
  });
});

app.listen(5000, () => {
    console.log("listening to port 5000");
});
