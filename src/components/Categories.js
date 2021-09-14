import { NavLink, useLocation } from 'react-router-dom';

export const Categories = ({categories, changeCategory}) => {
    const location = useLocation().pathname

    const setCategory = (event) => {
        changeCategory(event.target.id)
    }

    const eachCategory = categories.map(category => {
        return (
            <NavLink to={`/${category}`}
                    className={`category-tab ${location === `/${category}`} && 'active'`} 
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