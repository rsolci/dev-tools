import React, {useState} from 'react'
import QRCode from 'qrcode'

const generateDataUrl = async text => {
  return await QRCode.toDataURL(text)
}

const QrGeneration = () => {
  const [textToEncode, setTextToEncode] = useState('')
  const [imageData, setImageData] = useState('')

  const generate = async () => {
    const dataUrl = await generateDataUrl(textToEncode)
    console.log(dataUrl)
    setImageData(dataUrl)
  }

  return (
    <div>
      Qr Generation
      <input type='text' onChange={(e) => setTextToEncode(e.target.value)} />
      <button onClick={generate}>Generate</button>
      <img src={imageData} alt={`QR Image for ${textToEncode}`} />
      <p>
        The word "QR Code" is registered trademark of:
        DENSO WAVE INCORPORATED
      </p>
    </div>
  )
}

export default QrGeneration