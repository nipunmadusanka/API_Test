import React from 'react'
import Image from 'next/image'

export default function Box({title:title, thumb:thumb, type:type, tags:tags, idDrink:idDrink }) {
  return (
    <div className='m-2 bg-neutral-50 p-1 w-80 border-2 border-black'>
        <div className='item-center justify-center flex bg-fixed bg-cover w-full h-64'>
        <img
            className='h-64 w-80'
            src={thumb}
            // alt="Product Image"
            // width={250}
            // height={360}
          ></img>
        </div>
        <div className='mx-2 my-2'>
        <div className='item-center justify-center text-left'>
          <a href={'/view/'+idDrink}><p className='font-bold text-lg'>{title}</p></a>
          <p className='font-thin text-sm'>{type}</p>
        </div>
        <div className='item-center justify-center text-right mt-4'>
        <p className='text-sm font-mono'>{tags}</p>
        </div>
        </div>
      </div>
  )
}
