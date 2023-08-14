import Link from 'next/link'
import React from 'react'

const Buttons = () => {
  return (
    <>
     <Link href="/contact">
     <button className='btn-primary'>
        Contact Me
      </button>
     </Link>
    </>
  )
}

export default Buttons
