import { fetchArticles } from '../utils/apiCalls';
import { useEffect, useState } from 'react';
import { Dashboard } from './Dashboard';
import { Route, Switch } from 'react-router-dom';
import { ArticleDetails } from './ArticleDetails';

const App = () => {
  const [ articles, setArticles ] = useState([])
  const [ error, setError ] = useState('')
  const [ newsType, setType ] = useState('home')
  const [ isLoading, setIsLoading ] = useState(true);

  const getArticles = async (type) => {
    console.log("TYPE??", type)
    setError('')
    setType(type)
    console.log("NNEWSTYPE???", type)
    try {
      let articles = await fetchArticles(newsType || type)
      const articlesWithIds = articles.results.map((article, i) => {
        let id = i
        return {...article, num: `${id}`}
      })
      console.log("FETCHED ARTICLES", articlesWithIds)
      setArticles(articlesWithIds)
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false)
      setError(error.message)
    }
  }

  useEffect((type) => {
    getArticles(type);
  }, [])

  if(isLoading) {
    return (
      <h1 className='loading'>your news is loading...</h1>
    )
  }

  if (articles.length) {
    return (
      <main>
      <Switch>
        <Route exact path='/' render={() => 
        <Dashboard 
          isLoading={isLoading}
          type={newsType}
          error={error}
          articles={articles}
          getArticles={getArticles}
        />
        }/>
        <Route exact path='/article/:id' render={({ match }) => {
          console.log('match', match)
          let articleMatch = articles.find(article => article.num === match.params.id)
          console.log("MATCH?", articleMatch)
          return <ArticleDetails 
                  id={articleMatch.num}
                  key={articleMatch.num}
                  title={articleMatch.title}
                  media={articleMatch.multimedia}
                  description={articleMatch.description}
                  link={articleMatch.url}
                  author={articleMatch.byline}
                  datePublished={articleMatch.published_date}
                  />
        }}/>
      </Switch>
      </main>
    )}
}

export default App;
