import React from 'react';
import { connect } from 'react-redux';
import { toggleItem, deleteItem } from './actions/index'
import './ShoppingList.css';

const mapStateToProps = state => {
    return { state };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleItem: item => dispatch(toggleItem(item)),
        deleteItem: item => dispatch(deleteItem(item))
    };
}

class ConnectList extends React.Component {

    render() {
        return (
            <ul>
                {this.props.state.map( item => (
                    <li key={item.id} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                        {item.name}
                        <div className='list-buttons' style={{ textDecoration: 'none' }}>
                            <button
                                onClick={() => 
                                        this.props.toggleItem(item.id) 
                                    }>
                               <span 
                                    role="img" 
                                    aria-label="check mark"
                                    >
                                    ✔️
                                </span> 
                            </button>
                            <button
                                onClick={() => 
                                    this.props.deleteItem(item.id)
                                }>
                                <span 
                                    role="img" 
                                    aria-label="cross mark"
                                    >
                                    ❌
                                </span>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
    
}

const ShoppingList = connect(mapStateToProps, mapDispatchToProps) (ConnectList);

export default ShoppingList;