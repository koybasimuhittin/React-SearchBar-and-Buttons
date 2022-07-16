import React, { useEffect, useState } from 'react';
import CountButton from './CountButton/CountButton';
import SearchBar from './SearchBar/SearchBar';


const App = ()=>{
    
    const [productsState,setProductsState] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(newProducts=>{
                console.log(newProducts)
                const newProductState = newProducts.map((product)=>{
                    return product.title;
                })
                setProductsState(newProductState)
            })
        }, [])
    const isLoading = productsState.length > 0
    const item2 = "hdafgsdhukskjg"
    return(
        <div>
            {isLoading ? <SearchBar products={productsState}/> : "Loading..."}
            <CountButton incrementValue={3} buttonColor={'red'}/>
            <CountButton incrementValue={2} buttonColor={'green'}/>
            <CountButton incrementValue={5} buttonColor={'blue'}/>
        </div>
    )
  }

export default App