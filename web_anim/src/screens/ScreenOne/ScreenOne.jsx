import { gsap } from 'gsap'
import { useEffect, useRef } from 'react';

const ScreenOne = () => {
    const svgWidth = window.innerWidth;
    const svgHeight = 180;
    const curveHeight = svgHeight + 80;

    //declaring all the references
    const headerSVGRef = useRef(null);
    const headerLOGORef = useRef(null);
    const navbarRef  = useRef(null);


    //creating the timeline for animation
    const t1 = gsap.timeline();

    //animation stuff 
    useEffect(() => {
        let ctx = gsap.context(() => {
            t1.from(headerSVGRef.current, {
                y: -100,
                ease: 'power1.out',
                duration: 0.5,
                clearProps: 'y'

            })
            t1.to(headerSVGRef.current, {
                attr: {
                    d: FinalPath,
                    
                },
                duration: 1,
                    ease: "elastic.out(1.75,0.3)",
            })
            t1.from(headerLOGORef.current, {
                y: -100,
                opacity: 0, 
                duration: 0.3, 
                ease: 'power1.out'
            })
            t1.from(navbarRef.current.querySelectorAll('li'), {
                y: -100,
                opacity:0.3,
                duration:0.3,
                ease: 'power1.out',
                stagger: 0.1
            })

        })
        return () => ctx.revert();

    }, [])



    const InitialPath = `
    M0 0 
    L${svgWidth} 0 
    L${svgWidth} ${svgHeight} 
    Q${svgWidth / 2} ${curveHeight} ${0} ${svgHeight}
    Z
  `;
    const FinalPath = `
    M0 0 
    L${svgWidth} 0 
    L${svgWidth} ${svgHeight} 
    Q${svgWidth / 2} ${svgHeight} ${0} ${svgHeight}
    Z
  `;

   

    return (


        <div className="screenone-master-container">
            
            <div className="header-container">
            <svg className="svg-container" width={svgWidth} height={svgHeight + 100}>
                <path ref={headerSVGRef} d={InitialPath} style={{ 'fill': 'black' }} ></path>
            </svg>
                <div ref={headerLOGORef} className="header-logo">FuckIT</div>
                <div className="navbar-container">
                    <ul ref={navbarRef} className="navbar">
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
