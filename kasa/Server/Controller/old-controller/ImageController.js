const multer = require('multer')
let storage =  multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "./Public/Images");
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});
const  upload =  multer({
    storage: storage
}).single('file1')

module.exports={


    async ImageUpload(req,res){

        console.log(req)
        try {
          
            console.log(req.file)

            upload(req,res,(err)=>{
                    if(err)
                    {
                        console.log(err)
                    }else{
                        console.log(req.file)
                    }
            })
        
          //  response.handleReponse(req, res, resp, 'Notification:Create')
        } catch (error) {
         //   response.handleError(req, res, error, 'Create', 'Notification')
        }
        finally{

        }


      
    }
}