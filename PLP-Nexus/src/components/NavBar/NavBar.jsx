import { useState } from 'react';
import PropTypes from 'prop-types'; 
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../../assets/images/shopunder.png';
import './NavBar.css';
import FilterMenu from '../FilterMenu/FilterMenu';

const Navbar = ({ handleSetFilteredWatches }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [selectedStraps, setSelectedStraps] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]); 
  const [minRating, setMinRating] = useState(0); 
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleApplyFilters = () => {
    setIsMenuOpen(false);
    handleSetFilteredWatches(selectedStraps, selectedGenders, priceRange, minRating);
  };

  const filterOptions = ['metal', 'leather', 'silicone']; 

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: 'white', color: 'black', width: '100%' }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} alt="Logo" className="logo" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <IconButton color="inherit">
            <ShoppingCartIcon sx={{ fontSize: 42 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <List>
          <ListItem>
            <FilterMenu
              options={filterOptions}
              selectedGenders={selectedGenders}
              selectedStraps={selectedStraps}
              priceRange={priceRange}
              minRating={minRating}
              setSelectedStraps={setSelectedStraps}
              setSelectedGenders={setSelectedGenders}
              setPriceRange={setPriceRange}
              setMinRating={setMinRating}
              handleApplyFilters={handleApplyFilters}
            />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

// Prop validation
Navbar.propTypes = {
  handleSetFilteredWatches: PropTypes.func.isRequired,
};

export default Navbar;
