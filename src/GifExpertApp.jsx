import { useState } from "react";
import {AddCategory} from './components/AddCategory.jsx'
import { GifGrid } from "./components/GifGrid.jsx";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);
  // const handleAdd = newCat => setCategories(c => [...c,newCat])

  return (
    <>
      <h2>GifExpertApp</h2>   
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map( category => (
          <GifGrid 
            category={ category } 
            key={ category }
          />
          ) 
        )}
      </ol>
    </>
  )
}


