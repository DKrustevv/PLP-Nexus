import PropTypes from 'prop-types'; // Import PropTypes
import {
  List,
  ListItem,
  Divider,
  Button,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Slider,
  Rating, // Import the Rating component
} from '@mui/material';

const FilterMenu = ({
  options,
  selectedStraps,
  selectedGenders,
  priceRange,
  minRating,
  setSelectedStraps,
  setSelectedGenders,
  setPriceRange,
  setMinRating,
  handleApplyFilters,
}) => {
  
  const handleStrapCheckboxChange = (option) => {
    if (selectedStraps.includes(option)) {
      setSelectedStraps((prevSelectedStraps) =>
        prevSelectedStraps.filter((strap) => strap !== option)
      );
    } else {
      setSelectedStraps((prevSelectedStraps) => [...prevSelectedStraps, option]);
    }
  };
  
  const handleGenderCheckboxChange = (option) => {
    if (selectedGenders.includes(option)) {
      setSelectedGenders((prevSelectedGenders) =>
        prevSelectedGenders.filter((gender) => gender !== option)
      );
    } else {
      setSelectedGenders((prevSelectedGenders) => [...prevSelectedGenders, option]);
    }
  };
  
  const handlePriceSliderChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleMinRatingChange = (event, newValue) => {
    setMinRating(newValue);
  };

  const handleApplyFiltersAndLog = () => {
    console.log('Selected Straps:', selectedStraps);
    console.log('Selected Genders:', selectedGenders);
    console.log('Price Range:', priceRange);
    console.log('Minimum Rating:', minRating);
    handleApplyFilters();
  };

  return (
    <div style={styles.filterMenu}>
      
      <Typography variant="h6" style={styles.menuTitle}>
        Filter Menu
      </Typography>
      <Divider style={styles.divider} />
      <List>
        <ListItem style={styles.listItem}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Gender</Typography>
            <FormGroup>
              {[ 'Male', 'Female'].map((option, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      color="primary"
                      checked={selectedGenders.includes(option)}
                      onChange={() => handleGenderCheckboxChange(option)}
                    />
                  }
                  label={option}
                />
              ))}
            </FormGroup>
          </FormControl>
        </ListItem>
        <Divider style={styles.divider} />
        <ListItem style={styles.listItem}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Strap</Typography>
            <FormGroup>
              {options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      color="primary"
                      checked={selectedStraps.includes(option)}
                      onChange={() => handleStrapCheckboxChange(option)}
                    />
                  }
                  label={option}
                />
              ))}
            </FormGroup>
          </FormControl>
        </ListItem>
        <Divider style={styles.divider} />
        <ListItem style={styles.listItem}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Price Range</Typography>
            <Slider
              value={priceRange}
              onChange={handlePriceSliderChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              max={2000}
              step={100}
            />
            <Typography variant="body2" style={styles.sliderValue}>
              ${priceRange[0]} - ${priceRange[1]}
            </Typography>
          </FormControl>
        </ListItem>
        <ListItem style={styles.listItem}>
          <FormControl component="fieldset">
            <Typography variant="subtitle1">Minimum Rating</Typography>
            <Rating // Use the Rating component
              name="min-rating"
              value={minRating}
              onChange={(event, newValue) => handleMinRatingChange(event, newValue)}
            />
            <Typography variant="body2" style={styles.sliderValue}>
              {minRating.toFixed(1)} & up
            </Typography>
          </FormControl>
        </ListItem>
      </List>
      <Divider style={styles.divider} />
      <Button
        variant="contained"
        color="primary"
        onClick={handleApplyFiltersAndLog}
        style={styles.applyButton}
      >
        Apply Filters
      </Button>
    </div>
  );
};

const styles = {
  filterMenu: {
    width: '300px',
    padding: '16px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
  },
  menuTitle: {
    marginBottom: '16px',
    textAlign: 'center',
  },
  divider: {
    margin: '8px 0',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '12px',
  },
  sliderValue: {
    textAlign: 'center',
  },
  applyButton: {
    width: '100%',
    borderRadius: '4px',
  },
};

export default FilterMenu;
// Prop validation
FilterMenu.propTypes = {
  options: PropTypes.array.isRequired,
  selectedStraps: PropTypes.array.isRequired,
  selectedWaterResistances: PropTypes.array.isRequired,
  selectedGenders: PropTypes.array.isRequired,
  selectedDisplayTypes: PropTypes.array.isRequired,
  priceRange: PropTypes.array.isRequired,
  minRating: PropTypes.number.isRequired,
  setSelectedStraps: PropTypes.func.isRequired,
  setSelectedWaterResistances: PropTypes.func.isRequired,
  setSelectedGenders: PropTypes.func.isRequired,
  setSelectedDisplayTypes: PropTypes.func.isRequired,
  setPriceRange: PropTypes.func.isRequired,
  setMinRating: PropTypes.func.isRequired,
  handleApplyFilters: PropTypes.func.isRequired,
};
