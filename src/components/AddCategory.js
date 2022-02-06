import React, { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
    }
    const handleSumit =(e)=>{
        e.preventDefault();

        if(inputValue.trim().length>2){
        setCategories(cats=> [inputValue,...cats]);
        setInputValue('');
        }
        //console.log("sumit hecho")

    }

  return (
    <form onSubmit={handleSumit}>
      <input 
      type="text" 
      value={inputValue}
      onChange={handleInputChange}
      />
    </form>
  );
};

export default AddCategory;

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired,
  };
