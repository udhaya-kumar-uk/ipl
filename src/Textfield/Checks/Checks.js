import React from 'react'


export default function Checks({
  value="",
  id="",
  label="",
  onChange=(e) => {},
  checked=false,
}){
  return(
    
      <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value={value}
                    id={id}
                    onChange={onChange}
                    checked={checked}
                  />
                  <label class="form-check-label" for={id}>
                    {label}
                  </label>
    </div>
  )
}