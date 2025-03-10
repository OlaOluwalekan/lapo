import { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'

const CardRequestSearch = () => {
  const [searchText, setSearchText] = useState('')

  return (
    <div className='w-full flex flex-col gap-2.5'>
      <div className='w-full h-[1px] bg-gray-light'></div>
      <form className='flex items-center border-[1.5px] px-3.5 rounded-xl border-gray-dark/40 shadow max-w-[450px]'>
        <IoIosSearch className='text-2xl text-gray-dark' />
        <input
          type='text'
          className='px-3.5 py-2.5 w-full focus:outline-none '
          placeholder='Search by branch'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
      <div className='w-full h-[1px] bg-gray-light'></div>
    </div>
  )
}

export default CardRequestSearch
