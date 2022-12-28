import React from 'react'

export const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-10 ease-in duration-300 bg-slate-50'>
        <div className='max-w-[1240px] m-auto flex items-center justify-between p-4 text-black'>
            <a href="/">
                <h1 className='font-bold text-2xl'>Wicky</h1>
            </a>
           
        <div class="flex justify-center">
        <div class="xl:w-96">
            <div class="input-group relative flex justify-center items-center w-full rounded">
            <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
            </input>
            <span type="submit" class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
            </span>
            </div>
        </div>
        </div>
            <ul className='md:flex lg:flex'>
                <li className='p-4'>
                    <a href="/" className='hover:text-red-700'>Home</a>
                </li>
                <li className='p-4'>
                    <a href="/#work" className='hover:text-red-700'>Shop</a>
                </li>
                <li className='p-4'>
                    <a href="/#gallery" className='hover:text-red-700'>Gallery</a>
                </li>
                <li className='p-4'>
                    <a href="/#contact" className='hover:text-red-700'>Contact</a>
                </li>
            </ul>
        </div>
    
    </div>
//     <nav class="flex items-center justify-between flex-wrap bg-teal p-6 bg-slate-600">
//     <div class="flex items-center flex-no-shrink text-white mr-6">
//       <svg class="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
//       <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
//     </div>
//     <div class="block lg:hidden">
//       <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
//         <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
//       </button>
//     </div>
//     <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
//       <div class="text-sm lg:flex-grow">
//         <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
//           Docs
//         </a>
//         <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
//           Examples
//         </a>
//         <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
//           Blog
//         </a>
//       </div>
//       <div>
//         <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">Download</a>
//       </div>
//     </div>
//   </nav>
  )
}
