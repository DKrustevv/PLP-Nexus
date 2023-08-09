import { useState } from 'react';
import { filterWatches } from './FilteringService';

const useFilterWatches = (initialWatches) => {
  const sortWatches = (watches, sortOption) => {
    switch (sortOption) {
      case 'az':
        return [...watches].sort((a, b) => a.name.localeCompare(b.name));
      case 'za':
        return [...watches].sort((a, b) => b.name.localeCompare(a.name));
      case 'priceAsc':
        return [...watches].sort((a, b) => a.price - b.price);
      case 'priceDesc':
        return [...watches].sort((a, b) => b.price - a.price);
      default:
        return watches;
    }
  };

  const [filteredAndSortedWatches, setFilteredAndSortedWatches] = useState(initialWatches);

  const handleFilterWatches = (selectedStraps, selectedGenders, priceRange, minRating, sortBy) => {
    const filteredWatches = filterWatches(
      initialWatches,
      selectedStraps,
      selectedGenders,
      priceRange,
      minRating
    );

    const sortedWatches = sortWatches(filteredWatches, sortBy);
    setFilteredAndSortedWatches(sortedWatches);
  };
  const handleSortChange = (newSortOption) => {
    const sortedWatches = sortWatches(filteredAndSortedWatches, newSortOption);
    setFilteredAndSortedWatches(sortedWatches);
  };
  
  return {
    filteredAndSortedWatches,
    handleFilterWatches,
    handleSortChange,
    setFilteredAndSortedWatches,
    sortWatches,
  };
};

export default useFilterWatches;
