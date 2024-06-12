import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Reviews.css';
import defaultProfilePic from '../../assets/defaultpp.jpg';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/reviews')
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the reviews!', error);
      });
  }, []);

  return (
    <div className='reviews-container'>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className='review-item'>
            <div className='review-profile'>
              <img
                src={review.profile_image ? `http://localhost:3001${review.profile_image}` : defaultProfilePic}
                alt='Profile'
                className='profile-pic'
              />
              <p>{review.first_name} {review.last_name}</p>
            </div>
            <div className='review-content'>
              <div className='rating-display'>
                <strong>Rating:</strong>
                {['kebersihan', 'pelayanan', 'kecepatan', 'profesional'].map(category => (
                  <div key={category} className='rating-category'>
                    <span className='category-title'>{category.charAt(0).toUpperCase() + category.slice(1)}:</span>
                    <span className='category-stars'>
                      {[...Array(5)].map((_, index) => (
                        <span key={index} className={`star ${index < (review[category] || 0) ? 'filled' : ''}`}>&#9733;</span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
              <div className='description-display'>
                <strong>Description:</strong> <br /> {review.description}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}

export default Reviews;
