export const fetchArticles = (type) => {
    const apiKey = 'Ly7ZzTOR6GvHEA6lteBElqqOhw1lVjSi'
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=${apiKey}`)
}