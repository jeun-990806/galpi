from modules.base_module import OCRModule
import easyocr
import numpy

class EasyOCRModule(OCRModule):
    def __init__(self):
        self.reader = easyocr.Reader(['ko', 'en'])

    def run(self, image):
        result = self.reader.readtext(numpy.array(image))
        return [
            {
                "text": text,
                "bbox": [[float(x), float(y)] for (x, y) in bbox],
                "confidence": float(conf)
            }
            for (bbox, text, conf) in result
        ]