
export const Categories = ({getArticles}) => {

    const setCategory = (category) => {
        console.log('CATEGORY CLICKED?', category)
        getArticles(category.category)
    }

    const newsCategories = ['home', 'arts', 'science', 'us', 'world']
    const eachCategory = newsCategories.map((category, i) => {
        console.log("?????", category)
        return (
            <div className='category-tab' key={i} onClick={() => setCategory({category})}>
                {category}
            </div>
        )});

    return (
        <section className='all-categories'>
            {eachCategory}
        </section>
    )
}