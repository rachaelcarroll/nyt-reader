import { NavLink } from 'react-router-dom';

export default const Categories = ({getArticles}) => {

    const newsCategories = ['home', 'arts', 'science', 'us', 'world']
    const eachCategory = newsCategories.map((category) => {
        return (
            <div className='category-tab' onCLick={({category}) => getArticles({category})}>
                {category}
            </div>
        )});

    return (
        <section className='all-categories'>
            {eachCategory}
        </section>
    )
}