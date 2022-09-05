// import express
import express from "express";
// import cors
import cors from "cors";
 
// const bodyParser = require('body-parser');
import bodyParser from "body-parser";"body-parser"

// import routes
import router from "./routes/routes.js";
  

// flexible Port for production and local development
const PORT = process.env.PORT || 5000;

// init express
const app = express();
  
// use express json
app.use(express.json());
  
// use cors
app.use(cors());
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
// use router
// app.use(router);
// forward api requests to Router
app.use('/api', router)  

// app.get('/', function (req, res) {
//     res.send('hello world')
//   })  

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));