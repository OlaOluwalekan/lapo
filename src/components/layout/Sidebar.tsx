import { navLinks } from '@/data/navLinks'
import { RootState } from '@/store'
import { setNavIsOpen } from '@/store/generalSlice'
import clsx from 'clsx'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const Sidebar = () => {
  const { page, navIsOpen } = useSelector((store: RootState) => store.general)
  const dispatch = useDispatch()

  return (
    <div
      className={clsx(
        'w-screen h-screen md:w-fit bg-black/30 backdrop-blur-sm fixed top-0 z-20 md:static transition-all duration-200',
        navIsOpen ? 'left-0' : 'left-[-1000px]'
      )}
      onClick={() => dispatch(setNavIsOpen(false))}
    >
      <div
        className='border-gray-light border-[1px] w-[230px] h-full bg-white py-2 flex flex-col gap-8'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='w-full flex items-start'>
          <img src='./images/logo.svg' alt='Logo' className='w-5/6' />
          <button
            className='bg-red-400/30 text-red-400 p-2 rounded-sm cursor-pointer md:hidden'
            onClick={() => dispatch(setNavIsOpen(false))}
          >
            <FaTimes />
          </button>
        </div>

        <div className='px-2.5'>
          {navLinks.map((navLink) => {
            return (
              <div key={navLink.id}>
                <a
                  href={navLink.href}
                  key={navLink.id}
                  className='block text-xs'
                >
                  <article
                    className={clsx(
                      'flex py-2.5 px-3 gap-3 rounded-xl font-medium',
                      page.toLowerCase() === navLink.label.toLowerCase()
                        ? 'border-[1px] border-gray-light bg-gray-lighter text-primary-blue'
                        : 'text-black/50'
                    )}
                  >
                    <img src={navLink.iconLink} alt={navLink.label.charAt(0)} />
                    {navLink.label}
                  </article>
                </a>
                {navLink.label.toLowerCase() === 'dashboard' && (
                  <article className='text-[9px] py-4 px-4 text-greyish-blue'>
                    MAIN MENU
                  </article>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
