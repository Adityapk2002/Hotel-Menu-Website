"use client"
import {motion} from 'motion/react'
const Loader = () => {
  return (
    <div>
      <Icon/>
    </div>
  )
}

export default Loader

const Icon = () => {
    return(
        <motion.svg 
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="h-16 w-16 stroke-neutral-400">
        <motion.path
        stroke="none" 
        d="M0 0h24v24H0z" 
        fill="none"/>
        <motion.path
        initial = {{ pathLength : 0 , fill : "var(--color-neutral-50)"}} 
        animate = {{ pathLength : 1 , fill : "var(--color-yellow-200)"}}
        transition={{duration : 2 , ease: "easeInOut", repeat: Infinity, repeatType : "reverse"}} 
        d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
        </motion.svg>
    )
}