import React from 'react';

const Formlist = (props) =>{
  
  return(
   <form onSubmit={props.addcourse}>
     <input type="text"value={props.current} onChange={props.updatecourse}></input>
    
     <button type="submit">add course </button>
   </form>
  )
}
export default Formlist;
