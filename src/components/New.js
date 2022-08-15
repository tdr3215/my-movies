import { Component } from "react";
import "../css/New.css";
import Nav from "./Nav";
class New extends Component {
  constructor() {
    super();
  }

  //   handleTitle = (e) => {
  //     this.setState({
  //       title: e.target.value,
  //     });
  //   };

  //   handleTitleClick = () => {
  //     let movieObj = this.state.title;
  //     this.setState({
  //       collection: [this.state.collection, movieObj],
  //       title: "",
  //     });
  //   };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg mx-auto mt-5 card">
              <form>
                <div className="mb-3">
                  <label htmlFor="title">Title</label>
                  <input
                    //   value={this.state.title}
                    //   onChange={this.handleTitle}
                    placeholder="Batman"
                    name="title"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description">Description</label>
                  <textarea
                    //   value={this.state.description}
                    placeholder="A movie about a superhero!"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="year">Year</label>
                  <input
                    //   value={this.state.year}
                    placeholder="2008"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="genre">Genre</label>
                  <input
                    //   value={this.state.genre}
                    placeholder="Action"
                    className="form-control"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default New;
