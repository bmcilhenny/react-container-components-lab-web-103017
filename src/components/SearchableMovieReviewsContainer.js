// Code SearchableMovieReviewsContainer Here
import React from 'react';
import MovieReviews from './MovieReviews';


const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`;

const API_ENDING = `?api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      searchTerm: '',
    };
  }

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.searchTerm)
    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  }


  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input id='search' type="text" onChange={this.handleSearch} />
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }


}

export default SearchableMovieReviewsContainer;
