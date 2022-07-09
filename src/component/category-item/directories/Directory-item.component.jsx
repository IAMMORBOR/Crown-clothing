import './Directory-item.style.scss'
import CategoryItem from '../category-item.component'

const Directories = ({categories}) =>{
    return(
        <div className= "directory-container">
    {categories.map ((category) => (
    <CategoryItem key={category.id} category={category}/>

    ))}
   </div>
    )

}

export default Directories;