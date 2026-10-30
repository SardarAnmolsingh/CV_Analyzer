const multer = require("multer")

const uploade = multer({
    storage: multer.memoryStorage(),

    limits: {
        filesize: 3 * 1024 * 1024   //3MB 
    }
})

module.exports = uploade