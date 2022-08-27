import React from 'react'
import "./Experience.css";
interface PropTypes {
    title:string,
    time:string,
    description:string,
}
function TreeView({title,time,description}:PropTypes) {
  return (
    <div className='tree-view'>
        <div className='tree-left'>
            <div className='tree-start'></div>
            <div className='tree-line'></div>
            <div className='tree-start'></div>
        </div>
        <div className='tree-right'>
            <h3>{title}</h3>
            <p>{time}</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default TreeView