import React from 'react';
import Article from './Article';

const Body = ({numberOfElements}) => {
    const articles = Array.from({length: numberOfElements}, (v, i) => (
        <Article key={i} />));

    return (
        <>
            <h1>Articles</h1>
            <main>{articles}</main>
        </>
    );
}

export default Body;