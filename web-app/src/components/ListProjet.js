import React from 'react'

export default function ListProjet(props) {
    
  return (
    <div>
        <a href='#' style={{color: 'inherit', textDecoration: 'inherit'}}>  
            <img className='logoImgProjet' alt='#'></img>
        <p>{props.children}</p>
        <p>{props.subTitle}</p></a>
    </div>
  )
}
