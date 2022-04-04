import React from 'react';
import { Link } from 'react-router-dom';
import HomeReviewCard from '../homeReveiewCard/HomeReviewCard';
import useData from '../Hooks/useData';
import "./homereview.css"

const HomeReview = () => {
    const[reviews]=useData('reviewData.json')
    const comment= reviews.slice(0,3)
  
    
    return (
        <div className="review-section">

           <h3 className="review">Tesla Users Review</h3>
             {comment.map(review=> <HomeReviewCard key={review.id} review={review}></HomeReviewCard>)}
             <Link to='/reviews' className=" btn-review">More Review</Link>
        </div>
    );
};

export default HomeReview;
