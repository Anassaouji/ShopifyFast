import React from 'react'
import Vest from '../../assets/BestProducts/Veste.jpeg';
import VestPolaire from '../../assets/BestProducts/Veste Polaire.jpeg';
import Pontalon from '../../assets/BestProducts/Pantalon.jpeg';
import Capuche from '../../assets/BestProducts/Capuche.jpeg';
import Jacke from '../../assets/BestProducts/Jacke.jpeg';
import { FaStar } from 'react-icons/fa6';
const ProductsData=[
    {
        id:1,
        img:VestPolaire,
        title:"Veste Polaire",
        description:`Lorem ipsum dolor sit amet consectetur,
         adipisicing elit. Deleniti praesentium doloribus
          cupiditate saepe dolorum, adipisci eveniet
           repudiandae totam laudantium aut, asperiores,
            unde corporis nulla a dolores blanditiis! 
            Omnis, dolorum quibusdam.`,
    },
    {
        id:2,
        img:Capuche,
        title:"Capuche",
        description:`Lorem ipsum dolor sit amet consectetur,
         adipisicing elit.`,
    },
    {
        id:3,
        img:Jacke,
        title:"Jacke",
        description:`Lorem ipsum dolor sit amet consectetur,
         adipisicing elit. Deleniti praesentium doloribus
          cupiditate saepe dolorum, adipisci eveniet
           repudiandae totam laudantium aut`,
    },
    {
        id:4,
        img:Pontalon,
        title:"Pontalon",
        description:`Lorem ipsum dolor sit amet consectetur,
         adipisicing elit. Deleniti praesentium doloribus
          cupiditate saepe dolorum,`,
    },
    {
        id:5,
        img:Vest,
        title:"Veste",
        description:`Lorem ipsum dolor sit amet consectetur,
         adipisicing elit. Deleniti praesentium doloribus
          cupiditate saepe dolorum, adipisci eveniet
           repudiandae`,
    },
]

export default function TopProducts({handeleOrder}) {
  return (
    <div>
      <div className='container'>
        {/*start Header section */}
        <div className='text-left mb-32 '>
            <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Product</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum fuga asperiores numquam molestiae unde nam eos, quidem error rem quis repellendus labore modi, assumenda aliquid veniam odit veritatis aspernatur minima.
            </p>
        </div>
        {/*end Header section */}
        {/*start body section */}
        <div className='grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-4 xl:grid-cols-5 gap-20 md:gap-5 place-items-center'>
            {
                ProductsData.map((data)=>(
                    <div
                    data-aos='zoom-in'
                    className='rounded-2xl bg-white dark:bg-gray-800
                  hover:bg-black/80 dark:hover:bg-primary hover:text-white
                    relative shadow-xl duration-300 group max-w-[300px]'
                    >
                        {/* image section */}
                        <div className='h-[100px] '>
                            <img src={data.img} alt=""
                            className='max-w-[140px] block mx-auto
                             transform -translate-y-20 group-hover:scale-105
                              duration-300 drop-shadow-md'
                             />
                        </div>
                        {/* details section */}
                        <div className='p-4 text-center'>
                            {/* start rating */}
                            <div className='w-full flex items-center justify-center
                            gap-1'>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                            </div>
                            <h1 className='text-xl font-bold'>{data.title}</h1>
                            <p className='text-gray-500 group-hover:text-white
                             duration-300 text-sm line-clamp-2'>
                                {data.description}
                            </p>
                            <button className='bg-primary hover:scale-105
                            duration-300 text-white py-1 px-4
                            rounded-full mt-4 group-hover:bg-white
                            group-hover:text-primary'
                            onClick={handeleOrder}
                            >
                                Order Now
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
        {/*end body section */}
      </div>
    </div>
  )
}
