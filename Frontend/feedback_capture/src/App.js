
import React from "react"
import Feedback from "./Feedback";
import logo from './logo.svg';
import './App.css';
import Header from "./Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      "feedbacks": []
    }
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/feedbacks/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          "feedbacks": data
        })
      })
  }

  render() {
    const feedbacks = this.state.feedbacks.map(
      (feedback, i) => <Feedback key={i} feedback={feedback} />
    )

    return (
      <div className="container">
        <div className="row">
            <table className="table table-striped table-bordered table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Username</th>
                  <th scope="col">Rating (Out of 5)</th>
                  <th scope="col">Review</th>
                </tr>
              </thead>
              <tbody>
                {feedbacks}
              </tbody>
            </table>
          </div>
        </div>
    )
  }

}

export default App;
