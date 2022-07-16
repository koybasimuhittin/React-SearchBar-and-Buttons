import React, {useState} from "react";
import './SearchBar.css';



const SearchBar = (props)=>{
    const [searchValue, setSearchValue] = useState("")
    const handleChange = (event)=>{
        setSearchValue(event.target.value)

    }
    const handleClick = ()=>{
        setSearchValue("")
    }
    const filteredProducts =
        props.products.filter((product) =>{
            return product.includes(searchValue)
        })
    const shouldItCleared = searchValue.length > 0
    return(
        <div>
            <input type='text' value={searchValue} onChange={handleChange}/>
            {searchValue}
            {shouldItCleared && <button onClick={handleClick}>x</button>}
            <ul>
                {filteredProducts.map((product) =>{
                    return <li key={product}>{product}</li>
                })}
            </ul>
            
        </div>
    )
}

export default SearchBar;