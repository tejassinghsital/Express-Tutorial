const express = require('express');
const PORT = 3000;
const bodyParser = require('body-parser');


app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/v1/userdata", (req, res) => {
 res.json({
  name: 'tejas',
  email: 'tejas@sample.com',
  password: 'singh'
 })
})

app.post("/api/v1/register", (req, res) => {

 const userName = req.body.name;
 const userEmail = req.body.email;
 const userPassword = req.body.password;

 res.json({
  success: true,
  name: userName,
  email: userEmail,
  password: userPassword
 })
})

app.listen(PORT, () => {
 console.log(`Server is running on ${PORT}`);
})
