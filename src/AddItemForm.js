import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from './actions/index';
import './AddItemForm.css';

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { title } = this.state;
        this.props.addArticle({ title });
        this.setState({ title: '' });
    }

    render() {
        const { title } = this.state;

         return (
            <form onSubmit={this.handleSubmit}>
                <div>
                <label htmlFor="title">Add Item: </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={this.handleChange}
                    required
                />
                </div>
                <button type="submit">ADD</button>
            </form>
            );
    }
}

const AddItemForm = connect(null, mapDispatchToProps) (Form);

export default AddItemForm;