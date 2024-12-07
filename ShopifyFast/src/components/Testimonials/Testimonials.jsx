import React from 'react'
import Slider from 'react-slick'
import Img1 from '../../assets/Testimonial/img1.jpeg'
import Img2 from '../../assets/Testimonial/img2.jpeg'
import Img3 from '../../assets/Testimonial/img3.jpeg'
import Img4 from '../../assets/Testimonial/img4.jpeg'
import Img5 from '../../assets/Testimonial/img5.jpeg'
const TestimonialData=[
    {
        id:1,
        name:"Victor",
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Dolorem, culpa! Corporis fuga odit vero. Aliquam alias 
         dolorem reprehenderit`,
        img:Img1,
    },
    {
        id:2,
        name:"Anass",
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Dolorem, culpa! Corporis fuga odit vero. Aliquam alias 
         dolorem reprehenderit`,
        img:Img2,
    },
    {
        id:3,
        name:"Yassin",
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Dolorem, culpa! Corporis fuga odit vero. Aliquam alias 
         dolorem reprehenderitr`,
        img:Img3,
    },
    {
        id:4,
        name:"Khalid",
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Dolorem, culpa! Corporis fuga odit vero. Aliquam alias 
         dolorem reprehenderit`,
        img:Img4,
    },
    {
        id:5,
        name:"Ahmad",
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Dolorem, culpa! Corporis fuga odit vero. Aliquam alias 
         dolorem reprehenderit`,
        img:Img5,
    },
]

const Testimonials = () => {
    var settings={
        // dots:true,
        arrows:false,
        infinite:true,
        speed:500,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:'linear',
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite:true,
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    initialSlide:2,
                },
            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ]
    }
  return (
    <div className='py-10 mb-10'>
      <div className='container'>
        {/* Header section  */}
        <div className='text-center mb-10 max-w-[600px]  mx-auto'>
            <p data-aos="fade-up" className='text-sm text-primary'>What our customers are saying</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonial</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dicta.
            </p>
        </div>
        {/* Testimonial cards */}
        <div data-aos="zoom-in" className=''>
            <Slider {...settings}>{
                TestimonialData.map((data)=>(
                    <div className='my-6 '>
                    <div key={data.id} 
                    className='flex flex-col gap-4 shadow-lg py-8 px-6
                    mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative '>
                        <div className='mb-4 '>
                            <img src={data.img} alt=""
                            className='rounded-full w-20 h-20 ' />
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <div className='space-y-3 '>
                            <p className='text-xs text-gray-500 dark:text-white'
                            >{data.text} </p>
                            <h1 className='text-xl font-bold text-black/80 dark:text-white'>
                            {data.name}
                            </h1>
                            </div>
                        </div>
                        <p className='text-black/20 text-9xl font-serif
                         absolute top-0 right-0'>
                        </p>
                    </div>
                    </div>
                ))}                
            </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
