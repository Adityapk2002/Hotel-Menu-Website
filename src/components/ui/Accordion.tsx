"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ChevronDown } from "lucide-react"

type AccordionProps = {
    title : string,
    children : React.ReactNode
}

export default function Accordion({title , children} : AccordionProps){
  const[isOpen, setIsOpen] = useState(true)
  return(
    <>
    <div className="pb-2 px-2">
      <button 
      onClick={() => setIsOpen(prev => !prev)}
      className="w-full flex justify-between items-center py-2 ">
        <span className="text-2xl font-semibold font-dm">{title}</span>

          <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-xl cursor-pointer"
        >
          <ChevronDown/>
        </motion.span>
      </button>

       <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
    </>
  )
}


