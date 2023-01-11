const ReviewCard = (params) => {
    const review = params.review;
    const date = new Date(params.review.created_at)
    console.log(date.toLocaleDateString());

    return (
        <div className="ReviewCard">
            <h3>{review.title}</h3>
            <p>❤️{review.votes} 💬{review.comment_count} {review.owner} <br/>
            {date.toDateString()}</p>
        </div>
    )
}

export default ReviewCard;