import ReviewCard from "./ReviewCard";

const ReviewList = (params) => {
    const reviews = params.reviews;
    return (
        <div className="ReviewList">
            {reviews.map(review => <ReviewCard key={review.review_id} review={review} />)}
        </div>
    )
}

export default ReviewList;