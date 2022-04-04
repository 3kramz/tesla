import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './HomeReviewCard.css'


const HomeReviewCard = ({review}) => {
    console.log(review)
    return (
        <div className='home-review-card'>
            <h2 className="review-card-head">{review.head}</h2>
            <p className="review-card-body">{review.body}</p>
            <h4 className="review-card-name"> {review.name} </h4>
            <Rating
                initialRating={review.rating}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                readonly
            ></Rating>
        </div>
    );
};

export default HomeReviewCard;