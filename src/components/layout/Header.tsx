import { navLinks } from '@/data/navLinks'
import { setNavIsOpen } from '@/store/generalSlice'
import { FaBars } from 'react-icons/fa'
import { LuBell, LuUser } from 'react-icons/lu'
import { useDispatch } from 'react-redux'
import Searchbar from './Searchbar'

const Header = () => {
  const pageLocation = location.pathname
  const currentPage = pageLocation.slice(pageLocation.lastIndexOf('/') + 1)
  const pageInfo = navLinks.find((link) => {
    return link.label.toLowerCase() === currentPage.toLowerCase()
  })
  const dispatch = useDispatch()
  //   console.log(currentPage, pageInfo)

  return (
    <div className='w-full px-2 py-1 border-b-[1px] border-gray-light flex items-center justify-between'>
      <div className='flex gap-3 items-center py-2.5 px-3'>
        <button
          className='md:hidden cursor-pointer bg-primary-blue/30 text-primary-blue p-2 rounded-sm'
          onClick={() => dispatch(setNavIsOpen(true))}
        >
          <FaBars />
        </button>
        <img src={pageInfo?.iconLink} alt={pageInfo?.label} />
        <h3>{pageInfo?.label}</h3>
      </div>

      <div className='flex items-center gap-4'>
        {/* search */}
        <Searchbar />

        <div className='flex items-center gap-4'>
          <button className='p-2.5 text-xl'>
            <LuBell />
          </button>

          <section className='w-8 aspect-square flex justify-center items-center bg-gray-light rounded-full border-[1px] border-greyish-blue'>
            <LuUser className='text-2xl' />
          </section>
        </div>
      </div>
    </div>
  )
}

export default Header
