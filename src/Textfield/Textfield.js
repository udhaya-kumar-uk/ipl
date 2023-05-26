import React from 'react'
import '../App.css'

export default function Textfield({
  label="",
  type="",
  id="",
  placeholder="",
  onChange=(e)=>{},
  value=''
}){

  return(
    <div class="mb-3">
    <label for={id} class="form-label">
      {label}
    </label>
    <input
      type={type}
      class="form-control"
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
     </div>
  )
}