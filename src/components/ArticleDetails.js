import { NavLink } from 'react-router-dom';


export const ArticleDetails = ({id, title, media, description, link, author, datePublished}) => {

    return (
        <section className='article-details-container'>
            <NavLink to='/'>
                <div>
                    <button className='return-home'>Back to Home</button>
                </div>
            </NavLink>
            <article className='article-details'>
                <div className='title-tag'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p>{author}</p>
                    <p>{datePublished}</p>
                </div>
                <div className='fullsize-image'>
                    <img src={media[0].url} alt={title}/>
                </div>
                <a target="_blank" href={link}>
                    <button className='read-more'>Read More</button>
                </a>            
            </article>
        </section>


    )
}