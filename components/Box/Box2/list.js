import React from 'react'

export default function Box2({title:title, thumb:thumb, des:des, type:type, tags:tags, idDrink:idDrink}) {
  return (
    <div className='flex justify-center items-center ease-in'>
     <div className='flex m-2 bg-neutral-50 p-1 w-3/4 border-2 max-w shadow-lg rounded-lg ease-in'>
     <div className='w-1/3'>
        <div className=' item-center justify-center flex bg-cover w-full h-64'>
        <img
         className='h-64 w-96 rounded-lg'
            src={thumb}
            // alt="Product Image"
            // width={250}
            // height={360}
          ></img>
        </div>
      </div>
        <div className='w-2/3'>
        <div className='mx-5 my-2'>
        <div className='item-center justify-center text-left'>
        <a href={'/view/'+idDrink}><p className='font-bold font-serif text-lg'>{title}</p></a>
          <p className='font-thin font-serif text-pink-900 italic mb-4 text-sm'>{type}</p>
          <div class="bg-fixed">
                  <p class="font-thin text-[16px] text-slate-600">{des}</p>  
          </div>
        </div>
        <div className='item-center justify-center mt-4'>
        <p className='text-sm font-mono text-right'>{tags}</p>
        </div>
        <div className='item-center place-items-end text-right'>
          <p className='text-lg font-serif text-red-900 font-bold'>$100</p>
        </div>
        </div>
        </div>
      </div>
      </div>
  )
}
