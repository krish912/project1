import React, { useState, useEffect } from 'react';
import './ProductList.css'; // Import custom styles

const ProductList = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceRangeFilter, setPriceRangeFilter] = useState('');
  const [sortBy, setSortBy] = useState('price-low-to-high');

  useEffect(() => {
    filterProducts();
  }, [products, categoryFilter, priceRangeFilter, sortBy]);

  const filterProducts = () => {
    let filtered = [...products];

    // Apply category filter
    if (categoryFilter) {
      filtered = filtered.filter(product => product.category.toLowerCase() === categoryFilter.toLowerCase());
    }

    // Apply price range filter
    if (priceRangeFilter) {
      const [minPrice, maxPrice] = priceRangeFilter.split('-').map(Number);
      filtered = filtered.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low-to-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-to-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setPriceRangeFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Explore Our Collection</h2>
      <div className="filters-container">
        <div className="filter-section">
          <label htmlFor="categoryFilter" className="filter-label">Category:</label>
          <select id="categoryFilter" className="filter-select" value={categoryFilter} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div className="filter-section">
          <label htmlFor="priceRangeFilter" className="filter-label">Price Range:</label>
          <select id="priceRangeFilter" className="filter-select" value={priceRangeFilter} onChange={handlePriceRangeChange}>
            <option value="">All Prices</option>
            <option value="0-50">$0 - $50</option>
            <option value="51-100">$51 - $100</option>
            {/* Add more price range options */}
          </select>
        </div>
        <div className="filter-section">
          <label htmlFor="sortBy" className="filter-label">Sort By:</label>
          <select id="sortBy" className="filter-select" value={sortBy} onChange={handleSortChange}>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
            {/* Add more sorting options */}
          </select>
        </div>
      </div>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={`images/${product.image}`} alt={product.name} className="product-image" />
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">${product.price}</p>
                <button className="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results-message">No products found matching the selected criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
