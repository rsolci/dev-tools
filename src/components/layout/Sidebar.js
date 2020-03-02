import React, {useState} from 'react'

const Sidebar = () => {
  const [open, setOpen] = useState(true)
  return (
    <nav aria-hidden={!open}>
      <header>
        Nav Header
      </header>
      <div>
        Menu content
      </div>
    </nav>
  )
}

export default Sidebar;