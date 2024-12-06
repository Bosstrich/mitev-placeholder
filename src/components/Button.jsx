import React from 'react';

const Button = ({variant = 'primary', text, className= ''}) => {

    const btnVariant = {

        primary: `bg-[#00fd9a] w-[200px] rounded-md font-medium py-3 text-black hover:opacity-90`,
        secondary: 'text-[#00fd9a] bg-black w-[200px] rounded-md font-medium py-3 hover:opacity-90',
        white: 'text-black bg-white w-[200px] rounded-md font-medium py-3 hover:opacity-90'
    }

    return (
        
        <button className={`${btnVariant[variant]} ${className}`}>{text}</button>

     );
}
 
export default Button;
