import React from 'react'
import Pattern from '../../assets/orange-pattern.jpeg';
const PatternImg={
    backgroundImage:`url(${Pattern})`,
    backgroundPosition:'center',
    backgroundRepeat:'non-repeat',
    backgroundSize:'cover',
    height:'100%',
    width:'100%',
}
export default function Notified() {
  return (
    <div data-aos='zoom-in'
    className='mb-20 bg-gray-100 dark:bg-gray-800 text-white'
    style={PatternImg}>
      <div className='container backdrop:blur-sm py-10 '>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1 className='text-2xl !text-center sm:text-left scroll-mt-text-4xl
            font-semibold'
            >Get Notified About New Products
            </h1>
            <input
            data-aos='dade-up'
             type="text"
             placeholder='Enter your Email'
             className='w-full p-3'
             />
        </div>
      </div>
    </div>
  )
}
