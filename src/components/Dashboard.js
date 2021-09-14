import { Categories } from './Categories';
import { ArticleContainer } from './ArticleContainer';
import { Error } from './Error';

export const Dashboard = ({articles, error, categories, changeCategory}) => {
    return (
        <section className='dashboard'>
            {error && <Error message={error} />}
            {!error && !articles.length && (
             <>
                <Categories 
                    categories={categories}
                    changeCategory={changeCategory}
                />
                <h1 className='loading'>loading your news...</h1>
             </>
            )}
            {!error && !!articles.length && (
             <>
                <Categories 
                    categories={categories}
                    changeCategory={changeCategory}
                />
                <ArticleContainer 
                    articles={articles}
                />
             </>
            )}
        </section> 
    );
}