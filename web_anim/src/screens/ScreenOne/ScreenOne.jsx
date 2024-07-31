import {gsap} from 'gsap'
import {  useLayoutEffect, useRef } from 'react';

const ScreenOne = () => {
    const svgWidth = window.innerWidth;
    const svgHeight = 110

    //declaring all the references
    const headerSVGRef = useRef(null);



    //creating the timeline for animation
    const t1 = gsap.timeline();

    //animation stuff 
    useLayoutEffect(()=>{
       
        t1.to(
            headerSVGRef.current, {
                attr: {d : rectPath}, duration:2.5, ease: "power4.out"
            }
        )
    },[])
    


    const rectPath = `M0 0 L${svgWidth} 0 L${svgWidth} ${svgHeight} L0 ${svgHeight} Z`;
    const rectCurvePath2 = `
    M0 0 
    L${svgWidth} 0 
    L${svgWidth} ${svgHeight/2} 
    Q${svgWidth / 2} ${svgHeight/2 + 50} ${0} ${svgHeight/2}
    Z
  `;

  const rectCurvePath3= `
  M0 0 
  L${svgWidth} 0 
  L${svgWidth} ${svgHeight/2} 
  Q${svgWidth - svgWidth/4} ${svgHeight/2 + 50} ${svgWidth/2} ${svgHeight/2}
  Q${svgWidth/4} ${svgHeight/2+40} 0 ${svgHeight/2}
  Z
`;
  const rectCurvePath1    = `
    M0 0 
    L${svgWidth} 0 
    Q${svgWidth / 2} ${svgHeight/2 + 20} ${0} ${0/2}
    Z
  `;

  
    return (
        

        <div className="screenone-master-container">
            <svg  className="svg-container" width={svgWidth} height={svgHeight}>
                <path ref={headerSVGRef} d={rectCurvePath2} style={{'fill':'black'}} ></path>
            </svg>
            <div className="header-container">
                <div className="header-logo">FuckIT</div>
                <div className="navbar-container">
                    <ul className="navbar">
                        <li>tell</li>
                        <li>your</li>
                        <li>celebrity</li>
                        <li>crush</li>
                    </ul>
                </div>
            </div>
            <div className="hero-container">
                <div className="hero-text">
                    <h1>what do i have to do to get </h1>
                    <h1>in bed with</h1>
                    <div className="damon-container">
                        <h1>my one love, </h1>
                        <h1 className="damon-salvatore">DAMON SALVATORE</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScreenOne
