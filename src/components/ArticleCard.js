import { NavLink } from 'react-router-dom';
import { formatDate } from '../utils/util';


export const ArticleCard = ({section, id, title, media, description, author, datePublished}) => {
    console.log("section", section)

    return (
        <article className='article-preview'>
            {media && (
                <div className='article-img'>
                    <img src={media[0].url} alt={title}/>
                </div>
            )}
            <div className='article-description'>
                <div className='title-tagline'>
                    <h2>{title}</h2>
                    <p className='preview'>{description}</p>
                </div>
            <div className='date-author'>
                <p>Published {formatDate(datePublished)}</p>
                <p>{author}</p>
            </div>
            </div>
            <NavLink to={`/${section}/${id}`}>
                <button className='view-details'>View Details</button>
            </NavLink>
        </article>
    );
}