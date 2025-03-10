import { navLinks } from '@/data/navLinks'
import { setNavIsOpen } from '@/store/generalSlice'
import { FaBars } from 'react-icons/fa'
import { LuBell, LuUser } from 'react-icons/lu'
import { useDispatch } from 'react-redux'
import Searchbar from './Searchbar'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { Link, useLocation } from 'react-router'
import { useEffect, useState } from 'react'

const Header = () => {
  const [nextPath, setNextPath] = useState('')
  const [backLink, setBackLink] = useState('')
  const [currentPage, setCurrentPage] = useState('')
  const [path, setPath] = useState<any[]>([])
  const dispatch = useDispatch()
  const pageLocation = useLocation().pathname

  // console.log('header=>', pageLocation)

  // let nextPath: string = ''
  // let backLink: string = ''

  useEffect(() => {
    setCurrentPage(pageLocation.slice(pageLocation.lastIndexOf('/') + 1))
    setPath(pageLocation.split('/'))
  }, [pageLocation])

  useEffect(() => {
    if (path[2] === 'card-request') {
      setCurrentPage('card-request')
      if (path.length > 3) {
        setNextPath('Request Details')
        setBackLink('/dashboard/card-request')
      } else {
        setNextPath('')
        setBackLink('')
      }
    }
  }, [path, pageLocation])

  const pageInfo = navLinks.find((link) => {
    return (
      link.label.replace(' ', '-').toLowerCase() === currentPage.toLowerCase()
    )
  })
  // console.log(path)

  return (
    <div className='w-full px-2 py-1 border-b-[1px] border-gray-light flex items-center justify-between'>
      <div className='flex gap-2 items-center py-2.5 px-3'>
        <button
          className='md:hidden cursor-pointer bg-primary-blue/30 text-primary-blue p-2 rounded-sm'
          onClick={() => dispatch(setNavIsOpen(true))}
        >
          <FaBars />
        </button>
        {backLink && (
          <div className='flex gap-1 items-center'>
            <span>
              <GoChevronLeft className='text-gray-dark' />
            </span>
            <Link to={backLink} className='text-xs'>
              Back
            </Link>
            <span>
              <GoChevronRight className='text-gray-dark' />
            </span>
          </div>
        )}
        <img src={pageInfo?.iconLink} alt={pageInfo?.label} />
        <h3 className='text-xs'>{pageInfo?.label}</h3>
        {nextPath && (
          <div className='flex gap-1 items-center'>
            <span>
              <GoChevronRight className='text-gray-dark' />
            </span>
            <h3 className='text-xs'>{nextPath}</h3>
          </div>
        )}
      </div>

      <div className='flex items-center gap-4'>
        {/* search */}
        {currentPage !== 'card-request' && <Searchbar />}

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
