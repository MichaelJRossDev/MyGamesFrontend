import { useState } from "react";

const SortByMenu = () => {
    const [sortBy, setSortBy] = useState('');
    const [order, setOrder] = useState('');
    const [category, setCategory] = useState('');

    return (
        <div>
            <p>SortByMenu</p>
        </div>
    )
}

export default SortByMenu;