import { fetchArticles } from '../utils/apiCalls';
import { useEffect, useState } from 'react';
import { Dashboard } from './Dashboard';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ArticleDetails } from './ArticleDetails';
import { Error } from './Error';
import { categories } from '../utils/util'

const App = () => {
  const [ articles, setArticles ] = useState([]);
  const [ type, setType ] = useState('home');
  const [ error, setError ] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      setType('home');
    }
  }, [pathname]);

  useEffect(() => {
    const getArticles = async (type) => {
        try {
        let data = await fetchArticles(type);
        setArticles(data);
      } catch (error) {
        setError(error.message);
      }
    }
    getArticles(type);
  }, [type])

  console.log(articles)

  const changeCategory = (category) => {
    setType(category);
  };

    return (
      <main>
      <Switch>
        <Route exact path='/' render={() => {
          return (
            <Dashboard 
              type={type}
              error={error}
              articles={articles}
              categories={categories}
              changeCategory={changeCategory}
              />  
          );
        }}/>

        <Route exact path='/:category/'render={() => {
            return (
              <Dashboard
                articles={articles}
                error={error}
                categories={categories}
                changeCategory={changeCategory}
              />
            );
          }}/>

        <Route exact path='/:category/:id' render={({ match }) => {
          let articleMatch = articles.find(article => article.id === match.params.id)
          return <ArticleDetails 
                article = {articleMatch}
                  // id={articleMatch.id}
                  // key={articleMatch.id}
                  // title={articleMatch.title}
                  // media={articleMatch.multimedia}
                  // description={articleMatch.abstract}
                  // link={articleMatch.url}
                  // author={articleMatch.byline}
                  // datePublished={articleMatch.published_date}
                  />
        }}/>
        <Route render={() => (
            <Error message={"Sorry, that page doesn't exist"} 
            />
          )}
        />
      </Switch>
      </main>
    )}

export default App;
