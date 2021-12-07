export const fetchArticles = async (type) => {
    const apiKey = 'Ly7ZzTOR6GvHEA6lteBElqqOhw1lVjSi'
    let response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=${apiKey}`);
    let data = await checkForErrors(response);
    return await cleanData(data);
}
  
export const checkForErrors = response => {
    if (response.status === 404) {
      throw new Error('Oops, something went wrong. Please check back later.');
    } else if (response.status === 500) {
      throw new Error(
        "Well this is embarrassing... our servers seem to be down, please check back later!"
      );
    } else if (response.ok) {
      return response.json();
    } else {
      throw new Error('Oops, something went wrong. Please try again!');
    }
  };

  const cleanData = data => {
    return data.results.map(result => {
      let path = result.url.split('/');
      let index = result.url.split('/').length - 1;
      let id = path[index].split('.html')[0];
      return {
        abstract: result.abstract,
        byline: result.byline,
        datePublished: result['published_date'],
        image: result.multimedia ? result.multimedia[0].url : null,
        section: result.section,
        url: result.url,
        title: result.title,
        id: id
      };
    });
  };