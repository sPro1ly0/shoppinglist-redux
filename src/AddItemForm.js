import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from './actions/index';
import './AddItemForm.css';

function mapDispatchToProps(dispatch) {
    return {
        addItem: item => dispatch(addItem(item))
    };
}

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name } = this.state;
        this.props.addItem(name);
        this.setState({ name: '' });
        //console.log(name, newId);
    }

    render() {
        const { name } = this.state;

         return (
            <form onSubmit={this.handleSubmit}>
                <div>
                <label htmlFor="name">Add an Item: </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={this.handleChange}
                    required
                />
                </div>
                <button type="submit">Add Item</button>
            </form>
            );
    }
}

const AddItemForm = connect(null, mapDispatchToProps) (Form);

export default AddItemForm;