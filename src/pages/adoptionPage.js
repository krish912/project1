// AdoptionPage.js

import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './AdoptionPage.css'; // Import your CSS styles here

const AdoptionPage = () => {
  const location = useLocation();

  const petId = useParams();
  const [pet, setPet] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const id1 = JSON.stringify(petId);
  const [minAge, maxAge] = id1.split(':').map(String);
  const id3 = parseInt(maxAge);
  let matches = maxAge.match(/\d+/g);

  useEffect(() => {
    const fetchPetDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://adopet-nodework.onrender.com/pets/${matches}`);
        if (!response.ok) {
          throw new Error('Failed to fetch pet details');
        }
        const data = await response.json();
        setPet(data.message);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching pet details:', error.message);
        setIsLoading(false);
      }
    };

    fetchPetDetails();
  }, [petId]);
  return (
    <div className="adoption-page-container">
      {/* <h2 className="page-title">Adopt Now</h2> */}
      {isLoading ? (
        <p>Loading pet details...</p>
      ) : pet ? (
        <div className="adoptionPet-details">
          <div className="pet-image-container">
            {pet.images.map((image, index) => (
              <img key={index} src={image} alt={`Pet ${index + 1}`} className="pet-image" />
            ))}
          </div>
          <div className="pet-info">
            <h3 className="pet-name">{pet.name}</h3>
            <p className="pet-type">Type: {pet.type}</p>
            <p className="pet-breed">Breed: {pet.breed}</p>
            <p className="pet-age">Age: {pet.age} years old</p>
            <p className="pet-description">{pet.description}</p>
            <div className="adoption-info">
              <p className="adoption-fee">Adoption Fee: ${pet.adoptionFee}</p>
              <p className="adoption-location">Location: {pet.location}</p>
              <p className="contact-info">Contact: {pet.contact}</p>
              <p className="contact-info">Owner: {pet.contact}</p>
            </div>
            <button className="adopt-button">Adopt {pet.name}</button>
          </div>
        </div>
      ) : (
        <p>Pet not found</p>
      )}
      {/* Additional sections (e.g., testimonials, related pets) can be added here */}
    </div>
  );
};

export default AdoptionPage;
