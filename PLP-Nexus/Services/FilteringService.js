
export function filterWatches(watches, selectedStraps, selectedGenders, priceRange, minRating) {
    return watches
      .filter((watch) => selectedStraps.length === 0 || selectedStraps.includes(watch.strap))
      .filter((watch) => selectedGenders.length === 0 || selectedGenders.includes(watch.gender))
      .filter((watch) => watch.price >= priceRange[0] && watch.price <= priceRange[1])
      .filter((watch) => watch.ratings >= minRating);
  }
  