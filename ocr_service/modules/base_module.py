from abc import ABC, abstractmethod

class OCRModule:
    @abstractmethod
    def run(self, image):
        pass