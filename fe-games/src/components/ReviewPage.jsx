import FullReview from "./FullReview";
import NewCommentMenu from "./NewCommentMenu";
import CommentList from "./CommentList";
import { useState } from "react";

const ReviewPage = () => {

    const [review, setReview] = useState({});
    const [comments, setComments] = useState([]);

    return (
        <div>
            <h2>ReviewPage</h2>
            <FullReview />
            <NewCommentMenu />
            <CommentList />
        </div>
    )
}

export default ReviewPage;