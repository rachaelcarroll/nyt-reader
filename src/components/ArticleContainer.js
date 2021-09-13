import { ArticlePreview } from './ArticlePreview';
import { NavLink } from 'react-router-dom';


export const ArticleContainer = ({articles, isLoading}) => {
    console.log('ARTICLES', articles)
    const allArticles = [...articles]

    const article = allArticles.map((articleObj) => {
        return (
            <ArticlePreview
            num={articleObj.num}
            key={articleObj.num}
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