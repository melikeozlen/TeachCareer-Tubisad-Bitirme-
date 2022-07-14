import React from 'react'

const Contact = () => {
  return (
    <div className='d-flex flex-column w-50 p-4 bg-dark mx-auto' >
        <h6 className='text-light'>CONTACT ME</h6>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Email' />
        <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea>
    </div>
  )
}

export default Contact