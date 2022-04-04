import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const review = ({review}) => {
    const {name, head, body ,rating}=review
    return (
        <div className='review'>
         
            <h4 className='review-head'>{head}</h4>
            <p className='review-body'>{body}</p>
           
           <div className="rating">
                <p>{review.rating}</p>
                <Rating
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                    readonly
                ></Rating>
           </div>
           <p className='name'> By<span className='review-name'> {name}</span></p>
        </div>
    );
};

export default review;