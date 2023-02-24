import React from 'react';

function Card(props) {
    return (
        <div className='card text-center  w-full'>
            <div className='content bg-gray-200 rounded-t-lg px-7'>
                <div className=' pt-7 text-base font-medium text-purple-600'>Catergory</div>
                <p className='font-semibold text-lg'>Cybersoft FrontEnd Developer</p>
                <p className='font-thin pt-2 pb-8'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, sit dolorum facilis incidunt dicta id! Porro aut atque blanditiis nihil asperiores neque maiores accusantium corporis provident. Tempore excepturi modi necessitatibus?
                </p>
            </div>
            <div className='footer flex items-center justify-between p-2 rounded-b-lg bg-gray-300'>
                <div>1BTC</div>
                <button className='p-2 hover:bg-gray-300 bg-purple-600 rounded-md text-white hover:text-purple-300 text-sm font-medium transition duration-500'>
                 

                        Register
                    
                </button>
            </div>
            
        </div>
    );
}

export default Card;