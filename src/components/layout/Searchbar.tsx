import { IoIosSearch } from 'react-icons/io'

const Searchbar = () => {
  return (
    <form className='w-24 border-[1px] flex gap-1 items-center px-3 py-2 rounded-4xl md:w-auto'>
      <IoIosSearch className='text-2xl' />
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search'
        className='w-full outline-none'
      />
    </form>
  )
}

export default Searchbar
