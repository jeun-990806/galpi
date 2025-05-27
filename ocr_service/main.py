from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
from PIL import Image
from modules.EasyOCR_module import EasyOCRModule

app = FastAPI()
fast_ocr = EasyOCRModule()

@app.post("/ocr/fast")
async def ocr_fast(file: UploadFile = File(...)):
    image = Image.open(file.file)
    results = fast_ocr.run(image)
    return JSONResponse(content={"results": results})
