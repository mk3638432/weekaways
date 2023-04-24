
const Form = () => {
  return (
    <div className="">
        <h2 className="text-center font-bold">Send Us a Message</h2>
        <p className="text-center m-3">We're Standing By!</p>
        <div>
            <img className="w-[400px] m-auto h-[180px] object-cover" src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/"/>
            <form className="">
                <div className="grid grid-cols-2 lg:grid-cols-3">
                    <input className="p-3 border-2 border-gray-600 border-collapse m-3 rounded-lg" type="text" placeholder="First"/>
                    <input className="p-3 border-2 border-gray-600 border-collapse m-3 rounded-lg" type="text" placeholder="Last"/>
                    <input className="p-3 border-2 border-gray-600 border-collapse m-3 rounded-lg" type="email" placeholder="Email"/>
                    <input className="p-3 border-2 border-gray-600 border-collapse m-3 rounded-lg" type="number" placeholder="Phone"/>
                    <input className="p-3 border-2 border-gray-600 border-collapse m-3 w-[400px] lg:w-[700px] rounded-lg" type="text" placeholder="Address"/>
                    
                </div>
                <div className="flex justify-center"> 
                <button className="w-[200px] lg:w-[450px] mb-10">Submit</button>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default Form