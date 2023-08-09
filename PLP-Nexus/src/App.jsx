import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import './App.css';
import database from './assets/database';
import Navbar from './components/NavBar/NavBar';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import SortMenu from './components/SortMenu/SortMenu';
import Footer from './components/Footer/Footer';
import WatchCard from '../Services/RenderWatches';
import useFilterWatches from '../Services/useFilterWatches';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
  const watchesPerRow = 4;
  const initialRowCount = 4;

  const [showAlert, setShowAlert] = useState(false);
  const [addedWatchName, setAddedWatchName] = useState('');

  const {
    filteredAndSortedWatches,
    handleFilterWatches,
    handleSortChange,
  } = useFilterWatches(database.categories[0].watches);

  const totalWatches = filteredAndSortedWatches.length;
  const totalRows = Math.ceil(totalWatches / watchesPerRow);

  const [rowCount, setRowCount] = useState(initialRowCount);
  const [selectedSortOption, setSelectedSortOption] = useState('az');


  useEffect(() => {
    handleSortChange('az');
  }, []);

  const handleLoadMore = () => {
    setRowCount((prevRowCount) => Math.min(prevRowCount + 4, totalRows));
  };

  const handleAddToCart = (watch) => {
    console.log('Added to cart:', watch.name);
    setAddedWatchName(watch.name);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  const snackbarAnchorRef = useRef(null);

  return (
    <>
      <Navbar handleSetFilteredWatches={handleFilterWatches} />
      <SortMenu
        selectedSortOption={selectedSortOption}
        handleSortChange={(newSortOption) => {
          setSelectedSortOption(newSortOption);
          handleSortChange(newSortOption);
        }}
        totalWatches={totalWatches}
      />


      <div className="watches-container-wrapper">
        <div className="watches-container">
          {filteredAndSortedWatches
            .slice(0, rowCount * watchesPerRow)
            .map((watch, index) => (
              <WatchCard
                key={`${watch.name}-${index}`}
                watch={watch}
                handleAddToCart={handleAddToCart}
              />
            ))}
        </div>
        {rowCount < totalRows && (
          <div className="load-more-button" onClick={handleLoadMore}>
            <ExpandMoreIcon />
          </div>
        )}
      </div>
      <div ref={snackbarAnchorRef}>
        <Snackbar
          open={showAlert}
          autoHideDuration={2000}
          onClose={() => setShowAlert(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <div>
            <Alert onClose={() => setShowAlert(false)} severity="success" sx={{ width: '200px' }}>
              Added to Cart: {addedWatchName}
            </Alert>
          </div>
        </Snackbar>
        <Footer />
      </div>
    </>
  );
}

export default App;
