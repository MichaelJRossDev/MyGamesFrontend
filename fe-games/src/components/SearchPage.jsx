import SortByMenu from "./SortByMenu";
import ReviewList from "./ReviewList";
import { useState } from "react";

const SearchPage = () => {
    const [reviews, setReviews] = useState([]);

    return (
        <div>
            <h2>SearchPage</h2>
            <SortByMenu />
            <ReviewList />
        </div>
    )
}

export default SearchPage;