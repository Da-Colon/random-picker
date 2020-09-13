import React from 'react'

const Modal = ({children}) => (
  <div id='modal-overlay' className='h-full w-full bg-gray-400 flex justify-center items-center'>
    <div className='bg-white rounded-lg shadow-xl w-fit m-auto'>
      {children}
    </div>
  </div>
)

export default Modal
