import Gallery from '@/Components/Gallery'
import { useRouter } from 'next/router'

import React from 'react'

const gallery = () => {
    const router = useRouter()
    const handleClick = () => {
         router.push('/gallery')
    }
  return (
    <div>
        <Gallery/>
    </div>
  )
}

export default gallery