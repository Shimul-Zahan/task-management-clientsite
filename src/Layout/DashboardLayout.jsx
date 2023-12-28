import React from 'react'
import DesktoNav from './DashNav/DesktoNav'
import MobileNavbar from './DashNav/MobileNavbar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
      <div className=''>
          <div className="grid grid-cols-6 ">
              <div className="h-full rounded-lg col-span-1">
                  <div>
                      <DesktoNav className="hidden lg:block" />
                      <MobileNavbar className="block lg:hidden" />
                  </div>
              </div>

              <div className="min-h-screen col-span-5 py-5">
                  <Outlet />
              </div>
          </div>
      </div>
  )
}

export default DashboardLayout