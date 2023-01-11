import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const FullReview = () => {
    const [review, setReview] = useState({});
    const [comments, setComments] = useState([]);
    const { review_id } = useParams();
    const date = new Date(review.created_at);

    fetch(`https://michaels-games.onrender.com/api/reviews/${review_id}`)
    .then(response => response.json())
    .then(data => {
        setReview(data.review);
    })

    fetch(`https://michaels-games.onrender.com/api/reviews/${review_id}/comments`)
    .then(response => response.json())
    .then(data => {
        setComments(data.comments);
    })

    return (
        <div className="FullReview">
            <Link to="/" ><button>🏠</button></Link>
            <h2>{review.title}</h2>
            <img className="ReviewImage" src={review.review_img_url} alt="image related to review" />
            <p className="ReviewBody">{review.review_body}</p>
            <button>❤️{review.votes}</button><button>💬{review.comment_count}</button>
            <p>Written by {review.owner}</p>
            <p>{date.toDateString()}</p>
        </div>
    )
}

export default FullReview;