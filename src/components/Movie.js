import { Component } from "react";
import PropTypes from "prop-types";
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
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.description}</p>
            <div>
              <span> {this.props.year}</span>
              <span> {this.props.genre}</span>
            </div>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  year: PropTypes.string,
  genre: PropTypes.string,
};
export default Movie;
