import { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Aos from 'aos';
import 'aos/dist/aos.css';
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Notified from './components/Notified/Notified';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
function App() {
  const [order,setOrder]=useState(false);
  const handeleOrder=()=>{
    setOrder(!order);
  };
    useEffect(()=>{
      Aos.init({
        offset:100,
        duration:800,
        easing:'ease-in-sine',
        delay:100,
      });
      Aos.refresh();
    },[]);
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar handeleOrder={handeleOrder}/>
      <Hero handeleOrder={handeleOrder}/>
      <Products/>
      <TopProducts handeleOrder={handeleOrder}/>
      <Banner/>
      <Notified/>
      <Products/>
      <Testimonials/>
      <Footer/>
      <Form order={order} setOrder={setOrder}/>     
    </div>
  );
}

export default App;
