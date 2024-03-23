import React from 'react'

const ProgressBar = ({ bgcolor, progress, height, name, number }) => {

    const Parentdiv = {
        height: height,
        width: '60%',
        backgroundColor: 'whitesmoke',
        borderRadius: 0,
        margin: 2,
        border: '0.5px solid black',
        zIndex: '2',
        display: 'inline-block'
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 0,
        textAlign: 'right'
    }

    const progresstext = {
        padding: 10,
        color: 'white',
        fontWeight: 900
    }

    return (
        <div>
            <div style={{ display: 'inline-block', marginRight: '10px', fontSize: '0.6rem' }}>{name}</div>
            <div style={Parentdiv}>
                <div style={Childdiv}>
                    <span style={progresstext}></span>

                </div>
            </div>
            <div style={{ display: 'inline-block', marginLeft: '5px', fontSize: '0.6rem' }}>{number}</div>
        </div>

    )
}

export default ProgressBar;