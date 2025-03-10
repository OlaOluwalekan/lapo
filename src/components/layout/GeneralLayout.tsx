import { Outlet } from 'react-router'
import Sidebar from './Sidebar'
import Header from './Header'

const GeneralLayout = () => {
  return (
    <div className='flex h-screen w-screen bg-alice-light overflow-hidden'>
      <Sidebar />
      <div className='flex flex-col flex-grow overflow-hidden'>
        <Header />
        <div className='flex w-full flex-grow h-[calc(100vh-62px)] md:h-[calc(100vh-55px)] overflow-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default GeneralLayout
