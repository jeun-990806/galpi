const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

exports.callFastOCR = async (filePath) => {
  const form = new FormData();
  form.append('file', fs.createReadStream(filePath));

  const response = await axios.post(process.env.OCR_API, form, {
    headers: form.getHeaders()
  });

  return response.data;
};
