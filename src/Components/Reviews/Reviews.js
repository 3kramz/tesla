import React from 'react';
import useData from '../Hooks/useData'
import Review from './Review';
import './Reviews.css'

const Reviews = () => {
const [reviews]=useData('reviewData.json')



    return (
        <div className='review-section'>
            <h1 className='reviews-title'>Tesla Users Reviews</h1>
            
            {reviews.map(review=><Review key={review.id} review={review}></Review>)}
        </div>
    );
};

export default Reviews;