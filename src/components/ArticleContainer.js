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
            description={articleObj.abstract}
            link={articleObj.url}
            author={articleObj.byline}
            datePublished={articleObj.published_date}
            />
        )
    })

    if(isLoading) {
        return (
          <h1 className='loading'>your news is loading...</h1>
        )
      } else {
        return (
        <section className='all-articles'>
            <h1>the daily news</h1>
            {article} 
        </section>
    );
  }
}