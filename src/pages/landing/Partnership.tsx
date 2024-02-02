import PostHeader from "../../lib/components/layout/landing/PostHeader"

const Partnership = () => {
    return (
        <>
          <div className="">
          <PostHeader image={'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706182936/GuardMaster/Group_48097434_1_j5kis8.png'} title="Industry Partnerships" nav="Industry Partnerships" />
          <div>
            <div className='boxes'>
              <div className='py-12'>
                <p className='!syne !text-3xl font-semibold text-center'>Industry Partnerships</p>
                <div className='text-center mt-12 px-4'>
                  <p className='!mont'>To provide our students with a holistic perspective, Guardmaster fosters collaborations with industry leaders, governmental bodies, and international security agencies. These partnerships open avenues for internships, research opportunities, and exposure to diverse security landscapes.</p>
                  <p className='!mont mt-7'>In essence, Guardmaster Institute of Corporate Security Management is more than an educational institution; it is a transformative journey for those seeking to excel in the dynamic field of corporate security. Our commitment to excellence, research-driven approach, and dedication to staying ahead of industry trends make Guardmaster the premier choice for individuals and corporations invested in the future of security management.</p>
                </div>
              </div>
            </div>
            <div className='boxes bg-[#EBEDEF]'>
              <div className='py-12 lg:py-24'>
                <p className='!syne !text-3xl font-semibold text-center'>Certifications and License</p>
                <div className='mt-12 grid lg:grid-cols-3 gap-4 lg:gap-10'>
                    <div className='bg-white cert-shade p-3 lg:p-6'>
                      <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1706183770/GuardMaster/Certificate_2_1_zjnkw8.png" alt="fold" className='w-full'/>
                      <p className='font-semibold !mont text-center mt-3 pb-3'>Certificate of Trademark</p>
                    </div>
                    <div className='bg-white cert-shade p-3 lg:p-6'>
                      <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1706183781/GuardMaster/Certificate_1_1_g3ym1s.png" alt="fold" className='w-full'/>
                      <p className='font-semibold !mont text-center mt-3 pb-3'>Certificate of Incorporation</p>
                    </div>
                    <div className='bg-white cert-shade p-3 lg:p-6'>
                      <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1706183770/GuardMaster/Certificate_3_1_csxwyx.png" alt="fold" className='w-full'/>
                      <p className='font-semibold !mont text-center mt-3 pb-3'>Certificate of Continuing Professional Development</p>
                    </div>
                </div>
              </div>
            </div>
            <div className='boxes'>
            <div className='py-12'>
                <p className='!syne !text-3xl font-semibold text-center'>Our Parners</p></div>
                <div className='my-12'>
                  <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1706187688/GuardMaster/Partners_1_sd8sa4.png" alt="bound" className='lg:w-10/12 mx-auto lg:px-12' />
                </div>
            </div>
          </div>
          </div>
        </>
      )
}

export default Partnership