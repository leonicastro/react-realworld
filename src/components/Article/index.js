import React, { useEffect, useState } from 'react';
import './styles.scss';


export default function Article({article}) {
    const [artigo, setArtigo] = useState([]);

    useEffect(() => {

        setArtigo({
                      id: article.a,
                      avatar: `https://api.adorable.io/avatars/52/avatars${article.a}.png`,
                      author: '@leonicastro',
                      date: 'Agosto 23, 2019',
                      title: 'titulo de teste',
                      description: 'descricao de teste de teste',
                      tagList: ['butt', 'dragons', 'test', 'tags']
                  }
        );


    }, []);

    function haddleReadMore() {

    }

    return (
        {
            artigo
        } &&
        <article>
            <header className="article-header">
                <picture>
                    <img className="avatar" src={artigo.avatar}/>
                    <div className="content">
                        <div className="author">{artigo.author}</div>
                        <span className="date">{artigo.date}</span>
                    </div>
                </picture>
                <button className="favorite">
                    <span className="icon">&#9825;</span> 3
                </button>
            </header>

            <div className="article-content">
                <div>
                    <h1>{artigo.title}</h1>
                    <p>{artigo.description}</p>
                    <span onClick={haddleReadMore}>Read more...</span>
                </div>
                <ul className="tag-list">
                    {artigo.tagList &&
                    artigo.tagList.map(tag => {
                        return (
                            <li className="tag-default tag-pill tag-outline" key={tag}>
                                {tag}
                            </li>
                        );
                    })
                    }
                </ul>
            </div>
            <hr/>
        </article>
    );
}