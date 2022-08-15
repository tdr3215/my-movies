import { Component } from "react";
import PropTypes from "prop-types";
const GENERIC_MOVIE_TITLE = "Movie";
const GENERIC_MOVIE_DESCRIPTION =
  "This is a movie description. It's not very long but that's ok!";
const GENERIC_MOVIE_YEAR = "2022";
const GENERIC_MOVIE_GENRE = "All";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      year: this.props.year,
      genre: this.props.genre,
    };
  }

  render() {
    return (
      <div>
        <div className="card">
          <img className="card-img-top" />
          <div className="card-body">
            <p>{this.props.id}</p>
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.description}</p>
            <div>
              <span> {this.props.year}</span>
              <span> {this.props.genre}</span>
            </div>
            <a></a>
            <a className="btn btn-info">Edit</a>
            <a href="#" className="btn btn-danger">
              Delete
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Movie.defaultProps = {
  title: GENERIC_MOVIE_TITLE,
  description: GENERIC_MOVIE_DESCRIPTION,
  year: GENERIC_MOVIE_YEAR,
  genre: GENERIC_MOVIE_GENRE,
};

Movie.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  year: PropTypes.string,
  genre: PropTypes.string,
};
export default Movie;
