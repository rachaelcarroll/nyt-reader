import { ArticleCard } from './ArticleCard';
import { useState } from 'react';

export const ArticleContainer = ({articles}) => {
    const [search, setSearch] = useState('');
    const allArticles = [...articles]

    const articleCard = allArticles.filter(article => {
        if(search === '') {
            return article;
        } else if (article.title.toLowerCase().includes(search.toLowerCase())) {
            return article;
        }
    }).map(article => {
        return (
            <ArticleCard
            id={article.id}
            key={article.id}
            title={article.title}
            image={article.image}
            description={article.abstract}
            link={article.url}
            author={article.byline}
            datePublished={article.datePublished}
            section={article.section}
            />
        )
    })

    return (
        <section className='all-articles'>
            <input className='search-bar'
                type='text' 
                placeholder='Search By Keyword...'
                onChange={(event) => {
                    setSearch(event.target.value);
                }} 
            />
            {articleCard.length ? articleCard : <h2> Sorry, there are no articles that match your search. </h2>} 
        </section>
    );
  }