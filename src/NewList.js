import React from 'react';
import PropTypes from 'prop-types';

class NewList extends React.Component {
    render() {
        return (
                <div className='box'>
                    <form onSubmit={this.props.addList} className='field is grouped'>
                        <label className='label'>New List</label>
                        <p className='control'>
                            <input className='input' type='text' placeholder='Add a List...'></input>
                        </p>
                        <button className='button is-success'>Save</button>
                        <a className='delete is-medium' onClick={this.props.cancelList}></a>
                    </form>
                </div>
        )
    }
}

NewList.propTypes = {
    addList: PropTypes.func.isRequired,
    cancelList: PropTypes.func.isRequired
};

export default NewList;