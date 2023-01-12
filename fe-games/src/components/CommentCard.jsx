import { useState } from "react";

const CommentCard = (params) => {
    const comment = params.comment;
    const date = new Date(comment.created_at)
    return (
        <div className="CommentCard">
            <h4>{comment.author}</h4>
            <p>{comment.body}</p>
            <p>❤️{comment.votes} {date.toDateString()}</p>
        </div>
    )
}

export default CommentCard;