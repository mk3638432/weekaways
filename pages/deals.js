import Booking from '@/Components/Booking'
import Form from '@/Components/Form'
import { useRouter } from 'next/router'
const deals = () => {
    const router = useRouter()
    const handeleNav =() => {
        router.push("/deals")
    }
  return (
    <div>
    <div onClick={handeleNav}>
        <Booking/>
    </div>
    <Form/>
    </div>
  )
}

export default deals