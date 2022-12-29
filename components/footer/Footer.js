import React from 'react'

export const Footer = () => {
  return (
<footer class="text-center">
  <div class="px-6 pt-6">
    <form action="">
      <div class=" md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
        <div class="md:ml-auto md:mb-6">
          <p class="text-gray-800">
            <strong>Sign up for our newsletter</strong>
          </p>
        </div>

        <div class="md:mb-6">
          <input
            type="text"
            class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
        
            placeholder="Email address"/>
        </div>

        <div class="md:mr-auto mb-6">
          <button type="button" class="inline-block px-6 py-2.5 bg-red-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Subscribe</button>
        </div>
      </div>
    </form>
  </div>

  <div class="text-center text-gray-700 p-4" >
    © 2022 Copyright:
    <a class="text-gray-800">Abacus Technologies</a>
  </div>
</footer>
  )
}

