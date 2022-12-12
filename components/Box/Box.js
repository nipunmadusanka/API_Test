import React from 'react'
import Image from 'next/image'

export default function Box({title:title, thumb:thumb}) {
  return (
    <div className='m-2 bg-neutral-50 p-1 w-80 border-2 border-black'>
        <div className='border-2 border-b-gray-800 item-center justify-center flex bg-orange-600 bg-fixed img w-full h-64'>
        {/* <Image
            src="https://www.thecocktaildb.com/images/media/drink/wqstwv1478963735.jpg"
            alt="Product Image"
            width={250}
            height={360}
          /> */}
        </div>
        <div className='mx-2 my-2'>
        <div className='item-center justify-center text-left'>
          <p className='font-bold text-lg'>{title}</p>
          <p className='font-thin text-sm'>Name</p>
        </div>
        <div className='item-center justify-center text-right mt-4'>
        <p className='text-sm font-mono'>Name</p>
        </div>
        </div>
      </div>
  )
}
