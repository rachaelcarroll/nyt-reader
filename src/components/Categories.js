import { NavLink } from 'react-router-dom';

export const Categories = ({categories, changeCategory}) => {

    const setCategory = (event) => {
        changeCategory(event.target.id)
    }

    const eachCategory = categories.map(category => {
        return (
            <NavLink to={`/${category}`}
                    className='category-tab' 
                    key={category} 
                    id={category}
                    onClick={(event) => setCategory(event)}>
                    {category}
            </NavLink>
        )});

    return (
        <section className='all-categories'>
            {eachCategory}
        </section>
    )
}