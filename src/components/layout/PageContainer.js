import React from 'react'
import debounce from 'lodash/debounce'

const PageContainer = ({children}) => {
  return (
    <main className='container'>
      {children}
    </main>
  )
}

export default PageContainer;