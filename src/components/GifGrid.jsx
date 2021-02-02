// import { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem.jsx";
// import getGifs from "../helpers/getGifs"

import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  // const [images, setImages] = useState([])
  
  // useEffect(() => {
    //   getGifs(category)
    //     .then(gifs => setImages(gifs)); //retorna lista de gifs y es pasada a setImages
    //   },[ category ])
    
  const { data, loading } = useFetchGifs(category); // <-- customHook

  return (
    <>
      <h3>{category}</h3>
      {loading ? <p className="animate__animated animate__flash">Loading...</p> : null}
      <div className="card-grid">
      {
        data.map( img => (
          <GifGridItem 
            key={img.id}
            { ...img }
          />
        ))
      }
      </div>
    </>
  );

}
