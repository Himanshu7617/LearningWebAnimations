import { useEffect, useRef } from "react"
import {motion, useMotionValue, useSpring} from 'framer-motion'
import {gsap} from 'gsap'

//importing all the screens 
import ScreenOne from "./screens/ScreenOne/ScreenOne"
import ScreenTwo from "./screens/ScreenTwo/ScreenTwo"
import ScreenThree from "./screens/ScreenThree/ScreenThree"
import ScreenFour from "./screens/ScreenFour/ScreenFour"
import ScreenFive from "./screens/ScreenFive/ScreenFive"
import ScreenSix from "./screens/ScreenSix/ScreenSix"
import ScreenSeven from "./screens/ScreenSeven/ScreenSeven"
import ScreenEight from "./screens/ScreenEight/ScreenEight"
import ScreenNine from "./screens/ScreenNine/ScreenNine"

const App = () => {
 //creating all the references
  const cur = useRef(null);
  const damonSalvatoreRef = useRef(null);



  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  }


  function handleMouseMove(e){
    mouse.x.set(e.clientX-15);
    mouse.y.set(e.clientY-15);
  }

  const smoothmouse = {
    x : useSpring(mouse.x),
    y : useSpring(mouse.y)
  }
  //making the cursor move
  useEffect(()=>{
    document.addEventListener('mousemove', handleMouseMove)



    //damonsalvatore hover animations 
    function handleDamonHover(){
      gsap.to(cur.current, {
          scale: 2,
          duration: 0.3,
          ease: 'power3.out'
      })
    }
    function handleDamonLeave(){
      gsap.to(cur.current, {
          scale: 1,
          duration: 0.3,
          ease: 'power3.out'
      })
    }
  
    //adding event listener on hovering on damon salvatore 
    damonSalvatoreRef.current.addEventListener('mouseenter', handleDamonHover);
    damonSalvatoreRef.current.addEventListener('mouseleave', handleDamonLeave);


    return ()=>{
      document.removeEventListener('mousemove', handleMouseMove);
      damonSalvatoreRef.current.removeEventListener('mouseenter', handleDamonHover)
      damonSalvatoreRef.current.removeEventListener('mouseleave', handleDamonLeave)
    }
  },[mouse.x, mouse.y])
  return (
    <div className="app-master-container">
     <motion.div 
     ref={cur} 
     className="cursor-container"
     style={{left:smoothmouse.x, top:smoothmouse.y}}
     >
    
     </motion.div>
      <ScreenOne ref = {damonSalvatoreRef}></ScreenOne>
      <ScreenTwo></ScreenTwo>
      <ScreenThree></ScreenThree>
      <ScreenFour></ScreenFour>
      <ScreenFive></ScreenFive>
      <ScreenSix></ScreenSix>
      <ScreenSeven></ScreenSeven>
      <ScreenEight></ScreenEight>
      <ScreenNine></ScreenNine>
    </div>
  )
}

export default App
