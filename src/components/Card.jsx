import React from 'react'
import ProgressBar from './ProgressBar'
import styles from '../Main.module.css'

function Card({title}) {
    return (
        <div className={`${styles.card}`}>
            <div className={`${styles.center}`}>{title}</div>
            
            <ProgressBar bgcolor={'darkblue'} progress={'70'} height={20} name={'Positive'} number={13541} />
            <ProgressBar bgcolor={'darkblue'} progress={'50'} height={20} name={'Negative'} number={11839}/>
            <ProgressBar bgcolor={'darkblue'} progress={'42'} height={20} name={'Comments'} number={10463}/>
            <div className={`${styles.lists}`}>
                <li>Total Reviews</li>
                <li>Positive Reviews</li>
                <li>Negative Reviews</li>
                <li>Comments</li>
            </div>
        </div>
    )
}

export default Card
