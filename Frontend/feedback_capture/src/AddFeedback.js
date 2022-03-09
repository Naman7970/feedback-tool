import React from "react";
import { Navigate } from 'react-router-dom';

class AddFeedback extends React.Component {
    constructor() {
        super();
        this.state = {
            "username": '',
            "rating": '',
            "review": ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target;
        type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    handleSubmit(event){
        console.log(this.state);
        const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }
        fetch('http://localhost:8000/feedbacks/', requestOptions)
        .then(<Navigate to="/" replace={true}/>);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container container-fluid" style={{ padding: 20 }}>
                <div className="row">
                    <form className="form-group" onSubmit={this.handleSubmit}>
                        <label>
                            Username
                        </label>
                        <br />
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.handleChange}
                            placeholder="Enter Name" />
                        <br />
                        <label>
                            Rating
                        </label>
                        <br />
                        <input
                            type="number"
                            name="rating"
                            className="form-control"
                            value={this.state.rating}
                            onChange={this.handleChange}
                            placeholder="Give rating on a scale of 1 to 5"
                            max={5} min={1} />
                        <br />
                        <label>
                            Review
                        </label>
                        <br />
                        <input
                            type="text"
                            name="review"
                            className="form-control"
                            value={this.state.review}
                            onChange={this.handleChange}
                            placeholder="Tell your experience to us..." />
                        <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddFeedback