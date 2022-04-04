import React from 'react';
import HomeReviewCard from '../homeReveiewCard/HomeReviewCard';
import useData from '../Hooks/useData';
import "./homereview.css"

const HomeReview = () => {
    const[reviews]=useData('reviewData.json')
    
    return (
        <div className="review-section">

           <h3 className="review">Tesla Users Review</h3>
             {reviews.map(review=> <HomeReviewCard key={review.id} review={review}></HomeReviewCard>)}
        </div>
    );
};

export default HomeReview;