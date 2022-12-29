import React from 'react'
import Image from 'next/image'

export default function Box({title:title, thumb:thumb, type:type, tags:tags, idDrink:idDrink }) {
  return (
    <div className='m-2 bg-neutral-50 max-w-sm shadow-lg p-1 w-80 border-2 rounded-lg ease-in'>
        <div className='item-center justify-center flex bg-fixed bg-cover w-full h-64'>
        <img
            className='h-64 w-80 rounded-t-lg'
            src={thumb}
            // alt="Product Image"
            // width={250}
            // height={360}
          ></img>
        </div>
        <div className='mx-3 my-2'>
        <div className='item-center justify-center text-left'>
          <a href={'/view/'+idDrink}><p className='font-bold text-lg'>{title}</p></a>
          <p className='font-thin text-sm'>{type}</p>
        </div>
        <div className='item-center justify-center text-right mt-4'>
        <p className='text-sm font-mono'>{tags}</p>
        </div>
        <div className='item-center text-right'>
          <p className='text-lg font-serif text-red-900 font-bold'>$100</p>
        </div>
        </div>
      </div>
  )
}
