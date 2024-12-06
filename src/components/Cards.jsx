import React from 'react';
import Button from './Button';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
    return ( 
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <Card 
                    title='Single User'
                    price='149'
                    benefits={['500GB Storage', '1 User Allowed', 'Send up to 2GB']}
                    image={Single}
                    marginY={8}
                    btnVariant={'primary'}
                    btnText={'Start Trial'}
                    btnClass={'my-8 mx-auto'}
                />
                <Card 
                    title='Partnership'
                    price='199'
                    benefits={['1TB Storage', '3 Users Allowed', 'Send up to 10GB']}
                    image={Double}
                    marginY={4}
                    btnVariant={'secondary'}
                    btnText={'Start Trial'}
                    btnClass={'my-8 mx-auto'}
                />
                <Card 
                    title='Group Account'
                    price='299'
                    benefits={['5TB Storage', '10 Users Allowed', 'Send up to 20GB']}
                    image={Double}
                    marginY={4}
                    btnVariant={'primary'}
                    btnText={'Start Trial'}
                    btnClass={'my-8 mx-auto'}
                /> 
            </div>
        </div>
     );
}
 
export default Cards;

    const Card = ({ title, price, benefits=['benefit1', 'benefit2', 'benefit3'], image, marginY, 
                    btnVariant,btnText, btnClass }) => {
        return (
            <div className={`w-full shadow-xl flex flex-col p-4 my-${marginY} rounded-lg hover:scale-105 duration-300`}>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={image} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>{title}</h2>
                <p className='text-center text-4xl font-bold'>${price}</p>

                <div className='text-center font-medium'>
                    {benefits.map((benefit, index) => {

                        return index === 0?
                         <p className='py-2 border-b mx-8 mt-8'>{benefit}</p>
                            :
                        <p className='py-2 border-b mx-8'>{benefit}</p>

                    })}
                </div>
                <Button variant={btnVariant} text={btnText} className={btnClass} />
            </div>
        );
    };
