import React, {useState, Children} from 'react'

const Sidebar = ({children}) => {
  const [open, setOpen] = useState(true)
  return (
    <nav aria-hidden={!open}>
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