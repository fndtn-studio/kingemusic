import React from 'react'
import Image from 'next/image'
import TextScroll from './TextScroll'

function HomePage() {
  return (
    <div className='w-[1440px] bg-black h-screen flex flex-col justify-end items-center'>

      <div className="HomePageZ1 flex flex-col items-center justify-end ">

        <TextScroll />

        <div className="heroImage z-[10] w-full h-full flex justify-end items-center mb-[62px] ">
          <Image src="/images/heroimagekinge.png" alt="hero image" width={350} height={350} />
        </div>

        <div className="ctaDiscoverButton z-[10] flex flex-col items-center justify-items-end mb-[62px] ">
          <button className="rounded-full h-[60px] w-[250px] bg-white text-black">
            discover my work
          </button>
        </div>

      </div>

    </div>
  )
}

export default HomePage