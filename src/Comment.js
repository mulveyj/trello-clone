import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <div className="field">
                <h3>{this.props.title}</h3>
                {Object.keys(this.props.data).map((elem) => {
                    return (<p> {this.props.data[elem]} </p>);
                })}
            </div>
        );
    }
}

export default Comment;