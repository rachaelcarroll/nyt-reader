import { ArticleContainer } from './ArticleContainer';
import { NavLink } from 'react-router-dom';


export default const ArticlePreview = ({id, title, media, description, link, author, datePublished}) => {

    const imgAlt= `image of ${title}`

    return (
        <article className='article-preview'>
            <div className='article-img'>
                <img src={media[1].url} alt={imgAlt}/>
            </div>
            <div className='article-description'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className='date-author'>
                <p>{datePublished}</p>
                <p>{author}</p>
            </div>
            <NavLink to={`/article/${id}`}>
                <button className='view-details'>View Details</button>
            </NavLink>
        </article>
    );
}