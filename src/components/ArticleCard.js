import { NavLink } from 'react-router-dom';
import { IoChevronForwardCircle } from 'react-icons/io5';


export const ArticleCard = ({section, id, title, media, author}) => {
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
                </div>
            <div className='date-author'>
                <p>{author}</p>
            </div>
            </div>
            <NavLink to={`/${section}/${id}`}>
                <button className='view-details'>
                    <IoChevronForwardCircle />
                </button>
            </NavLink>
        </article>
    );
}