export const formatDate = (time) => {
    let a, b, date
    a = time.split('T');
    b = a[0].split('-');
    date = b[1] + '-' + b[2] + '-' + b[0];
    return date
  }

  export const categories = [
    'arts',
    'automobiles',
    'books',
    'business',
    'fashion',
    'food',
    'health',
    'home',
    'insider',
    'magazine',
    'movies',
    'obituaries',
    'opinion',
    'politics',
    'science',
    'sports',
    'technology',
    'theater',
    'travel',
    'upshot',
    'us',
    'world'
  ];