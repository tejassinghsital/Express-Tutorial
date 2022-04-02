const express = require("express");
PORT = 4000;
const bodyParser = require("body-parser");
// const path = require("path");
const router = require("./UserRoutes");

//server creation
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1", router);


//now after serve listening we have to do server response to remove response error
app.get("/", (req, res) => {

 res.sendFile(__dirname + "/index.html");

});


//server listening

app.listen(PORT, () => {
 console.log(`Sever Running Success at ${PORT}`);

})

