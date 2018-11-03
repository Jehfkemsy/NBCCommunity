import React from 'react'

export default class MediaCard extends React.Component {
    
    render() {
        return(
            <div className="card" style={{width: 'min-content', height: 'min-content'}}>
                <img className="card-img-top" src={this.props.image} alt={this.props.title}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <a href="/home" className="btn btn-primary">Comments</a>
                </div>
            </div>
        )
    }
}

