import React from "react";

import './search-box.styles.css';

export const SearchBox = (props: any) => {
  const { placeholder, handleChange } = props;
  return (
        <input className="search" type="search" placeholder={ placeholder } onChange={ handleChange }/>
  )
}
