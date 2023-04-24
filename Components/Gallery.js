import React from 'react'

const Gallery = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid md:grid-cols-3 gap-2'>
            <div>
                <img className='w-full h-full px-1' src='https://images.pexels.com/photos/62389/pexels-photo-62389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
            </div>
            <div>
                <img className='w-full h-full px-1' src='https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
            </div>
            <div>
                <img className='w-full h-full px-1' src='https://images.pexels.com/photos/130879/pexels-photo-130879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
            </div>
            <div>
                <img className='w-full h-full px-1' src='https://images.pexels.com/photos/21787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
            </div>
            <div>
                <img  className='px-1'src='https://images.pexels.com/photos/2235921/pexels-photo-2235921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
            </div>
            <div>
                <img className='px-1' src='https://images.pexels.com/photos/2549082/pexels-photo-2549082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
            </div>
        </div>
    </div>
  )
}

export default Gallery