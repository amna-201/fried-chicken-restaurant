import React from 'react';
import Rating from 'react-rating-stars-component';
import './Restaurantcard.css'
const RestaurantCard = ({ restaurant, deleteRestaurant, changeRating }) => {
  const { id, name, location, rating, image, menuImage } = restaurant;

  return (
    <div className='card'>
      <h2 data-testid="restaurant-name">{name}</h2>
      <img src={image} alt={name} style={{ maxWidth: '300px',maxHeight:'80PX'  }} />
      <br />
      <img src={menuImage} alt={`${name} Menu`} style={{ maxWidth: '70px',maxHeight:'100PX' }} />
      <br />
      <p data-testid="restaurant-location">Location: {location}</p>
      <Rating
        count={5}
        value={rating}
        size={24}
        activeColor="#ffd700"
        onChange={(newRating) => changeRating(id, newRating)} 
      />
      <button onClick={() => deleteRestaurant(id)}>Delete </button>
     </div>
  );
};

export default RestaurantCard;
