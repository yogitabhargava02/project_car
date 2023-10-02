import React from 'react'
import 'tailwindcss/tailwind.css';
import CardPage from './CardPage';
const Home = () => {
  return (
    <div>
<div className='flex justify-space p-14'>
<input
   type="text"
   placeholder="Search here"
  
  />
  <h2>Relevance </h2>
  <h2>All brands</h2>
</div>
      <div className="container w-full mx-auto bg-blue p-5">

<CardPage/>

      <div class="grid grid-flow-col justify-stretch ...">
 
</div>
      </div>
    </div>
  )
}

export default Home
