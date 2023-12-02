import React from 'react';

const Article = () => {
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio euismod, ultricies nisl nec, aliquam nunc. Donec auctor, nunc quis lacinia ultricies, nisl nunc aliquet nunc, nec aliquam nunc nunc nec nunc. Donec auctor, nunc quis lacinia ultricies, nisl nunc aliquet nunc, nec aliquam nunc nunc nec nunc. Donec auctor, nunc quis lacinia ultricies, nisl nunc aliquet nunc, nec aliquam nunc nunc nec nunc. Donec auctor, nunc quis lacinia ultricies, nisl nunc aliquet nunc, nec aliquam nunc nunc nec nunc. Donec auctor, nunc quis lacinia ultricies, nisl nunc aliquet nunc, nec aliquam nunc nunc nec nunc. Donec auctor, nunc quis lacinia ultricies, nisl nunc aliquet nunc, nec aliquam nunc nunc nec nunc. Donec auctor, nunc quis lacinia ultricies, nisl nunc aliquet nunc, nec aliquam nunc nunc nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio euismod, ultricies nisl nec, aliquam nunc. Donec auctor, nunc quis lacinia ultricies, nisl nunc aliquet nunc, nec aliquam nunc nunc nec nunc. Donec auctor, nunc quis lacinia ultricies, nisl nunc aliquet nunc, nec aliquam nunc nunc nec nunc. Donec auctor, nunc quis lacinia ultricies.";

    return <p onClick={() => console.log("user clicked on the element")} onMouseEnter={() => console.log("user hovered over the element")}>{content}</p>
};

export default Article;