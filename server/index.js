const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const port = process.env.PORT || 2021 ;
const app = express();



app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());

app.get('/', (req, res) => {
  res.json({res : "Hello from vue app" });
});


app.listen(port , (req , res)=>{
  console.log(`listen to ${port} `);
})
