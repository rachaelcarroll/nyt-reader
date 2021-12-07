import { NavLink } from 'react-router-dom';
import { IoChevronForwardCircle } from 'react-icons/io5';


export const ArticleCard = ({section, id, title, image, author}) => {
    console.log("section", section)

    return (
        <article className='article-preview'>
            {image && (
                <div className='article-img'>
                    <img src={image} alt={title}/>
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