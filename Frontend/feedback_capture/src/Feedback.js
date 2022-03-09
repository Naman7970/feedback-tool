import React from "react"

class Feedback extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <tr>
                <td scope="col">{this.props.feedback.username}</td>
                <td scope="col">{this.props.feedback.rating}</td>
                <td scope="col">{this.props.feedback.review}</td>
            </tr>
        )
    }
}

export default Feedback