import Activitys from '@/Components/Activitys'
import Booking from '@/Components/Booking'
import Form from '@/Components/Form'
import Gallery from '@/Components/Gallery'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import Topbar from '@/Components/Topbar'
import React from 'react'

const index = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <Activitys/>
      <Booking/>
      <Gallery/>
      <Form/>
    </div>
  )
}

export default index