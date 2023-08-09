import PropTypes from 'prop-types';
import './SortMenu.css';

const SortMenu = ({ sortBy, handleSortChange, totalWatches }) => {
  return (
    <div className="sort-menu-container">
      <div className="sort-menu">
        <label htmlFor="sort-select">Sort By:</label>
        <select
          id="sort-select"
          value={sortBy}
          onChange={(event) => handleSortChange(event.target.value)}
          className="sort-select"
        >
          <option value="az">Alphabetical A-Z</option>
          <option value="za">Alphabetical Z-A</option>
          <option value="priceAsc">Price Ascending</option>
          <option value="priceDesc">Price Descending</option>
        </select>
        <p className="total-watches">Total Watches: {totalWatches}</p>
      </div>
    </div>
  );
};

// Prop validation
SortMenu.propTypes = {
  sortBy: PropTypes.string.isRequired,
  handleSortChange: PropTypes.func.isRequired,
  totalWatches: PropTypes.number.isRequired,
};

export default SortMenu;
