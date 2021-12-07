import { ArticleCard } from './ArticleCard';

export const ArticleContainer = ({articles}) => {
    const allArticles = [...articles]

    const articleCard = allArticles.map(article => {
        console.log("ARTICLE?", article)
        return (
            <ArticleCard
            id={article.id}
            key={article.id}
            title={article.title}
            image={article.image}
            description={article.abstract}
            link={article.url}
            author={article.byline}
            datePublished={article.datePublished}
            section={article.section}
            />
        )
    })

        return (
            <section className='all-articles'>
                {articleCard} 
            </section>
    );
  }