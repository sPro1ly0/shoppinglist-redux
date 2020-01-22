import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { articles: state.articles };
}

function ConnectList({ articles }) {
    return (
        <ul>
            {articles.map( art => (
                <li key={Math.random() * 5}>{art.title}</li>
            ))}
        </ul>
    )
}

const List = connect(mapStateToProps) (ConnectList);

export default List;