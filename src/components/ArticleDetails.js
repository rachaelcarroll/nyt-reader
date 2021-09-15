import { NavLink } from 'react-router-dom';
import { formatDate } from '../utils/util';
import { IoChevronBackCircle } from 'react-icons/io5';


export const ArticleDetails = ({id, title, media, description, link, author, datePublished}) => {

    return (
        <section className='article-details-container'>
            <NavLink to='/'>
                <div>
                    <button className='return-home'>
                        <IoChevronBackCircle />
                    </button>
                </div>
            </NavLink>
            <article className='article-details' style={{ background: `url(${media[0].url})`}}>
                <div className='title-tag'>
                    <h1>{title}</h1>
                    <p>{author}</p>
                    <p>{description}</p>
                    <p>Published on: {formatDate(datePublished)}</p>
                <a target="_blank" href={link}>
                    <button className='read-more'>read more</button>
                </a>            
                </div>
            </article>
        </section>


    )
}