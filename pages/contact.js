import Form from '@/Components/Form'
import React from 'react'
import { useRouter } from 'next/router'

const contact = () => {
    const router = useRouter()
    const handleForm = () => {
     router.push("/contact")
    }
  return (
    <div onClick={handleForm}>
        <Form/>
    </div>
  )
}

export default contact