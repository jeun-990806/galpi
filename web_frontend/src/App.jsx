import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [image, setImage] = useState(null)
  const [result, setResult] = useState(null)

  const handleChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleUpload = async () => {
    if (!image) return
    const formData = new FormData()
    formData.append('file', image)

    try {
      const response = await axios.post('http://localhost:3000/ocr/fast', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      setResult(response.data.results)
    } catch (err) {
      console.error('OCR failed:', err)
      alert('OCR 요청에 실패했습니다.')
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>OCR 테스트</h2>
      <input type="file" accept="image/*" onChange={handleChange} />
      <button onClick={handleUpload}>OCR 요청</button>

      {result && (
        <div>
          <h3>결과</h3>
          <ul>
            {result.map((item, i) => (
              <li key={i}>
                {item.text} ({Math.round(item.confidence * 100)}%)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default App
