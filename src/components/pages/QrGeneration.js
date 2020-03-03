import React, {useState, useCallback } from 'react'

import debounce from 'lodash/debounce'
import QRCode from 'qrcode'

import { TextInput } from 'components/inputs'
import { PageTitle, Tradermark } from 'components/layout'

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

  const inputChanged = async (event) => {
    setTextToEncode(event.target.value)
    delayedGenerate(event.target.value)
  }

  return (
    <div className='flex flex-col'>
      <PageTitle title='QR Code Generator' />
      <div className='flex'>
        <div className='w-9/12'>
          <TextInput onChange={inputChanged} value={textToEncode} />
        </div>
        <div>
          {imageData && <img src={imageData} alt={`QR for ${textToEncode}`} />}
        </div>
      </div>
      <Tradermark text='The word "QR Code" is registered trademark of: DENSO WAVE INCORPORATED' />
    </div>
  )
}

export default QrGeneration