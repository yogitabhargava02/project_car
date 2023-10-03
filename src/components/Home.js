import React, {useState} from 'react';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import CardPage from './CardPage';
import Pagination from "./Pagination";
import cardData from "./Cards.json";
import { useParams } from 'react-router-dom';
const Home = () => {
  const { page } = useParams();
  const initialPage = page ? parseInt(page, 10) : 1; // Parse page parameter from URL
  const [currentPage, setCurrentPage] = useState(initialPage);
  const itemsPerPage = 10; // Number of items per page
  const totalItems = cardData.cars.length; // Total number of items
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <div className='flex p-6  m-10 mb-0 rounded-lg' style={{ backgroundColor: "#F0F8FF", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>



      
      <div className='relative w-15'>
          
          <input
            type="text"
            placeholder="Search here"
            className='text-lg p-1 pl-10 w-60 border rounded-xl focus:outline-none focus:border-blue-500'
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className='text-gray-400' />
          </div>
        </div>
      
        <div className='mr-19 ml-5 flex'>
          <h2>Relevance</h2>
          <FontAwesomeIcon icon={faAngleDown} className='p-1.5'/> {/* Use the imported icon */}
        </div>
        <div className='mr-1 ml-5 flex'>
          <h2>All Brands</h2>
          <FontAwesomeIcon icon={faAngleDown} className='p-1.5' /> {/* Use the imported icon */}
        </div>
      </div>
      <div className="container w-full mx-auto bg-blue p-6">
        <CardPage />
        <div className="grid grid-flow-col justify-stretch ..."></div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />


    </div>


 
  );
}

export default Home;
