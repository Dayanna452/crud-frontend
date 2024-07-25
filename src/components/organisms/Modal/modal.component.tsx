import { Button } from 'app/components/atoms/Button'
import { useState } from 'react'

export const Modal = () => {
  const [open, setOpen]= useState(false)
  return (
    <>
      <Button
        variant='primary'
        data-twe-toggle='modal'
        data-twe-target='#staticBackdrop'
        data-twe-ripple-init
        data-twe-ripple-color='light'
        onClick={() => setOpen(!open)}
      >
        Launch static backdrop modal
      </Button>

      {open && (
       <div className='absolute top-3 '>modal</div>
      )}
    </>
  )
}
