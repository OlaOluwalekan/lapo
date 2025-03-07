import { Outlet } from 'react-router'
import Sidebar from './Sidebar'
import Header from './Header'

const GeneralLayout = () => {
  return (
    <div className='flex min-h-screen bg-alice-light'>
      <Sidebar />
      <div className='flex flex-col flex-grow'>
        <Header />
        <div className='flex flex-grow h-[calc(100vh-62px)] md:h-[calc(100vh-55px)] overflow-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default GeneralLayout
