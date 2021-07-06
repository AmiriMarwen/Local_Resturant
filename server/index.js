const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const Joi = require('joi');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")


const port = process.env.PORT || 2021 ;
const app = express()

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());


mongoose.connect("mongodb://localhost/bennaProject", { useNewUrlParser: true , useUnifiedTopology: true })
	.then(() => {
    app.listen(port , (req , res)=>{
      console.log(`App Listen to ${port} `);
    })
	});

app.use(express.json());
const routes = require("./routes")
app.use("/menu", routes);
