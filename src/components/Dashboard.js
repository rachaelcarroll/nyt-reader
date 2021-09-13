import { NavLink } from 'react-router-dom';

export default const Dashboard = ({type, articles, error}) => {



    return (
        <section className='dashboard'>
            <Categories 
            type={type}
            />
            <ArticleContainer 
            articles={articles}
            type={type}
            />
        </section> 
    );
}