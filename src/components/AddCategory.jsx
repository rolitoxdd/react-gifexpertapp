import { useState } from "react"
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => { //addToList pasado desde GifExpertApp

  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (e) => setInputValue(e.target.value)

  const handleSubmit = ev => {
    ev.preventDefault() // prevenimos refresh de la pagina
    if (inputValue.trim().length > 2) {

      setCategories(c => [ inputValue, ...c]) // agregamos a la lista el inputvalue
      setInputValue(''); // seteamos el inputvalue a vacio
    }
  }

  return (
    <form onSubmit={handleSubmit} >
      <input 
        type="text" 
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
