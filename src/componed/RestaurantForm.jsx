import React, { useState } from 'react';
import Rating from 'react-rating-stars-component';
import './Restaurantform.css';
const RestaurantForm = ({ addRestaurant }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const [menuImage, setMenuImage] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !location || !image || !menuImage) return;
    const id = Math.floor(Math.random() * 1000) + 1;
    const restaurant = { id, name, location, rating, image, menuImage };
    addRestaurant(restaurant);
    setName('');
    setLocation('');
    setImage('');
    setMenuImage('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Restaurant Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Location" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Image URL" 
        value={image} 
        onChange={(e) => setImage(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Menu Image URL" 
        value={menuImage} 
        onChange={(e) => setMenuImage(e.target.value)} 
      />
      <Rating
        count={5}
        value={rating}
        onChange={(value) => setRating(value)}
        size={24}
        activeColor="#ffd700"
      />
      <button type="submit">Add </button>
    </form>
  );
};

export default RestaurantForm;
