import React, {useState, useCallback } from 'react'

import debounce from 'lodash/debounce'
import QRCode from 'qrcode'

import { Button } from 'components/buttons'
import { TextInput } from 'components/inputs'

const generateDataUrl = async text => {
  if (!text) return '';
  return await QRCode.toDataURL(text)
}
const QrGeneration = () => {
  const [textToEncode, setTextToEncode] = useState('')
  const [imageData, setImageData] = useState('')

  const delayedGenerate = useCallback(debounce(async text => {
    setImageData(await generateDataUrl(text))
  }, 200), [])

  const instantGenerate = async () => {
    setImageData(await delayedGenerate(textToEncode))
  }

  const inputChanged = async (event) => {
    setTextToEncode(event.target.value)
    delayedGenerate(event.target.value)
  }

  return (
    <div>
      Qr Generation
      <TextInput onChange={inputChanged} value={textToEncode} />
      <Button onClick={instantGenerate}>Generate</Button>
      {imageData && <img src={imageData} alt={`QR for ${textToEncode}`} />}
      <p>
        The word "QR Code" is registered trademark of:
        DENSO WAVE INCORPORATED
      </p>
    </div>
  )
}

export default QrGeneration