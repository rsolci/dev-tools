import React from 'react'
import { Link } from 'components/navigation'

const LinkButton = ({children, to, icon}) => {
  return (
    <span className="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded-sm block mb-5">
      {icon &&
        <i className="w-8 fas fa-stream p-2 bg-gray-200 rounded-full">
        </i>
      }
      <Link className="mx-2 text-sm" to={to}>{children}</Link>
    </span>
  )
}

export default LinkButton