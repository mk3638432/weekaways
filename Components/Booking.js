import React from 'react'


const Booking = () => {
  return (
    <div className='max-w[1140px] m-auto w-full p-4 '>
        <div>
            <form className='lg:flex lg:justify-between w-full items-center'>
                <div className='flex flex-col my-2 py-2'>
                    <label>Destination</label>
                    <select className='lg:w-[300px] md:w-full border rounded-md p-2' name='' id=''>
                        <option>Grande Antigua</option>
                        <option>Key West</option>
                        <option>Maldives</option>
                        <option>Cozumel</option>
                        <option>India</option>
                    </select>
                </div>
                <div className='flex w-full'>
                    <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                        <label>Check In </label>
                        <input type='date'/>
                    </div>
                    <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                        <label>Check Out </label>
                        <input type='date'/>
                    </div>
                    <div className='flex p-2 flex-col my-2 w-full'>
                        <label className='w-full justify-center flex '>Search</label>
                        <button className='w-full'>Rates & Avalailabilities</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Booking