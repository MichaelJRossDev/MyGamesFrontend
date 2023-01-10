import { useState } from "react";
import CommentCard from "./CommentCard";

const CommentList = () => {
    const [sortBy, setSortBy] = useState('');

    return (
        <div>
            <p>CommentList</p>
            <CommentCard />
        </div>
    )
}

export default CommentList;