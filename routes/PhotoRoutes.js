const express = require("express");
const router = express.Router();

//Controller
const {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos,
  getPhotoById,
  updatePhoto,
  likePhoto,
} = require("../controllers/PhotoController");

//middlewares
const {
  photoInsertValidation,
  photoUpdateValidation,
} = require("../middleware/photoValidation");
const authGuard = require("../middleware/authGuard");
const validate = require("../middleware/handleValidation");
const { imageUpload } = require("../middleware/imageUploads");

//route post photo
router.post(
  "/",
  authGuard,
  imageUpload.single("image"),
  photoInsertValidation(),
  validate,
  insertPhoto
);

//route delete photo
router.delete("/:id", authGuard, deletePhoto);

//route get all photos
router.get("/", authGuard, getAllPhotos);

//route get user photos
router.get("/user/:id", authGuard, getUserPhotos);

//route get photo by id
router.get("/:id", authGuard, getPhotoById);

//route update photo
router.put("/:id", authGuard, photoUpdateValidation(), validate, updatePhoto);

//route like photo
router.put("/like/:id", authGuard, likePhoto);

module.exports = router;
