import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { articles: state.articles };
}

function ConnectList({ articles }) {
    return (
        <ul>
            {articles.map( art => (
                <li key={art.id}>{art.title}</li>
            ))}
        </ul>
    )
}

const List = connect(mapStateToProps) (ConnectList);

export default List;