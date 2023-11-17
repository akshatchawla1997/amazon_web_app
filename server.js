const Express = require("express");
const app = Express();
const publicRoute = require('./routes/publicRoute');
app.use(Express.json());
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
