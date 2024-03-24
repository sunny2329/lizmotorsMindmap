import { useState } from 'react'
import DesktopComponent from './components/DesktopComponent'
import MobileComponent from './components/MobileComponent';
import { useEffect } from 'react';


function App() {
  // Using state for conditional rendering as per screen size 
  const [isMobile,setIsMobile] = useState(window.innerWidth <=868);

  // Dynamic change of rendering as the screen size changes 
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
    //conditional Rendering
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
