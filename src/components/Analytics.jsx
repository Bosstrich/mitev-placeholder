import React from 'react';
import Button from './Button';
import Laptop from '../assets/laptop.jpg'


const Analytics = () => {
    return ( 
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00fd9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p> 
                        Take control of your data like never before. Analyze key metrics, uncover actionable insights, 
                        and make data-driven decisions all in one place. Our dashboard streamlines data visualization,
                         helping you track progress, identify trends, and optimize performance effortlessly.
                    </p>
                    <Button variant='secondary' text="Get Started" className="my-6 mx-auto md:mx-0"/>
                </div>
            </div>
        </div>
     );
}
 
export default Analytics;