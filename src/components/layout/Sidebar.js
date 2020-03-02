import React, {useState, Children} from 'react'

const Sidebar = ({children}) => {
  const [open, setOpen] = useState(true)
  return (
    <nav aria-hidden={!open}>
      <header>
        Nav Header
      </header>
      <div>
        {children}
      </div>
    </nav>
  )
}

export default Sidebar;