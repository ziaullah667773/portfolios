import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900 text-sm p-4 text-center text-white'>
      <span className="text-gray-300 text-sm">
      &copy; {new Date().getFullYear()} Ziaullah All Rights reserved
    </span>
    </div>
  )
}

export default Footer
