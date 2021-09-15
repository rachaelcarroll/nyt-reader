import { fetchArticles } from '../utils/apiCalls';
import { useEffect, useState } from 'react';
import { Dashboard } from './Dashboard';
import { Route, Switch } from 'react-router-dom';
import { ArticleDetails } from './ArticleDetails';
import { Error } from './Error';
import { categories } from '../utils/util'

const App = () => {
  const [ articles, setArticles ] = useState([]);
  const [ type, setType ] = useState('home');
  const [ error, setError ] = useState('');

  useEffect(() => {
    const getArticles = async (type) => {
        try {
        let articles = await fetchArticles(type)
        const articlesWithIds = articles.results.map((article, i) => {
          let identifier = i
          return {...article, id: `${identifier}`}
        })
        setArticles(articlesWithIds)
      } catch (error) {
        setError(error.message)
      }
    }
    getArticles(type);
  }, [type])

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
                  id={articleMatch.id}
                  key={articleMatch.id}
                  title={articleMatch.title}
                  media={articleMatch.multimedia}
                  description={articleMatch.abstract}
                  link={articleMatch.url}
                  author={articleMatch.byline}
                  datePublished={articleMatch.published_date}
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
