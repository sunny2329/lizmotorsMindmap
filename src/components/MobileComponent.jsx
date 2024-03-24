import React from 'react'
import { ArcherContainer, ArcherElement } from 'react-archer'
import styles from './../Main.module.css'
import Elements from './Elements'
import { useState } from 'react'
import './../Button.css'
import Card from './Card'
import style from './../Mobile.module.css'

function MobileComponent() {
    //All the head components of the tree 
    const [research, setResearch] = useState(false);
    const [planning, setPlanning] = useState(false);
    const [desiging, setDesiging] = useState(false);
    const [manufacturing, setManufacturing] = useState(false);
    const [sales, setSales] = useState(false);

    //Button state 
    const [button, setButton] = useState(false);

    //Hovering status using state of each segment
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

    //All the handle functions when the head element is clicked
    const handleR = () => {
        setResearch(!research);
    }
    const handleP = () => {
        setPlanning(!planning);
    }
    const handleD = () => {
        setDesiging(!desiging);
    }
    const handleM = () => {
        setManufacturing(!manufacturing);
    }
    const handleS = () => {
        setSales(!sales);
    }


    //Handle function for Open ALl/Close All button
    const clicked = () => {
        if (button) {
            setResearch(false);
            setPlanning(false);
            setDesiging(false);
            setManufacturing(false);
            setSales(false);
            setButton(false);
        } else {
            setResearch(true);
            setPlanning(true);
            setDesiging(true);
            setManufacturing(true);
            setSales(true);
            setButton(true);
        }
    }

    return (
        <>
            {/* All the cards that need to shown when a segment is hovered  */}
            <div className={`${style.float}`}>
                {isHovered && <Card title={'Online'} />}
            </div>
            <div className={`${style.float1}`}>
                {isHovered1 && <Card title={'Interview'} />}
            </div>
            <div className={`${style.float2}`}>
                {isHovered2 && <Card title={'Public Data'} />}
            </div>
            <div className={`${style.float3}`}>
                {isHovered3 && <Card title={'Health'} />}
            </div>


            <div>
                <ArcherContainer strokeColor='yellow' lineStyle='angle' endMarker={true}
                    strokeWidth={0.5}>
                    {/******************* Main Container Starts Here ******************************** */}
                    <div className={`mcontainer ${styles.mob}`}>

                        {/********************* Button Starts Here  *************************/}
                        <button class="pushable" >
                            <span class="front" onClick={clicked}>
                                {button ? 'Close All' : "Open All"}
                            </span>
                        </button>
                        {/***************** Button Ends Here  ********************************/}

                        {/************* First Element Starts Here **************************** */}
                        <div className="firstel">
                            {/****************** First Level Starts Here ****************************** */}
                            <div className="firstlevel">
                                <ArcherElement
                                    id='research'
                                    relations={[
                                        {
                                            targetId: 'secondone',
                                            targetAnchor: 'top',
                                            sourceAnchor: 'bottom',
                                            style: {
                                                strokeWidth: research ? '0.5' : '0',
                                                strokeColor: 'blue'
                                            }
                                        },
                                        {
                                            targetId: 'secondtwo',
                                            targetAnchor: 'top',
                                            sourceAnchor: 'bottom',
                                            style: {
                                                strokeWidth: research ? '0.5' : '0',
                                                strokeColor: 'blue'
                                            }
                                        }
                                    ]}
                                >
                                    <div onClick={handleR}>
                                        <Elements name={"Research"} text={"white"} color={"darkblue"} size='1.6rem' />
                                    </div>
                                </ArcherElement>
                            </div>
                            {/*************** First Level Ends Here  *******************************************/}

                            {/*****************Second Level Starts Here ******************************* */}
                            <div className={`secondlevel ${styles.secondlevel}`}>

                                <div className={research ? 'hi' : `${styles.hide}`}>
                                    <ArcherElement
                                        id='secondone'
                                        relations={[
                                            {
                                                targetId: 'b2b',
                                                sourceAnchor: 'bottom',
                                                targetAnchor: 'top',
                                                style: {
                                                    lineStyle: 'curve',
                                                    strokeWidth: research ? '0.5' : '0',
                                                    strokeColor: 'blue'
                                                }
                                            },
                                            {
                                                targetId: 'b2c',
                                                targetAnchor: 'top',
                                                sourceAnchor: 'bottom',
                                                style: {
                                                    lineStyle: 'curve',
                                                    strokeWidth: research ? '0.5' : '0',
                                                    strokeColor: 'blue'
                                                }
                                            }
                                        ]}
                                    >
                                        <div>
                                            <Elements name={"External"} color={"darkblue"} text={'white'} />
                                        </div>
                                    </ArcherElement>
                                </div>

                                <div className={research ? 'hi' : `${styles.hide}`}>
                                    <ArcherElement
                                        id='secondtwo'

                                    >
                                        <div>
                                            <Elements name={'Internal'} color={'darkblue'} text={'white'} />
                                        </div>
                                    </ArcherElement>
                                </div>

                            </div>
                            {/*********** Second Level Ends Here ************************************* */}

                            {/*********************** Third Level Starts Here ************************** */}
                            <div className={`thirdlevel ${styles.thirdlevel}`}>
                                <div className={research ? 'hi' : `${styles.hide}`}>
                                    <ArcherElement
                                        id="b2b"
                                        relations={[
                                            {
                                                targetId: 'onlines',
                                                targetAnchor: 'top',
                                                sourceAnchor: 'bottom',
                                                style: {
                                                    strokeColor: 'blue',
                                                    strokeWidth: research ? '0.5' : '0',
                                                }
                                            },
                                            {
                                                targetId: 'interview',
                                                targetAnchor: 'top',
                                                sourceAnchor: 'bottom',
                                                style: {
                                                    lineStyle: 'curve',
                                                    strokeColor: 'blue',
                                                    strokeWidth: research ? '0.5' : '0'
                                                }
                                            },
                                            {
                                                targetId: 'public',
                                                targetAnchor: 'top',
                                                sourceAnchor: 'bottom',
                                                style: {
                                                    lineStyle: 'curve',
                                                    strokeColor: 'blue',
                                                    strokeWidth: research ? '0.5' : '0'
                                                }
                                            },
                                            {
                                                targetId: 'health',
                                                targetAnchor: 'top',
                                                sourceAnchor: 'bottom',
                                                style: {
                                                    lineStyle: 'curve',
                                                    strokeColor: 'blue',
                                                    strokeWidth: research ? '0.5' : '0'
                                                }
                                            }
                                        ]}
                                    >
                                        <div>
                                            <Elements name={'B2B'} text={'white'} color={'darkblue'} size='0.6rem' />
                                        </div>
                                    </ArcherElement>
                                </div>

                                <div className={research ? 'hi' : `${styles.hide}`}>
                                    <ArcherElement id="b2c">
                                        <div>
                                            <Elements name={'B2C'} text={'white'} color={'darkblue'} size='0.6rem' />
                                        </div>
                                    </ArcherElement>
                                </div>

                            </div>
                            {/************** Third Level Ends Here ************************************* */}

                            {/************ Fourth Level Starts Here ********************************* */}
                            <div className={`fourthlevel ${styles.fourthlevel}`}>

                                <div className={research ? 'hi' : `${styles.hide}`} onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)} >
                                    <ArcherElement id="onlines">
                                        <div>
                                            <Elements name={'Online'} text={'white'} color={'darkblue'} size='0.5rem' />
                                        </div>
                                    </ArcherElement>
                                </div>

                                <div className={research ? 'hi' : `${styles.hide}`} onMouseEnter={() => setIsHovered1(true)}
                                    onMouseLeave={() => setIsHovered1(false)} >
                                    <ArcherElement id="interview">
                                        <div>
                                            <Elements name={'Interview'} text={'white'} color={'darkblue'} size='0.5rem' />
                                        </div>
                                    </ArcherElement>
                                </div>

                                <div className={research ? 'hi' : `${styles.hide}`} onMouseEnter={() => setIsHovered2(true)}
                                    onMouseLeave={() => setIsHovered2(false)} >
                                    <ArcherElement id="public">
                                        <div>
                                            <Elements name={'Public Data'} text={'white'} color={'darkblue'} size='0.5rem' />
                                        </div>
                                    </ArcherElement>
                                </div>

                                <div className={research ? 'hi' : `${styles.hide}`} onMouseEnter={() => setIsHovered3(true)}
                                    onMouseLeave={() => setIsHovered3(false)} >
                                    <ArcherElement id="health">
                                        <div>
                                            <Elements name={'Health'} text={'white'} color={'darkblue'} size='0.5rem' />
                                        </div>
                                    </ArcherElement>
                                </div>


                            </div>
                            {/* ******************* Fourth Level Ends Here  **************************** */}

                        </div>

                        {/* ***************** Second Element Starts Here  *************************** */}
                        <div className="secondel">
                            {/* First Level Starts Here */}
                            <div className="firstlevel">
                                <ArcherElement
                                    id='planning'
                                    relations={[
                                        {
                                            targetId: 'prd',
                                            targetAnchor: 'top',
                                            sourceAnchor: 'bottom',
                                            style: {
                                                strokeColor: 'skyblue',
                                                strokeWidth: planning ? '0.5' : '0'
                                            }
                                        },
                                        {
                                            targetId: 'specs',
                                            targetAnchor: 'top',
                                            sourceAnchor: 'bottom',
                                            style: {
                                                strokeColor: 'skyblue',
                                                strokeWidth: planning ? '0.5' : '0'
                                            }
                                        }
                                    ]}
                                >
                                    <div onClick={handleP}>
                                        <Elements name={"Planning"} color={"skyblue"} size='1.6rem' />
                                    </div>
                                </ArcherElement>
                            </div>
                            {/* First Level Ends Here  */}

                            {/* Second Level Starts Here  */}
                            <div className={`secondlevel ${styles.secondlevel}`}>
                                <div className={planning ? 'hi' : `${styles.hide}`}>
                                    <ArcherElement
                                        id='prd'
                                    >
                                        <div>
                                            <Elements name={'PRD'} color={'skyblue'} />
                                        </div>
                                    </ArcherElement>
                                </div>

                                <div className={planning ? 'hi' : `${styles.hide}`}>
                                    <ArcherElement
                                        id='specs'
                                    >
                                        <div>
                                            <Elements name={'Specs'} color={'skyblue'} />
                                        </div>
                                    </ArcherElement>
                                </div>
                            </div>
                            {/* Second Level Ends Here  */}
                        </div>
                        {/************************** Second Element Ends Here *********************** */}

                        {/************************** Third Element Starts Here ********************** */}
                        <div className="thirdel">
                            {/* First Level Starts Here  */}
                            <div className="firstlevel">
                                <ArcherElement
                                    id='desiging'
                                    relations={[
                                        {
                                            targetId: 'hardware',
                                            targetAnchor: 'top',
                                            sourceAnchor: 'bottom',
                                            style: {
                                                strokeColor: 'coral',
                                                strokeWidth: desiging ? '0.5' : '0'
                                            }
                                        },
                                        {
                                            targetId: 'software',
                                            targetAnchor: 'top',
                                            sourceAnchor: 'bottom',
                                            style: {
                                                strokeColor: 'coral',
                                                strokeWidth: desiging ? '0.5' : '0'
                                            }
                                        }
                                    ]}
                                >
                                    <div onClick={handleD}>
                                        <Elements name={"Desiging"} color={"darkorange"} text={"white"} size='1.6rem' />
                                    </div>
                                </ArcherElement>
                            </div>
                            {/* First Level Ends Here  */}

                            {/* Second Level Starts Here  */}
                            <div className={`secondlevel ${styles.secondlevel}`}>
                                <div className={desiging ? 'hi' : `${styles.hide}`}>
                                    <ArcherElement id="hardware">
                                        <div>
                                            <Elements name={'Hardware'} color={'darkorgange'} text={'white'} />
                                        </div>
                                    </ArcherElement>
                                </div>

                                <div className={desiging ? 'hi' : `${styles.hide}`}>
                                    <ArcherElement id="software">
                                        <div>
                                            <Elements name={'Software'} color={'darkorange'} text={'white'} />
                                        </div>
                                    </ArcherElement>
                                </div>
                            </div>
                            {/* Second Level Ends Here  */}
                        </div>
                        {/* ******************* Third Element Ends Here ****************************** */}

                        {/* ******************** Fourth Element Starts Here ************************** */}
                        <div className="fourthel">
                            {/* First Level Starts Here  */}
                            <div className="firstlevel">
                                <ArcherElement
                                    id='manufacturing'
                                    relations={[
                                        {
                                            targetId: "material",
                                            targetAnchor: 'top',
                                            sourceAnchor: "bottom",
                                            style: {
                                                strokeColor: 'pink',
                                                strokeWidth: manufacturing ? '0.5' : '0'
                                            }
                                        },
                                        {
                                            targetId: 'production',
                                            targetAnchor: 'top',
                                            sourceAnchor: 'bottom',
                                            style: {
                                                strokeColor: 'pink',
                                                strokeWidth: manufacturing ? '0.5' : '0'
                                            }
                                        }
                                    ]}
                                >
                                    <div onClick={handleM}>
                                        <Elements name={"Manufacturing"} color={"palevioletred"} text={'white'} size='1.6rem' />
                                    </div>
                                </ArcherElement>
                            </div>
                            {/* First Level Ends Here  */}

                            {/* Second Level Starts Here  */}
                            <div className={`secondlevel ${styles.secondlevel}`}>
                                <div className={manufacturing ? 'hi' : `${styles.hide}`}>
                                    <ArcherElement id="material">
                                        <div>
                                            <Elements name={'Material'} color={'palevioletred'} text={'white'} />
                                        </div>
                                    </ArcherElement>
                                </div>

                                <div className={manufacturing ? 'hi' : `${styles.hide}`}>
                                    <ArcherElement id="production">
                                        <div>
                                            <Elements name={'Production'} color={'palevioletred'} text={'white'} />
                                        </div>
                                    </ArcherElement>
                                </div>
                            </div>
                            {/* Second Level Ends Here  */}
                        </div>
                        {/* ************************ Fourth Element Ends Here ************************* */}

                        {/************************* Fifth Element Starts Here  ***************************/}
                        <div className="fifthel">
                            {/* First Element Starts Here  */}
                            <div className="firstlevel">
                                <ArcherElement
                                    id='sales'
                                    relations={[
                                        {
                                            targetId: 'online',
                                            targetAnchor: 'top',
                                            sourceAnchor: 'bottom',
                                            style: {
                                                strokeColor: 'purple',
                                                strokeWidth: sales ? '0.5' : '0'
                                            }
                                        },
                                        {
                                            targetId: 'dealearship',
                                            targetAnchor: 'top',
                                            sourceAnchor: 'bottom',
                                            style: {
                                                strokeColor: 'purple',
                                                strokeWidth: sales ? '0.5' : '0'
                                            }
                                        }
                                    ]}
                                >
                                    <div onClick={handleS}>
                                        <Elements name={"Sales/Marketing"} text={"white"} size='1.6rem' color={'blueviolet'} />
                                    </div>
                                </ArcherElement>
                            </div>
                            {/* First Element Ends Here  */}

                            {/* Second Element Starts Here  */}
                            <div className={`secondlevel ${styles.secondlevel}`}>
                                <div className={sales ? 'hi' : `${styles.hide}`}>
                                    <ArcherElement id="online">
                                        <div>
                                            <Elements name={"Online"} color={'blueviolet'} text={'white'} />
                                        </div>
                                    </ArcherElement>
                                </div>

                                <div className={sales ? 'hi' : `${styles.hide}`}>
                                    <ArcherElement id="dealearship">
                                        <div>
                                            <Elements name={'Dealearship'} color={'blueviolet'} text={'white'} />
                                        </div>
                                    </ArcherElement>
                                </div>
                            </div>
                            {/* Second Element Ends Here  */}
                        </div>
                        {/* *********************** Fifth Elemtn Ends Here  *******************************/}
                    </div>
                    {/****************** Main Container Ends Here *********************************** */}
                </ArcherContainer>
            </div>
        </>
    )
}

export default MobileComponent
