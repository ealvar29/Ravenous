import React from 'react';
import './SearchBar.css';

const sortByOptions {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review',
}

class SearchBar extends React.Component {
    renderSortByOptions(){
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption]
            return <li key={sortByOptionValue}>{sortByOption}</li>
        });
    }

}