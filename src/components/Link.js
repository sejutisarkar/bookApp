import React from 'react';;
import Proptypes from 'prop-types'
 const Link =({active, children, onClick}) => {
   if(active) {
     <span>{children}</span>
   }
   return (
     <a href='#'
      onClick = {e => {
        e.preventDefault()
        onClick()
      }}
      >
      {children}
     </a>
   )
 }

 export default Link
