import './category-item.style.scss'

const CategoryItem =({category}) =>{
    const {imageUrl, tittle} = category;
 return (
    <div className= 'category-container'>
    <div className='background-image' style={{
     backgroundImage:`url(${imageUrl})`,
    }} />
     <div className='category-body-container'>
       <h2>{tittle}</h2>
       <p>Shop Now</p>
     </div>
   </div>
 )

}

export default CategoryItem;