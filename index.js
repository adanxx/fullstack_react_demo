const express = require('express');

const app = express();

app.get('/',(req, res)=>{
   res.send({Message: 'Express is up and running'});
   console.log('Inside: get/Home - ')
})











const PORT = process.env.PORT || 5000;
app.listen(PORT);