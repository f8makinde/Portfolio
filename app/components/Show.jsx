import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
const Show = ({children}) => {
    const ref = useRef(null)
    const isInView = useInView(ref,  {once: true})
    const mainControls = useAnimation()
    const slideControls = useAnimation();
    useEffect(()=>{
      if(isInView){
        mainControls.start("visible")
        slideControls.start("visible")
      }
    }, [isInView])
  return (
    <div ref={ref} className='relative overflow-hidden w-fit'>
    <motion.div  variants={{hidden: {opacity: 0, y: 75}, visible: {opacity: 1, y: 0}}} animate={mainControls} initial="hidden"  transition={{duration: 0.5, delay:1, ease:"easeIn"}}>
      {children}
    </motion.div>
    <motion.div className='absolute top-1 bottom-1 left-0 right-0 bg-yellow z-20' variants={{hidden: {left: 0}, visible: {left: "100%"}}} animate={slideControls} initial="hidden"  transition={{duration: 1.5, ease: "easeIn" }} />
  </div>
  )
}
export default Show