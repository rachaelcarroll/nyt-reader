import { NavLink } from 'react-router-dom';
import { Categories } from './Categories';
import { ArticleContainer } from './ArticleContainer';
import { Error } from './Error';

export const Dashboard = ({type, articles, error, isLoading, getArticles}) => {
console.log('ARTICLES DASH', articles)

    return (
        <section className='dashboard'>
            {error && <Error message={error} />}
            <Categories 
            type={type}
            getArticles={getArticles}
            />
            <ArticleContainer 
            isLoading={isLoading}
            articles={articles}
            type={type}
            />
        </section> 
    );
}