import React from 'react'

const Username = ({params}) => {
  return (
    <>
      {params.username}
    <div className='cover w-full relative'>
      <img className= 'object-cover w-full h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/8024115/d61edb819416442a981aa8f9e4389256/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/4.png?token-time=1733270400&token-hash=-pcv9itDb8b5tNCtD4y4zBESKAFhs-DdMsGU5rP__-M%3D" alt="" />
      <div className='absolute -bottom-20 right-[46.5%] border-white border-4 rounded-full'>
        <img className= 'rounded-full' width={150} height={150} src="https://pbs.twimg.com/profile_images/1485506247168167936/dzUJiQmK_400x400.png" alt="" />
        

      </div>
    </div>
    <div className='info flex flex-col justify-center items-center my-24 gap-2'>
    <div className='font-bold text-lg '>
    @{params.username}
    </div>
    <div className='text-slate-400'>
    Creating STL Models for 3D Printing
    </div>
    <div className='text-slate-400'>
    26,015 members . 246 posts . nidwqi
    </div>

    <div className='payment flex gap-3 w-[80%] mt-10'>
      <div className='supporters w-1/2 bg-slate-900 rounded-lg text-white p-10'>
      <h2 className='text-2xl  font-bold my-5'>Supporters</h2>
        <ul className='mx-5 text-lg'>
          
          <li className='my-y flex gap-2  items-center'>
          <img width={35} height={35}  src="avatar.gif"  alt="user" />
          <span>
            Revan donated <span className='font-bold'>$25</span> with message "I looked to feed you cookies"</span> </li>
            <li className='my-y flex gap-2  items-center'>
          <img width={35} height={35}  src="avatar.gif"  alt="user" />
          <span>
            Revan donated <span className='font-bold'>$25</span> with message "I looked to feed you cookies"</span> </li>
            <li className='my-y flex gap-2  items-center'>
          <img width={35} height={35}  src="avatar.gif"  alt="user" />
          <span>
            Revan donated <span className='font-bold'>$25</span> with message "I looked to feed you cookies"</span> </li>
            <li className='my-y flex gap-2  items-center'>
          <img width={35} height={35}  src="avatar.gif"  alt="user" />
          <span>
            Revan donated <span className='font-bold'>$25</span> with message "I looked to feed you cookies"</span> </li>
            <li className='my-y flex gap-2  items-center'>
          <img width={35} height={35}  src="avatar.gif"  alt="user" />
          <span>
            Revan donated <span className='font-bold'>$25</span> with message "I looked to feed you cookies"</span> </li>
            
        </ul>
      </div>
      <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
      <div className='flex flex-col gap-2'>

      <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
      <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
     
        <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full">Pay</button>
      </div>
      <div className='flex gap-2 mt-5'>
        <button className='bg-slate-800 p-3 rounded-lg'>pay $10</button>
        <button className='bg-slate-800 p-3 rounded-lg'>pay $15</button>
        <button className='bg-slate-800 p-3 rounded-lg'>pay $25</button>
        <button className='bg-slate-800 p-3 rounded-lg'>pay $50</button>
      </div>
      </div>
      </div>
      <div>
    </div>
    </div>
    </>
  )
}

export default Username
