import React, { useState } from 'react';
import './App.css';
import database from './assets/database';
import Navbar from './components/NavBar/NavBar'; // Import your Navbar component here

function renderWatchCards(watches) {
  return watches.map((watch) => (
    <div key={watch.name} className="watch-card">
      {/* Set a fixed height to the image */}
      <img src={watch.image} alt={watch.name} className="watch-image" />
      <h3>{watch.name}</h3>
      <p>{watch.description}</p>
      <p>Price: ${watch.price}</p>
      <p>Ratings: {watch.ratings}</p>
    </div>
  ));
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar /> {/* Use your Navbar component here */}
  
  
      <div className="watches-container">
        {/* Call the renderWatchCards function with the watches data */}
        {renderWatchCards(database.categories[0].watches)}
      </div>
      
    </>
  );
}

export default App;
