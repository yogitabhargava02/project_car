import React, { useState } from 'react';
import cardData from './Cards.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

const CardPage = () => {
  const [cars, setCars] = useState(cardData.cars);

  return (
    <div className="container mx-auto py-6 bg-blue">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cars.map((car) => (
          <div key={car.car_id} className="card rounded-3xl" style={{ backgroundColor: "#F0F8FF", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", height:"98%"}}>
            <img src={car.car_image_url} alt={car.car_title} className="rounded-3xl p-4" />

            <div class="flex justify-between">
              <div className='pl-4 text-3xl'>
                <h2>{car.car_title}</h2>
              </div>
              <div className='flex p-2 pr-4'>
                <p className='border-dashed border-2 border-indigo-600 rounded-xl p-1 w-50'>{car.year_manufactured}</p>
              </div>
            </div>

            <div class='flex justify-between p-6 pb-2 pt-2 '>
              <div class='flex flex-col'>
                <p className="mr-12 pb-6">{car.seating_capacity} People</p>
                <p>{car.fuel_type}</p>
              </div>
              <div class='flex flex-col'>
                <p className='pb-6'>{car.mileage}km/1-litre</p>
                <p className="mr-4">{car.transmission_type}</p>
              </div>
            </div>

            <div className='flex flex-row justify-between pl-4 pr-1 pb-4'>
            <div className='text-lg flex-end'>
            <p className='text-lg p-4'>{car.price_per_month}</p>
            </div>
              
                
                <div className='flex justify-between p-2'>
                <FontAwesomeIcon icon={farHeart} className='text-3xl ml-2 pr-2 pt-2' />
                <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full shadow-md pb-2 pl-2'>
  Rent now
</button>

                </div>
               
              </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPage;
