import { useEffect, useState } from 'react'
import PostHeader from '../../lib/components/layout/landing/PostHeader'
import { getBearerToken } from '../../services/helpers'

const CareersPage = () => {
    const [data, setData] = useState('')
    const [page, setPage] = useState(1)
    const getCareer = async() => {
        await fetch('http://careers-gicsm.greenmousetech.com/index.php?keyword=php&location=london&page=1&affid=3993993', {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: getBearerToken(),
            },
          })
        .then((res) => res.json())
        .then((res) => {setData(res.data)})
        .catch((err) => {
            err.response.data.message
        })
    }
    useEffect(() => {
        getCareer()
    }, [])
  return (
    <div>
        <div className="pb-12">
        <PostHeader
          image={
            "https://res.cloudinary.com/greenmouse-tech/image/upload/v1707231565/GuardMaster/Rectangle_3_10_stgoyx.png"
          }
          title="Career"
          nav="Career"
        />
      </div>
       <div className='box'>
        <p className='text-lg lg:text-3xl fw-600'>Careers</p>
        <div className='mt-6'>

        </div>
       </div>
    </div>
  )
}

export default CareersPage