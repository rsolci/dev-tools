import React from 'react'

const Sidebar = ({children}) => {
  return (
    <nav className='w-56 min-w-56'>
      <header >
        Available tools
      </header>
      <div>
        {children}
      </div>
    </nav>
  )
}

export default Sidebar;