import { Component } from "react";
import Movie from "./Movie";
import New from "./New";
import { Link } from "react-router-dom";
class Collection extends Component {
  constructor() {
    super();

    this.state = {
      collection: [],
    };
  }

  addMovieTest = () => {
    let collection = this.state.collection;
    collection.push({
      title: "Twilight",
      description:
        "Girl moves to new town and falls in love with homicidal classmate",
      year: `${2008}`,
      genre: "Teen Vampire Romance",
    });
    collection.push({
      title: "Man of Steel",
      description:
        "Alien likes to dress-up as a human. His night-job is saving the world",
      year: `${2013}`,
      genre: "Action",
    });

    collection.push({
      title: "The Dark Knight",
      description: "A movie about a sad orphan who fights crime",
      year: `${2008}`,
      genre: "Action",
    });

    // collection.push({
    //   id: Date.now(),
    // });

    this.setState({ collection });
  };
  render() {
    return (
      <div className="Container">
        <div className="row">
          <h1>Welcome to the Movie Collection. What would you like to do?</h1>

          <Link to="/new">
            <button className="btn btn-success" onClick={this.addMovie}>
              Add New Movie
            </button>
          </Link>
          <div className="col-md">
            <button
              className="btn btn-primary test"
              onClick={this.addMovieTest}
            >
              Populate page for Testing
            </button>
            {this.state.collection.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  description={movie.description}
                  year={movie.year}
                  genre={movie.genre}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Collection;
