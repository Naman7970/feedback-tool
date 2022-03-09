import React from "react"

class Header extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <header>
                        <a type="button" className="btn btn-primary float-end" href="add-feedback">Add Feedback</a>
                        <a href='/' className="no-link"><h2>Feedback App</h2></a>
                    </header>
                </div>
            </div>
        )
    }
}

export default Header