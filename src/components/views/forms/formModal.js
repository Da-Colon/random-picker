import React from 'react'

const FormModal = ({ header, children }) => (
  <>
    <div className='bg-dc-dark min-h-full pt-16 w-full flex justify-center items-center'>
      <div className='bg-white max-w-2xl h-full rounded-md p-4 text-center no-scroll-bar-overflow'>
        <span className='text-3xl bold'>{header}</span>
        {children}
      </div>
    </div>
  </>
)

export default FormModal
