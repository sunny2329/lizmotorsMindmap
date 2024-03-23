import { useState } from 'react'
import DesktopComponent from './components/DesktopComponent'
import MobileComponent from './components/MobileComponent';
import { useEffect } from 'react';
import Card from './components/Card';

function App() {
  const [isMobile,setIsMobile] = useState(window.innerWidth <=868);

  useEffect(()=>{
    const handleResize = () => {
      setIsMobile(window.innerWidth<=868);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize',handleResize);
    };
  },[]);

  

  return (
    <>
      {
        isMobile ? (
          <MobileComponent />
        ) : (
          <DesktopComponent />
        )
      }

    </>
  )
}

export default App
