import React from 'react'

function Home() {
  return (
    <div>
      <div className='flex justify-center mt-10'>
        <input
          placeholder='Izdeu..'
          type="text"
          className='bg-[#0000000] rounded-full pl-5 pr-5 h-[5vh] w-[75vw] focus:outline-none placeholder:text-gray-600 placeholder:font-semibold'
        />
      </div>
    </div>
  )
}

export default Home