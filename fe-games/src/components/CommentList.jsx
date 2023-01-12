import { useParams } from 'react-router-dom';

import { useState } from "react";
import CommentCard from "./CommentCard";

const CommentList = () => {
    const [sortBy, setSortBy] = useState('');
    const [comments, setComments] = useState([]);
    const { review_id } = useParams();

    fetch(`https://michaels-games.onrender.com/api/reviews/${review_id}/comments`)
    .then(response => response.json())
    .then(data => setComments(data.comments))


    return (
        <div>
            {comments.map(comment => <CommentCard key={comment.comment_id} comment={comment}/>)}
        </div>
    )
}

export default CommentList;