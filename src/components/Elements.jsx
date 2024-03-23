import React from 'react'
import styles from './../Main.module.css'

function Elements({name, color,text,size='0.8rem'}) {
  return (
    <div>
      <h1 className={styles.elements} style={{backgroundColor:`${color}`,color:`${text}`,fontSize:`${size}`}}>{name}</h1>
    </div>
  )
}

export default Elements
