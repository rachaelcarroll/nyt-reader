import { NavLink } from 'react-router-dom';
import { formatDate } from '../utils/util';


export const ArticleDetails = ({id, title, media, description, link, author, datePublished}) => {

    return (
        <section className='article-details-container'>
            <NavLink to='/'>
                <div>
                    <button className='return-home'>Back to Home</button>
                </div>
            </NavLink>
            <article className='article-details' style={{ background: `url(${media[0].url})`}}>
                <div className='title-tag'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p>{author}</p>
                    <p>{formatDate(datePublished)}</p>
                <a target="_blank" href={link}>
                    <button className='read-more'>Read More</button>
                </a>            
                </div>
            </article>
        </section>


    )
}