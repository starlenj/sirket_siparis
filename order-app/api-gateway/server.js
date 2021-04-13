const bodyParser = require('body-parser');
const express = require('express');
const { parseService,callService,loggerInfo } = require('./helper/get-service');
const app = express();
require('dotenv').config();
const log4js = require("log4js");
log4js.configure({
  appenders: {
  everything: { type: 'dateFile', filename: './logs/api.log' }
},
   categories: {
     default: { appenders: [ 'everything' ], level: 'debug' }
   }
});


app.use(bodyParser.json());
app.post("/",async(req,res)=>{
	const {serviceMethod,serviceName,serviceUrl,serviceParams} = req.body;
	try {
	let getUrl = await parseService(serviceName);
  const response = await callService(getUrl,serviceMethod,serviceParams,serviceUrl);
  loggerInfo(serviceMethod,serviceName,serviceUrl,serviceParams,"info");
		if(response.data){
			res.send(response.data);
		}else{
				if(response.name==="Error"){
					console.log(response.data.message);
  loggerInfo(serviceMethod,serviceName,serviceUrl,serviceParams,"error",response.message);
			res.status(400).send({success:false,message:response.name});
			}
		}
	} catch (error) {
  loggerInfo(serviceMethod,serviceName,serviceUrl,serviceParams,"error",error);
		res.status(400).send({success:false,message : "Error"});
	}
});
app.listen(process.env.PORT,()=>{
	loggerInfo("Server Started",`Server Started ${process.env.port}`,"/",null);
	console.log(`App Started ${process.env.PORT}`);
});

