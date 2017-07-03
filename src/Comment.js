import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <div className="field">
                <h3>{this.props.title}</h3>
                <p className="control">
                    <textarea classNAme="textarea" placeholder="Enter"></textarea>
                </p>
            </div>
        );
    }
}

export default Comment;