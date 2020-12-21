const expres = require('express')
const route = expres.Router()
const multer = require('multer')
const path = require('path')
const fileFilter = (req, file, cb) => {

    const allwedTypes = ["image/jpeg", "image/png"]
    if (!allwedTypes.includes(file.mimetype)) {
        const error = new Error("Desteklenmeyen Dosya Türü")
        error.code = "LIMIT_FILE_TYPES"
        return cb(error, false);
    }
    cb(null, true)
}
const storage = multer.diskStorage({
    destination: 'C:/inetpub/wwwroot/Hmbrgr/assets/Upload',
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
})
const upload = multer({
    dest: './Public/Images/',
    fileFilter,
    storage: storage,
    limits: {
        fileSize: 100000000
    }
})
// @router POST  api/Category
// @desc Create a Category
// @access Public
route.post('/', upload.single('file'), (req, res) => {
    res.send(req.file)
})





module.exports = route