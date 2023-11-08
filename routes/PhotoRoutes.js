const express = require("express");
const router = express.Router();

//Controller
const { insertPhoto } = require("../controllers/PhotoController");
//middlewares
const { photoInsertValidation } = require("../middleware/photoValidation");
const authGuard = require("../middleware/authGuard");
const validate = require("../middleware/handleValidation");
const { imageUpload } = require("../middleware/imageUploads");

//Routes
router.post(
  "/",
  authGuard,
  imageUpload.single("image"),
  photoInsertValidation(),
  validate,
  insertPhoto
);

module.exports = router;
