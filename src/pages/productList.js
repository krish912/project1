import React, { useState, useEffect } from 'react';
import './ProductList.css'; // Import custom styles
import PetForm from './petForm';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [petTypeFilter, setPetTypeFilter] = useState('');
  const [breedFilter, setBreedFilter] = useState('');
  const [ageRangeFilter, setAgeRangeFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/dogsList")
      .then(response => response.json())
      .then(data => {
        setPets(data.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    applyFilters();
  }, [pets, petTypeFilter, breedFilter, ageRangeFilter]);

  const applyFilters = () => {
    let filteredResults = [...pets];

    // Apply pet type filter
    if (petTypeFilter) {
      filteredResults = filteredResults.filter(pet => pet.type.toLowerCase() === petTypeFilter.toLowerCase());
    }

    // Apply breed filter
    if (breedFilter) {
      filteredResults = filteredResults.filter(pet => pet.breed.toLowerCase() === breedFilter.toLowerCase());
    }

    // Apply age range filter
    if (ageRangeFilter) {
      const [minAge, maxAge] = ageRangeFilter.split('-').map(Number);
      filteredResults = filteredResults.filter(pet => pet.age >= minAge && pet.age <= maxAge);
    }

    setFilteredPets(filteredResults);
  };

  const handleTypeFilterChange = (event) => {
    const selectedType = event.target.value;
    setPetTypeFilter(selectedType);
    setBreedFilter(''); // Reset breed filter when type filter changes
  };

  const handleBreedFilterChange = (event) => {
    setBreedFilter(event.target.value);
  };

  const handleAgeRangeFilterChange = (event) => {
    setAgeRangeFilter(event.target.value);
  };

  // Generate breed options based on filtered pets
  const breedOptions = petTypeFilter 
    ? [...new Set(pets.filter(pet => pet.type.toLowerCase() === petTypeFilter.toLowerCase()).map(pet => pet.breed))]
        .sort()
        .map(breed => <option key={breed} value={breed}>{breed}</option>)
    : [...new Set(pets.map(pet => pet.breed))]
        .sort()
        .map(breed => <option key={breed} value={breed}>{breed}</option>);

  const handlePetSubmit = (newPet) => {
    // Update pets list with the new pet
    setPets([...pets, { ...newPet, id: pets.length + 1 }]);
  };

  const handleAdoptNowClick = (id) => {
    // Navigate to the adoption page with the pet ID as a parameter
    navigate(`/pets/${id}`);
  };

  return (
    <div className="product-list-container">
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div className="sidebar">
        <h3>Filter Options</h3>
        <div className="filters-container">
          <div className="filter-section">
            <label htmlFor="typeFilter" className="filter-label">Pet Type:</label>
            <select id="typeFilter" className="filter-select" value={petTypeFilter} onChange={handleTypeFilterChange}>
              <option value="">All Types</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              {/* Add more pet types as needed */}
            </select>
          </div>
          <div className="filter-section">
            <label htmlFor="breedFilter" className="filter-label">Breed:</label>
            <select id="breedFilter" className="filter-select" value={breedFilter} onChange={handleBreedFilterChange}>
              <option value="">All Breeds</option>
              {breedOptions}
            </select>
          </div>
          <div className="filter-section">
            <label htmlFor="ageRangeFilter" className="filter-label">Age Range:</label>
            <select id="ageRangeFilter" className="filter-select" value={ageRangeFilter} onChange={handleAgeRangeFilterChange}>
              <option value="">All Ages</option>
              <option value="0-1">0 - 1 year</option>
              <option value="1-3">1 - 3 years</option>
              <option value="3-6">3 - 6 years</option>
              {/* Add more age ranges as needed */}
            </select>
          </div>
        </div>
        <Button onClick={() => navigate('/submit-pet')}>Add a New Pet</Button>
      </div>

      <div className="main-content">
        {loading ? (
          <p>Loading pets...</p>
        ) : filteredPets.length > 0 ? (
          <div className="pet-list">
            {filteredPets.map(pet => (
              <div key={pet.id} className="pet-card">
                <img src={pet.images} alt={pet.name} className="pet-image" />
                <div className="pet-details">
                  <h3 className="pet-name">{pet.name}</h3>
                  <p className="pet-type">{pet.type}</p>
                  <p className="pet-breed">Breed: {pet.breed}</p>
                  <p className="pet-age">{pet.age} years old</p>
                  <button className="adopt-button" onClick={() => handleAdoptNowClick(pet.id)}>Adopt Now</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-results-message">No pets match the selected criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
