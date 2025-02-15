import React from 'react'

function AboutMe() {
  return (
    <div className='w-[1440px] bg-black h-screen flex flex-row justify-center items-center border-2 border-red-900'>

      <div className="w-[500px]">
        <img src="./aboutmeimage.png" alt="side-profile-picture" className='aboutMeImage w-[350px]' />
      </div>
      <div className="w-[500px]">
        <p>Every artist has a story. King E has a mission.</p>
        <p>Hailing from Bengaluru, India, King E isn’t just another rapper — he’s a dreamer who uses music to heal and spread joy. He turned his struggles, stories and strength into lyrics that inspire, empower, and uplift.</p>
        <p>His music has become more than just an artform. He turned the same music into the voice of motivation. With every verse, he delivers motivation, resilience, and the belief that no dream is too big to chase.</p>
        <p>Join the journey towards the mission. </p>
        <p>Inspire and be inspired. Let’s make the world a better place,
          one song at a time.</p>
      </div>
    </div>
  )
}

export default AboutMe