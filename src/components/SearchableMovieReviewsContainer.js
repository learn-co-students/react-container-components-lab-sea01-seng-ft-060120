import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }

    changeHandler = (e) => {
        this.setState({ searchTerm: e.target.value})
    }
    
    submitHandler = (e) => {
        e.preventDefault()
        this.fetchData()
    }

    fetchData = () => {
        fetch(`${URL}`)
        .then(res => res.json())
        .then(json => this.setState({reviews: json.results}))
    }

    render() {
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    Enter Search Term:
                    <input type='text' name='term' onChange={this.changeHandler} value={this.state.searchTerm}></input>
                    <input type='submit'></input>
                </form>
            <MovieReviews className='searchable-movie-reviews' reviews={this.state.reviews}/>
            </div>
        )
    }
}