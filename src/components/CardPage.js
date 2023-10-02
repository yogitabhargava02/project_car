import React, { useState } from 'react';
import cardData from './Cards.json';

const CardPage = () => {
  const [cars, setCars] = useState(cardData.cars);

  return (
    <div className="container mx-auto py-8 bg-blue">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cars.map((car) => (
          <div key={car.car_id} className="card">
            <img src={car.car_image_url} alt={car.car_title} />
            <h2>{car.car_title}</h2>
            <p>Year: {car.year_manufactured}</p>
            <p>Seating Capacity: {car.seating_capacity}</p>
            <p>Fuel Type: {car.fuel_type}</p>
            <p>Transmission Type: {car.transmission_type}</p>
            <p>Mileage: {car.mileage}</p>
            <p>Price per Month: ${car.price_per_month}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPage;
