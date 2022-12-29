import React from 'react'

export default function Afterglow({instr:instr, imgs:imgs, title:title, ing1:ing1, ing2:ing2, ing3:ing3, ing4:ing4}) {
  return (
    
        // <div className='container justify-center items-center pt-10'>
        //    <div className='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg justify-center'>
                
           
            
        
        //     <div className="flex justify-start items-center border-solid border-black my-10">
        //         <div className='  h-64'>
        //        
        //         </div>
        
        //     </div>
        //     </div>

        // </div>

        // <div class="flex justify-center">
        // <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        // <img className='' src=></img>
        //   <div class="p-6 flex overflow-auto flex-col justify-start">
        //     
        //   </div>
        // </div>
        // </div>

          <div class="container my-24 px-6 mx-auto">


          <section class="mb-32 text-gray-800 text-center md:text-left">
            <div class="block rounded-lg shadow-lg bg-white">
              <div class="flex flex-wrap items-center">
                <div class="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                  <img src={imgs}
                    class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"></img>
                </div>
                <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                  <div class="px-6 py-12 md:px-12">
                    <h2 class="text-3xl font-bold mb-6 pb-2">{title}</h2>
                    <p class="text-gray-500 mb-6 pb-2">
                    {instr}
                    </p>
                    <div class="flex flex-wrap mb-6">
                      <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center justify-center md:justify-start">
                          <svg class="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                            </path>
                          </svg>{ing1}
                        </p>
                      </div>
                      <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center justify-center md:justify-start">
                          <svg class="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                            </path>
                          </svg>{ing2}
                        </p>
                      </div>
                      <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center justify-center md:justify-start">
                          <svg class="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                            </path>
                          </svg>{ing3}
                        </p>
                      </div>
                      <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                        <p class="flex items-center justify-center md:justify-start">
                          <svg class="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                            </path>
                          </svg>{ing4}
                        </p>
                      </div>
                      
                    </div>
                    <button type="button"
                      class="inline-block px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          

          </div>
        



  )
}
