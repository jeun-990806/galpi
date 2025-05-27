const ocrService = require('../services/ocr_service');
const fs = require('fs');

exports.handleFastOCR = async (req, res) => {
  try {
    const filePath = req.file.path;
    const result = await ocrService.callFastOCR(filePath);
    fs.unlinkSync(filePath); // 임시 파일 삭제
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'OCR failed', details: err.message });
  }
};
