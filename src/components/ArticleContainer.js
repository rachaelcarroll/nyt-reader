import { ArticlePreview } from './ArticlePreview';
import { NavLink } from 'react-router-dom';


export const ArticleContainer = ({articles}) => {

    const article = articles.map((articleObj,i) => {
        return (
            <ArticlePreview
            id={i}
            key={i}
            title={articleObj.title}
            media={articleObj.multimedia}
            description={articleObj.description}
            link={articleObj.url}
            author={articleObj.byline}
            datePublished={articleObj.published_date}
            />
        )
    })

    return (
        <section className='all-articles'>
            {article}
        </section>
    );
}