import { NavLink } from 'react-router-dom';
import { formatDate } from '../utils/util';
import { IoChevronBackCircle } from 'react-icons/io5';


export const ArticleDetails = ({article}) => {

    return (
        <section className='article-details-container'>
            <NavLink to='/'>
                <div>
                    <button className='return-home'>
                        <IoChevronBackCircle />
                    </button>
                </div>
            </NavLink>
            <article className='article-details' style={{ background: `url(${article.image})`}}>
                <div className='title-tag'>
                    <h1>{article.title}</h1>
                    <p>{article.byLine}</p>
                    <p>{article.abstract}</p>
                    <p>Published on: {formatDate(article.datePublished)}</p>
                <a target="_blank" href={article.url}>
                    <button className='read-more'>read more</button>
                </a>            
                </div>
            </article>
        </section>


    )
}