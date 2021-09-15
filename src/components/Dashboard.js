import { Categories } from './Categories';
import { ArticleContainer } from './ArticleContainer';
import { Error } from './Error';
import { MobileCategories } from './MobileCategories';

export const Dashboard = ({articles, error, categories, changeCategory}) => {
    return (
        <>
        <nav className='nav-bar'>
            <h1 className='the-daily-header'>the daily news</h1>
            <MobileCategories 
                categories={categories}
                changeCategory={changeCategory}
            />
        </nav>
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
        </>
    );
}