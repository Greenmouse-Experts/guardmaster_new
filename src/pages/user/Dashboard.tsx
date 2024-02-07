import { FaBook, FaMedal } from 'react-icons/fa'
import { ActivitiesTimeline } from '../../lib/components/user/dashboard/Activities'
import ActivityChart from '../../lib/components/user/dashboard/ActivityChart'
import { LuBookOpen } from 'react-icons/lu'

const UserDashboard = () => {
    const topBar = [
        {
            name: "No of Subscribed Programs",
            num: 1,
            icon: <FaBook className='text-3xl'/>
        },
        {
            name: "Total Courses",
            num: 10,
            icon: <LuBookOpen className='text-3xl'/>
        },
        {
            name: "Completed Courses",
            num: 2,
            icon: <FaMedal className='text-3xl'/>
        }
    ]
  return (
    <>
        <div>
            <div className='grid lg:grid-cols-3 gap-6'>
                {
                    topBar.map((item, i) => (
                        <div className='bg-white shades flex gap-x-4 items-center rounded-lg p-2' key={i}>
                            <div className='bg-primary w-16 h-16 place-center rounded-md shadow text-white'>
                                {item.icon}
                            </div>
                            <div>
                                <p className='fw-600 syne text-2xl'>{item.num}</p>
                                <p className='fw-500 text-gray-600'>{item.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='grid lg:grid-cols-2 gap-6 mt-6 lg:mt-12'>
                <ActivitiesTimeline/>
                <ActivityChart/>
            </div>
        </div>
    </>
  )
}

export default UserDashboard