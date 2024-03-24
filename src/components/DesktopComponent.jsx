import React, { useState } from 'react'
import Elements from './Elements'
import { ArcherContainer, ArcherElement } from 'react-archer';
import styles from './../Main.module.css'
import './../Ani.css'
import './../Button.css'
import Card from './Card';

function DesktopComponent() {
    const [research, setResearch] = useState(false);
    const [planning, setPlanning] = useState(false);
    const [desiging, setDesiging] = useState(false);
    const [manufacturing, setManufacturing] = useState(false);
    const [sales, setSales] = useState(false);
    const [button, setButton] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
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
            <div className={`${styles.float}`}>
                {isHovered && <Card title={'Online'} />}
            </div>
            <div className={`${styles.float1}`}>
                {isHovered1 && <Card title={'Interview'} />}
            </div>
            <div className={`${styles.float2}`}>
                {isHovered2 && <Card title={'Public Data'} />}
            </div>
            <div className={`${styles.float3}`}>
                {isHovered3 && <Card title={'Health'} />}
            </div>
            <div>
                <ArcherContainer strokeColor='yellow' lineStyle='angle' endMarker={true}
                    strokeWidth={0.5}
                >
                    <div className={`main-container ${styles.container}`}>

                        <div className={`zero-col ${styles.root}`}>
                            <ArcherElement
                                id='zero'
                                relations={[
                                    {
                                        targetId: 'root',
                                        targetAnchor: 'left',
                                        sourceAnchor: 'bottom',
                                        style: {
                                            endMarker: false
                                        }
                                    }
                                ]}

                            >
                                <div></div>
                            </ArcherElement>
                        </div>

                        <div className={`first-col ${styles.root}`}>

                            <ArcherElement
                                id='root'
                                relations={[
                                    {
                                        targetId: 'element1',
                                        targetAnchor: 'left',
                                        sourceAnchor: 'bottom'
                                    },
                                    {
                                        targetId: 'element2',
                                        targetAnchor: 'left',
                                        sourceAnchor: 'bottom'
                                    },
                                    {
                                        targetId: 'element3',
                                        targetAnchor: 'left',
                                        sourceAnchor: 'bottom'
                                    },
                                    {
                                        targetId: 'element4',
                                        targetAnchor: 'left',
                                        sourceAnchor: 'bottom'
                                    },
                                    {
                                        targetId: 'element5',
                                        targetAnchor: 'left',
                                        sourceAnchor: 'bottom'
                                    }
                                ]}
                            >
                                <div></div>
                            </ArcherElement>
                        </div>

                        <div className={`second-col ${styles.cols}`}>

                            <button class="pushable" onClick={clicked}>
                                <span class="front">
                                    {button ? 'Open All' : "Close All"}
                                </span>
                            </button>

                            <div>
                                <ArcherElement
                                    id='element1'
                                    relations={[
                                        {
                                            targetId: 'thirdone',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: research ? '0.5' : '0',
                                                strokeColor: 'blue'
                                            }
                                        },
                                        {
                                            targetId: 'thirdtwo',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: research ? '0.5' : '0',
                                                strokeColor: 'blue'
                                            }
                                        }
                                    ]}
                                >
                                    <div onClick={handleR}>
                                        <Elements name={"Research"} color={"darkblue"} text={'white'} />
                                    </div>
                                </ArcherElement>
                            </div>

                            <div>
                                <ArcherElement
                                    id='element2'
                                    relations={[
                                        {
                                            targetId: 'thirdthree',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: planning ? '0.5' : '0',
                                                strokeColor: 'skyblue'
                                            }
                                        },
                                        {
                                            targetId: 'thirdfourth',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: planning ? '0.5' : '0',
                                                strokeColor: 'skyblue'
                                            }
                                        }
                                    ]}
                                >
                                    <div onClick={handleP}>
                                        <Elements name={"Planning"} color={'skyblue'} />
                                    </div>
                                </ArcherElement>
                            </div>

                            <div>
                                <ArcherElement
                                    id='element3'
                                    relations={[
                                        {
                                            targetId: 'thirdfifth',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: desiging ? '0.5' : '0',
                                                strokeColor: 'coral'
                                            }
                                        },
                                        {
                                            targetId: 'thirdsixth',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: desiging ? '0.5' : '0',
                                                strokeColor: 'coral'
                                            }
                                        }
                                    ]}
                                >
                                    <div onClick={handleD}>
                                        <Elements name={"Desiging"} color={'darkorange'} text={'white'} />
                                    </div>
                                </ArcherElement>
                            </div>

                            <div>
                                <ArcherElement
                                    id='element4'
                                    relations={[
                                        {
                                            targetId: 'thirdseventh',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: manufacturing ? '0.5' : '0',
                                                strokeColor: 'pink'
                                            }
                                        },
                                        {
                                            targetId: 'thirdeighth',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: manufacturing ? '0.5' : '0',
                                                strokeColor: 'pink'
                                            }
                                        }
                                    ]}
                                >
                                    <div onClick={handleM}>
                                        <Elements name={"Manufacturing"} color={'palevioletred'} text={'white'} />
                                    </div>
                                </ArcherElement>
                            </div>

                            <div>
                                <ArcherElement
                                    id='element5'
                                    relations={[
                                        {
                                            targetId: "thirdninth",
                                            targetAnchor: "left",
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: sales ? '0.5' : '0',
                                                strokeColor: 'purple'
                                            }
                                        },
                                        {
                                            targetId: 'thirdtenth',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: sales ? '0.5' : '0',
                                                strokeColor: 'purple'
                                            }
                                        }
                                    ]}
                                >
                                    <div onClick={handleS}>
                                        <Elements name={"Sales/Marketing"} color={'blueviolet'} text={'white'} />
                                    </div>
                                </ArcherElement>
                            </div>
                        </div>


                        <div className={`third-col ${styles.cols}`}>
                            <div className={research ? 'hi' : `${styles.hide}`}>
                                <ArcherElement
                                    id='thirdone'
                                    relations={[
                                        {
                                            targetId: 'fourthone',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: research ? '0.5' : '0',
                                                strokeColor: 'blue'
                                            }
                                        },
                                        {
                                            targetId: 'fourthtwo',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: research ? '0.5' : '0',
                                                strokeColor: 'blue'
                                            }
                                        }
                                    ]}
                                >
                                    <div>
                                        <Elements name={"External"} color={'darkblue'} text={'white'} />
                                    </div>
                                </ArcherElement>
                            </div>

                            <div className={research ? 'hi' : `${styles.hide}`} >
                                <ArcherElement
                                    id='thirdtwo'
                                >
                                    <div>
                                        <Elements name={"Internal"} color={'darkblue'} text={'white'} />
                                    </div>
                                </ArcherElement>
                            </div>

                            <div className={planning ? 'hi' : `${styles.hide}`} >
                                <ArcherElement
                                    id='thirdthree'
                                >
                                    <div>
                                        <Elements name={"PRD"} color={'skyblue'} />
                                    </div>
                                </ArcherElement>
                            </div>

                            <div className={planning ? 'hi' : `${styles.hide}`}>
                                <ArcherElement
                                    id='thirdfourth'
                                >
                                    <div>
                                        <Elements name={"Specs"} color={'skyblue'} />
                                    </div>
                                </ArcherElement>
                            </div>

                            <div className={desiging ? 'hi' : `${styles.hide}`} >
                                <ArcherElement
                                    id='thirdfifth'
                                >
                                    <div>
                                        <Elements name={"Hardware"} color={'darkorange'} text={'white'} />
                                    </div>
                                </ArcherElement>
                            </div>

                            <div className={desiging ? 'hi' : `${styles.hide}`} >
                                <ArcherElement
                                    id='thirdsixth'
                                >
                                    <div>
                                        <Elements name={"Software"} color={'darkorange'} text={'white'} />
                                    </div>
                                </ArcherElement>
                            </div>

                            <div className={manufacturing ? 'hi' : `${styles.hide}`}>
                                <ArcherElement
                                    id='thirdseventh'
                                >
                                    <div>
                                        <Elements name={"Material"} color={"palevioletred"} text={'white'} />
                                    </div>
                                </ArcherElement>
                            </div>

                            <div className={manufacturing ? 'hi' : `${styles.hide}`}>
                                <ArcherElement
                                    id='thirdeighth'
                                >
                                    <div>
                                        <Elements name={"Production"} color={'palevioletred'} text={'white'} />
                                    </div>
                                </ArcherElement>
                            </div>

                            <div className={sales ? 'hi' : `${styles.hide}`} >
                                <ArcherElement
                                    id='thirdninth'
                                >
                                    <div>
                                        <Elements name={"Online"} color={'blueviolet'} text={'white'} />
                                    </div>
                                </ArcherElement>
                            </div>

                            <div className={sales ? 'hi' : `${styles.hide}`}>
                                <ArcherElement
                                    id='thirdtenth'
                                >
                                    <div>
                                        <Elements name={"Dealearship"} color={'blueviolet'} text={'white'} />
                                    </div>
                                </ArcherElement>
                            </div>

                        </div>

                        <div className={`fourth-col ${styles.colss}`}>
                            <div className={research ? 'hi' : `${styles.hide}`} >
                                <ArcherElement
                                    id='fourthone'
                                    relations={[
                                        {
                                            targetId: 'fifthone',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: research ? '0.5' : '0',
                                                strokeColor: 'blue'
                                            }
                                        },
                                        {
                                            targetId: 'fifthtwo',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: research ? '0.5' : '0',
                                                strokeColor: 'blue'
                                            }
                                        },
                                        {
                                            targetId: 'fifththree',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: research ? '0.5' : '0',
                                                strokeColor: 'blue'
                                            }
                                        },
                                        {
                                            targetId: 'fifthfourth',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: research ? '0.5' : '0',
                                                strokeColor: 'blue'
                                            }
                                        }
                                    ]}
                                >
                                    <div>
                                        <Elements name={'B2C'} color={'darkblue'} text={'white'} size='0.6rem' />
                                    </div>
                                </ArcherElement>
                            </div>

                            <div className={research ? 'hi' : `${styles.hide}`} >
                                <ArcherElement
                                    id='fourthtwo'
                                >
                                    <div>
                                        <Elements name={'B2C'} color={'darkblue'} text={'white'} size='0.6rem' />
                                    </div>
                                </ArcherElement>
                            </div>


                        </div>

                        <div className={`fifth-col ${styles.colss}`}>
                            <div className={research ? 'hi' : `${styles.hide}`} onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)} >
                                <ArcherElement
                                    id='fifthone'
                                >
                                    <div>
                                        <Elements name={"Online"} color={'darkblue'} text={'white'} size='0.6rem' />
                                    </div>
                                </ArcherElement>
                            </div>

                            <div className={research ? 'hi' : `${styles.hide}`} onMouseEnter={() => setIsHovered1(true)}
                                onMouseLeave={() => setIsHovered1(false)} >
                                <ArcherElement
                                    id='fifthtwo'
                                >
                                    <div>
                                        <Elements name={"Interview"} color={'darkblue'} text={'white'} size='0.6rem' />
                                    </div>
                                </ArcherElement>
                            </div>

                            <div className={research ? 'hi' : `${styles.hide}`} onMouseEnter={() => setIsHovered2(true)}
                                onMouseLeave={() => setIsHovered2(false)} >
                                <ArcherElement
                                    id='fifththree'
                                >
                                    <div>
                                        <Elements name={"Public Data"} color={'darkblue'} text={'white'} size='0.6rem' />
                                    </div>
                                </ArcherElement>
                            </div>

                            <div className={research ? 'hi' : `${styles.hide}`} onMouseEnter={() => setIsHovered3(true)}
                                onMouseLeave={() => setIsHovered3(false)} >
                                <ArcherElement
                                    id='fifthfourth'
                                >
                                    <div>
                                        <Elements name={"Health"} color={'darkblue'} text={'white'} size='0.6rem' />
                                    </div>
                                </ArcherElement>
                            </div>

                        </div>
                    </div>
                </ArcherContainer>
            </div>

        </>
    )
}

export default DesktopComponent
