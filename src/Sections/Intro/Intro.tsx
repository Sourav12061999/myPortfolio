import React from 'react'
import "./intro.css";
import Text from './Text/Text';
import Mac from './Mac/Mac';
function Intro() {
  return (
    <div className='section-container intro-container'>
      <Text/>
      <Mac/>
    </div>
  )
}

export default Intro