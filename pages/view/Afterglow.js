import React from 'react'

export default function Afterglow({instr:instr, imgs:imgs}) {
  return (
    
        <div className='container justify-center items-center pt-10'>
           <div className='flex justify-center'>
                <img className='' src={imgs}></img>
           </div>
            
        
            <div className="flex justify-center items-center mx-auto  border-solid border-2 border-black w-3/4 my-10">
                <div className='overflow-auto h-64'>
               {instr}
                </div>
        
            </div>

        </div>
        



  )
}
