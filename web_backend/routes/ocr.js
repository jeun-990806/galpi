const express = require('express');
const router = express.Router();
const multer = require('multer');
const ocrController = require('../controllers/ocr_controller');

const upload = multer({ dest: 'uploads/' });

router.post('/fast', upload.single('file'), ocrController.handleFastOCR);

module.exports = router;
