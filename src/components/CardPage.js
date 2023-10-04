import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as farHeart,
  faGasPump,
  faPeopleCarry,
  faTachometerAlt,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const CardPage = ({ currentPage, itemsPerPage, cars }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const carsToDisplay = cars.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto py-6 bg-blue">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {carsToDisplay.map((car) => (
          <div
            key={car.car_id}
            className="card rounded-3xl shadow-lg"
            style={{ backgroundColor: "#F0F8FF", height: "100%" }}
          >
            <img
              src={car.car_image_url}
              alt={car.car_title}
              className="rounded-3xl p-4"
            />

            <div className="flex justify-between p-4 pb-2">
              <div className="text-3xl">
                <h2>{car.car_title}</h2>
              </div>
              <div className="flex items-center">
                <p className="border-dashed border-2 border-indigo-600 rounded-xl p-1 ml-2">
                  {car.year_manufactured}
                </p>
              </div>
            </div>

            <div className="flex justify-between p-4 pb-0">
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faPeopleCarry} />
                  <p className="ml-2">{car.seating_capacity} People</p>
                </div>

                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faGasPump} className="mr-2" />
                  <p>{car.fuel_type}</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faTachometerAlt} />
                  <p className="ml-2">{car.mileage}</p>
                </div>

                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCog} />
                  <p className="ml-2">{car.transmission_type}</p>
                </div>
              </div>
            </div>
            <div className="border-solid border ml-2 mr-2"></div>

            <div className="flex justify-between p-4 pb-1 pt-0">
              <div className="text-lg">
                <p className="text-xl font-medium p-4">
                  ${car.price_per_month}/month
                </p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={farHeart} className="text-3xl ml-2" />
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full shadow-md ml-2">
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
