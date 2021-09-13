import { fetchArticles } from '../utils/apiCalls';
import { useEffect, useState } from 'react';
import { Dashboard } from './Dashboard';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [ articles, setArticles ] = useState([])
  const [ error, setError ] = useState('')
  const [ type, setType ] = useState('home')

  const getArticles = async (type) => {
    setError('')
    setArticles([]);
    try {
      let articles = await fetchArticles(type)
      setArticles(articles.results)
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect((type) => {
    getArticles(type);
  }, [])


  return (
      <main>
      <Switch>
        <Route exact path='/dashboard' render={() => 
        <Dashboard 
          type={type}
          error={error}
          articles={articles}
        />
        }/>
        <Route exact path='/article/:id' render={({ match }) => {
          const articleMatch = articles.find(article => article.id == match.param.id)
          return <ArticleDetails 
                  article={articleMatch}
                  />
        }}/>
      </Switch>
      </main>
    );
}

export default App;
