import React, {useState} from 'react'

const Sidebar = () => {
  const [open, setOpen] = useState(true)
  return (
    <nav className='sidebar' aria-hidden={!open}>
      <header>
        Nav Header
      </header>
      <div className='sidebar__content'>
        Menu content
      </div>
    </nav>
  )
}

export default Sidebar;