import Head from 'next/head'
import Image from 'next/image'
import { Input } from 'postcss'
import Box from '../components/Box/Box'
import styles from '../styles/Home.module.css'
import react,{ useState } from 'react'
import Box2 from '../components/Box/Box2/Box2'

export default function Home() {
  const[open, setOpen]=useState(true);
  const[open1, setOpen1]=useState(false);
  return (
    <div className='bg-slate-600 h-screen'>
    <div className='bg-slate-600 items-center justify-between'>
    <div className='flex items-center justify-center py-16 w-full'> 
     <form className='my-2'> 
      <input type="text" name='search' placeholder='search' className='border-2 border-black p-1 w-96'></input>
      <button className='bg-white text-black border-2 border-black p-1 w-44 font-bold hover:bg-amber-200'>Search</button>
     </form>
     </div>
     <div className='flex justify-end items-end mx-24'>
     <div className='text-right mt-4'>
      <button onClick={()=>{setOpen(true); setOpen1(false)}} className='bg-white hover:bg-amber-200 px-7 border-2 border-b-neutral-800'>Grid</button>
      <button onClick={()=>{setOpen1(true); setOpen(false)}} className='bg-white hover:bg-amber-200 px-7 border-2 border-b-neutral-800'>Column</button>
     </div>
     </div>
     <div className={`flex justify-center items-center my-5 ${ open ? '':'hidden' } `}>
     <div className='grid grid-cols-4 gap-1'>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      </div>
     </div>
     <div className={`grid grid-cols-1 gap-1 my-5 ${ open1 ? '':'hidden' } `}>
     <Box2 />
     <Box2 />
     <Box2 />
     </div>
    </div>
    </div>
  )
}
