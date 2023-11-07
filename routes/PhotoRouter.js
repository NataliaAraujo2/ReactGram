const express = require("express");
const router = express.Router();

//Controller

//middlewares
const { photoInsertValidation } = require("../middleware/photoValidation");
const  authGuard  = require("../middleware/authGuard");
const  validate  = require("../middleware/handleValidation");

//Routes

module.exports = router;
