import { NavLink } from 'react-router-dom';
import { Categories } from './Categories';
import { ArticleContainer } from './ArticleContainer';

export const Dashboard = ({type, articles, error, isLoading, getArticles}) => {
console.log('ARTICLES DASH', articles)
    return (
        <section className='dashboard'>
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