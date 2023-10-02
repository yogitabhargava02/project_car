import React from 'react';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you need
import CardPage from './CardPage';

const Home = () => {
  return (
    <div>
      <div className='flex p-6 m-10 rounded-sm' style={{ backgroundColor: "#F0F8FF", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>



      
      <div className='relative w-15'>
          
          <input
            type="text"
            placeholder="Search here"
            className='text-lg p-1 pl-10 w-13 border rounded focus:outline-none focus:border-blue-500'
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className='text-gray-400' /> {/* Use the correct imported icon */}
          </div>
        </div>
      
        <div className='mr-19 flex'>
          <h2>Relevance</h2>
          <FontAwesomeIcon icon={faAngleDown} className='p-1.5'/> {/* Use the imported icon */}
        </div>
        <div className='mr-1 flex'>
          <h2>All Brands</h2>
          <FontAwesomeIcon icon={faAngleDown} className='p-1.5' /> {/* Use the imported icon */}
        </div>
      </div>
      <div className="container w-full mx-auto bg-blue p-6">
        <CardPage />
        <div className="grid grid-flow-col justify-stretch ..."></div>
      </div>
      <div className='flex p-6 m-10 rounded-sm' style={{ backgroundColor: "#F0F8FF", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>


</div>
    </div>


 
  );
}

export default Home;
