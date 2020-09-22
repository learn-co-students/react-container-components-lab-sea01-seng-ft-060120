// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {

function renderMovie() {
        return props.reviews.map(movie => {
            const {display_title, critics_pick, headline} = movie
            return <li className='review'> 
                        <h2>{display_title}</h2>
                        <p>{headline}</p>
                        <p>{critics_pick}</p>
                    </li>
    })

}
    return (
        <div className='review-list'>
            <ul>
                {renderMovie()}
            </ul>
        </div>
    )
}

export default MovieReviews