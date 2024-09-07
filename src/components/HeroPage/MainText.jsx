import React from 'react'
import Swal from 'sweetalert2'

const MainText = ({exploreToggle}) => {

  //alert garna ko lagi sweetalert2 library ho
  const showAlert = () => {
    Swal.fire({
      title: 'Subscribed!!',
      html: `Thank you for subscribing<br> Stay Tune for More Exciting News`,
      icon: 'info',
      confirmButtonText: 'OK'
    });
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <img className='my-6' src="https://images.pexels.com/photos/177557/pexels-photo-177557.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <h2 className='font-semibold text-4xl '>Stay Informed with Our Latest News Coverage</h2>
        <p className='text-lg text-gray-600 leading-tight mt-3'>Get the most up-to-date news from around the world delivered to you by our team of dedicated journalists.</p>

        <div className='buttons flex gap-4 mt-5'>
            <button onClick={exploreToggle} className='bg-blue-600 hover:bg-violet-800 px-4 py-2 rounded font-semibold text-white'>Explore News</button>
            <button onClick={showAlert} className='bg-violet-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold text-white'>Subscribe Now</button>

        </div>
    </div>
  )
}

export default MainText







