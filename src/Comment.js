import React from 'react';
import PropTypes from 'prop-types';

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

Comment.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
}

export default Comment;