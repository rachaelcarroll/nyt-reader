
export const Categories = ({getArticles}) => {

    const newsCategories = ['home', 'arts', 'science', 'us', 'world']
    const eachCategory = newsCategories.map((category, i) => {
        return (
            <div className='category-tab' key={i} onClick={({category}) => getArticles({category})}>
                {category}
            </div>
        )});

    return (
        <section className='all-categories'>
            {eachCategory}
        </section>
    )
}