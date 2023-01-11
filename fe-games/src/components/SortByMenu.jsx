import { useState } from "react";

const SortByMenu = (params) => {
    const [sortBy, setSortBy] = useState('');
    const [order, setOrder] = useState('');
    const [category, setCategory] = useState('');

    const setReviews = params.setReviews;

    fetch('https://michaels-games.onrender.com/api/reviews')
    .then(output => output.json())
    .then(data => data.reviews)
    .then(reviews => {
        setReviews(reviews)
        //console.log(reviews);
    })
    .catch(err => console.log(err));



    return (
        <div>
            <p>SortByMenu</p>
        </div>
    )
}

export default SortByMenu;