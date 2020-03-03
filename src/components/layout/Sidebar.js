import React from 'react'

const Sidebar = ({children}) => {
  return (
    <nav className='w-56 min-w-56'>
      <header className='max-w-sm rounded overflow-hidden shadow-lg font-bold text-purple-500 text-xl mb-2'>
        Nav Header
      </header>
      <div>
        {children}
      </div>
    </nav>
  )
}

export default Sidebar;