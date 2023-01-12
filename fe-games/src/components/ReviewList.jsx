import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";

const ReviewList = (params) => {
    const reviews = params.reviews;
    return (
        <div className="ReviewList">
            {reviews.map(review => <Link key={`Link${review.review_id}`} to={`/review/${review.review_id}`}><ReviewCard key={review.review_id} review={review} /></Link>)}
        </div>
    )
}

export default ReviewList;