import Select from 'react-select'

export const MobileCategories = ({categories, changeCategory}) => {

    const options = categories.map(category => ({label: category, value: category}))  

    return (
        <Select
            className='mobile-categories'
            options={options}
            onChange={(event) => changeCategory(event.value)}
            placeholder='Search by category...'
        />
    )
}