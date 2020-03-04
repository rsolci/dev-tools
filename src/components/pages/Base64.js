import React, {useState, useCallback } from 'react'

import debounce from 'lodash/debounce'

import { PageTitle } from 'components/layout'
import { TextArea } from 'components/inputs'

const Base64 = () => {
  const [decodedText, setDecodedText] = useState('')
  const [encodedText, setEncodedText] = useState('')

  const delayedEncode = useCallback(debounce(text => {
    setEncodedText(btoa(text))
  }, 200), [])

  const delayedDecode = useCallback(debounce(text => {
    setDecodedText(atob(text))
  }, 200), [])

  const encodedChanged = (event) => {
    setDecodedText(event.target.value)
    delayedEncode(event.target.value)
  }

  const decodedChanged = (event) => {
    setEncodedText(event.target.value)
    delayedDecode(event.target.value)
  }

  return (
    <div>
      <PageTitle title='Base64 converter' />
      <TextArea value={decodedText} onChange={encodedChanged}/>
      <TextArea value={encodedText} onChange={decodedChanged}/>
    </div>
  )
}

export default Base64