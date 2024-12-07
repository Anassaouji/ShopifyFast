import React from 'react'

import Banner from '../../assets/footer/banner2.jpeg';
import FooterLogo from '../../assets/Logo.jpg';
import { FaInstagram,FaFacebook,FaLinkedin,FaLocationArrow,
    FaMobileAlt
 } from 'react-icons/fa';

const BannerImg={
    backgroundImage:`url(${Banner})`,
    backgroundPosition:'bottom',
    backgroundRepeat:'non-repeat',
    backgroundSize:'cover',
    height:'100%',
    width:'100%',
};

const FooterLinks=[
    {
        title:"Homme",
        link:"/#",
    },
    {
        title:"About",
        link:"/about",
    },
    {
        title:"Contact",
        link:"/contact",
    },
    {
        title:"Blog",
        link:"/blog",
    },
]

function Footer() {
  return (
    <div style={BannerImg} className='text-white'>
      <div className='container'>
        <div data-aos='zoom-in'
         className='grid md:grid-cols-3 pb-44 pt-5 '>
            {/* company details */}
            <div className='py-8 px-4'>
                <h1 className=' sm:text-3xl text-xl font-bold
                 sm:text-left text-justify mb-3 flex items-center gap-3'
                >
                    <img className='max-w-[50px] rounded-full '
                     src={FooterLogo} alt="" />
                    ShopifyFast</h1>
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quidem quod nisi ratione.
                </p>
            </div>
            {/* Footer Links */}
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2
                            md:pl-10 '>
                <div>
                <div className='py-8 px-4 '>
                    <h1 className='sm:text-3xl text-xl font-bold
                        sm:text-left text-justify mb-3 hover:translate-x-1 duration-300
                        text-gray-200'>
                    Important Links
                    </h1>
                    <ul className='flex flex-col gap-3'>
                        {
                            FooterLinks.map((link)=>(
                                <li className='cursor-pointer hover:text-primary
                                ' key={link.title}>
                                    <span>{link.title}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                </div>
                <div>
                <div className='py-8 px-4 '>
                    <h1 className='sm:text-3xl text-xl font-bold
                        sm:text-left text-justify mb-3 hover:translate-x-1 duration-300
                        text-gray-200'>
                    Links
                    </h1>
                    <ul className='flex flex-col gap-3'>
                        {
                            FooterLinks.map((link)=>(
                                <li className='cursor-pointer hover:text-primary
                                ' key={link.title}>
                                    <span>{link.title}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                </div>
                {/* social links */}
                <div>
                    <div className="flex items-center gap-3 mt-6">
                        <a href="/linkedin">
                        <FaLinkedin className='text-3xl'/>
                        </a>
                        <a href="/instagramm">
                        <FaInstagram className='text-3xl'/>
                        </a>
                        <a href="/facebook">
                        <FaFacebook className='text-3xl'/>
                        </a>
                    </div>
                    <div className='mt-6'>
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow/>
                            <p>Safi, Marakech-safi</p>
                        </div>
                        <div className='flex items-center gap-3 mt-3'>
                            <FaMobileAlt/>
                            <p>+212 645738453</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
