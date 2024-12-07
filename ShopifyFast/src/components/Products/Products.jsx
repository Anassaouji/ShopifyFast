import React from 'react'
import Capuche from '../../assets/Man/capuche.jpeg';
import Ensemble from '../../assets/Man/Ensemble.jpeg';
import Pontalon from '../../assets/Man/pontalon.jpeg';
import Vest from '../../assets/Man/vest.jpeg';
import Outfit from '../../assets/Man/outfit.jpeg';
import { FaStar } from 'react-icons/fa6';

const ProductsData=[
    {
        id:1,
        img:Ensemble,
        titre:"Ensemble",
        rating:4.1,
        color:"Black",
        aosDelay:"0"
    },
    {
        id:2,
        img:Vest,
        titre:"Vest",
        rating:4.2,
        color:"white",
        aosDelay:"100"
    },
    {
        id:3,
        img:Outfit,
        titre:"Outfit",
        rating:4.4,
        color:"yellow",
        aosDelay:"400"
    },
    {
        id:4,
        img:Pontalon,
        titre:"Pontalent",
        rating:4.5,
        color:"brown",
        aosDelay:"165"
    },
    {
        id:5,
        img:Capuche,
        titre:"Capuche",
        rating:4.9,
        color:"Red",
        aosDelay:"800"
    },
]

export default function Products() {
  return (
    <div className='mt-14 mb-12 '>
      <div className='container'>
        {/*start header section */}        
        <div className='text-center mb-10 max-w-[600px]  mx-auto'>
            <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Product</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dicta.
            </p>
        </div>
        {/*end header section */}
        {/*start body section */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4
            lg:grid-cols-5 place-items-center gap-5'
            >
                {/*start card section */}
                {
                    ProductsData.map((product)=>(
                        <div
                          data-aos="fade-up"
                          data-aos-delay={product.aosDelay}
                         key={product.id} className='space-y-3'>
                          <img src={product.img} alt=""
                          className='h-[220px] w-[150px] object-cover rounded-md' />
                          <div>
                            <h3 className='font-semibold '
                            >{product.titre}</h3>
                            <p className='text-sm text-gray-600'
                            >{product.color}</p>
                            <div className='flex items-center gap-1'>
                              <FaStar className='text-yellow-400 '/>
                              <span>{product.rating}</span>
                            </div>
                          </div>
                        </div>
                    ))}
                {/*end card section */}
            </div>
            {/* view all button */}
            <div className='flex justify-center'>
              <button
               className='text-center mt-10 cursor-pointer
               bg-primary text-white py-1 px-5 rounded-md'>
                View All Products</button>
            </div>
        </div>
        {/*end body section */}
      </div>
    </div>
  )
}
