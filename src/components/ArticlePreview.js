import { ArticleContainer } from './ArticleContainer';
import { NavLink } from 'react-router-dom';
import { formatDate } from '../utils/util';


export const ArticlePreview = ({num, title, media, description, link, author, datePublished}) => {


    return (
        <article className='article-preview'>
            <div className='article-img'>
                <img src={media[0].url} alt={title}/>
            </div>
            <div className='article-description'>
                <div className='title-tagline'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            <div className='date-author'>
                <p>Published {formatDate(datePublished)}</p>
                <p>{author}</p>
            </div>
            </div>
            <NavLink to={`/article/${num}`}>
                <button className='view-details'>View Details</button>
            </NavLink>
        </article>
    );
}