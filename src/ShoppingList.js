import React from 'react';
import { connect } from 'react-redux';
import './ShoppingList.css';

const mapStateToProps = state => {
    return { items: state.items };
}

function ConnectList({ items }) {
    return (
        <ul>
            {items.map( item => (
                <li key={item.id}>
                    {item.name}
                    <div className='list-buttons'>
                        <span role="img" aria-label="check mark">✔️</span>
                        <span role="img" aria-label="cross mark">❌</span>
                    </div>
                </li>
            ))}
        </ul>
    )
}

const ShoppingList = connect(mapStateToProps) (ConnectList);

export default ShoppingList;