import React from 'react';
import PropTypes from 'prop-types'; 
import { Rating, Button } from '@mui/material';

const WatchCard = ({ watch, handleAddToCart }) => (
  <div className="watch-card">
    <img src={watch.image} alt={watch.name} className="watch-image" />
    <h3 className="watch-name">{watch.name}</h3>
    <p className="watch-description">{watch.description}</p>
    <p className="watch-price">Price: ${watch.price}</p>
    <div className="watch-ratings">
      <Rating name="rating" value={watch.ratings} precision={0.1} />
    </div>
    <Button
      variant="contained"
      color="primary"
      onClick={() => handleAddToCart(watch)}
      className="add-to-cart-button"
    >
      Add to Cart
    </Button>
  </div>
);

// Prop validation
WatchCard.propTypes = {
  watch: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ratings: PropTypes.number.isRequired,
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default WatchCard;
