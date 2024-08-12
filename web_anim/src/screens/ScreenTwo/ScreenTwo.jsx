import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap";

const ScreenTwo = () => {

  //declaring all the references
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);
  const textRef5 = useRef(null);

  gsap.registerPlugin(ScrollTrigger)
  //declaring the timeline
  const t1 = gsap.timeline();
  useEffect(() => {
    const ctx = gsap.context(() => {
      t1.to(textRef2.current, {
        x: "-50%",
        ease: "power4.out",
        scrollTrigger:textRef2.current,
      });
    });


    return () => { ctx.revert() }
  })


  return (
    <div className='screentwo-master-container'>
      <div className="text-container1 headline">
        <div ref={textRef1} className="both-headline-container1 both-headline-container">
          <div className="text-line-1 text-line">Life is great when you practice gratitute</div>
          <div className="text-line-2 text-line">Life is great when you practice gratitute</div>
        </div>
      </div>
      <div className="text-container2 headline">
        <div ref={textRef2} className="both-headline-container2 both-headline-container">
          <div className="text-line-3 text-line">Life is great when you practice gratitute</div>
          <div className="text-line-4 text-line">Life is great when you practice gratitute</div>
        </div>
      </div>
      <div className="text-container3 headline">
        <div ref={textRef3} className="both-headline-container3 both-headline-container">
          <div className="text-line-5 text-line">Life is great when you practice gratitute</div>
          <div className="text-line-6 text-line">Life is great when you practice gratitute</div>
        </div>
      </div>
      <div className="text-container4 headline">
        <div ref={textRef4} className="both-headline-container4 both-headline-container">
          <div className="text-line-7 text-line">Life is great when you practice gratitute</div>
          <div className="text-line-8 text-line">Life is great when you practice gratitute</div>
        </div>
      </div>
      <div className="text-container5 headline">
        <div ref={textRef5} className="both-headline-container5 both-headline-container">
          <div className="text-line-9 text-line">Life is great when you practice gratitute</div>
          <div className="text-line-10 text-line">Life is great when you practice gratitute</div>
        </div>
      </div>
    </div>
  )
}

export default ScreenTwo
