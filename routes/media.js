const router = require("express").Router();
const multer = require("multer");
var fs = require('fs');

/** Storage Engine */
const storage = multer.diskStorage({
  destination: function(req, file, fn) {
    fn(null, "./public/video");
  },
  filename: function(req, file, fn) {
    fn(null, new Date().getTime().toString() + "-" + file.originalname);
  }
});
const fileFilter = function(req, file, callback) {
  if (file.mimetype === "video/x-flv" || file.mimetype === "video/mp4" || file.mimetype === "video/x-ms-wmv" || file.mimetype === "video/x-msvideo") {
    callback(null, true);
  } else {
    callback(null, false);
  }
};
const upload = multer({
  storage: storage,
  limit: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});
/*Image Upload code complete*/

router.get("/", async (req, res) => {
  var path = "./public/video";
  fs.readdir(path, function(err, items) {
    var video = [];
     for (var i=0; i<items.length; i++) {
          video[i] = items[i];
      }
      res.send(video)
  });
});


router.post("/", upload.single("blogVideo"), async (req, res) => {
  console.log("Video Uploaded");
});

module.exports = router;
