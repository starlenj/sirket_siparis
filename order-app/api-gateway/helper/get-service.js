const { default: axios } = require("axios");
const log4js = require("log4js");
module.exports ={  

	 async parseService(serviceName){

	switch(serviceName){
	case "category" :
		return process.env.category_url;
		break;
	case "product" :
		return process.env.product_url;
		break;
	case "user" :
		return process.env.user_url;
		break;
	case "customer" :
		return process.env.customer_url;
		break;
	case "option" :
		return process.env.option_url;
		break;
	case "order" :
		return process.env.order_url;
		break;
	case "sube" :
		return process.env.sube_url;
		break;
	default :
		return 'hatali';
	}

},
	async callService(url,method,params,service){
		try {
			
		switch(method){
		case "post":
		return await axios.post(`${url}/${service}`,params); 
		case "get":
		return await axios.get(`${url}/${service}`); 
		case "put":
		return await axios.put(`${url}/${service}/${params.id}`,params); 
		case "delete":
		return await axios.delete(`${url}/${service}/${params.id}`); 
		default : 
			return 'hatali';
		}
		} catch (error) {
			return error;
		}
	},
	async loggerInfo(method,name,url,params,type,error){
		const logger = log4js.getLogger(name);
		switch(type){
			case "info":
		logger.info(`Method = ${method} Service Name = ${name} Service Url = ${url} Service Param = ${JSON.stringify(params)}`)
		console.info(`Method = ${method} Service Name = ${name} Service Url = ${url} Service Param = ${JSON.stringify(params)}`)
			break;
		case "error":
		logger.error(`Method = ${method} Service Name = ${name} Service Url = ${url} Service Param = ${JSON.stringify(params)} Error = ${JSON.stringify(error)}`)
		console.error(`Method = ${method} Service Name = ${name} Service Url = ${url} Service Param = ${JSON.stringify(params)} Error = ${JSON.stringify(error)}`)
		}
		
	}
}
