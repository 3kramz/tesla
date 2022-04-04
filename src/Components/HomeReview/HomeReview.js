import React from 'react';
import useData from '../Hooks/useData';
import "./homereview.css"

const HomeReview = () => {
    const[review]=useData('reviewData.json')
    console.log(review)
    return (
        <div className="review-section">

           <h3 className="review">Tesla Users Review</h3>

        </div>
    );
};

export default HomeReview;