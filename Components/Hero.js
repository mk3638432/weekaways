import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
    <img className='mt-14 w-full h-full object-cover' src='https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
    <div>
        <div className='max-w-[1140px] m-auto absolute top-[30%] md:top-[50%] md:p-20'>
            <div className='font-bold p-5 text-white flex flex-col '> 
            <h1 className='text-4xl italic'>Find Your Special Trip</h1>
            <h2 className='text-4xl py-4 italic'>With WeekDays</h2>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a 
                 type specimen book. It has survived not</p>
                 </div>
        </div>
    </div>
    </div>
  )
}

export default Hero