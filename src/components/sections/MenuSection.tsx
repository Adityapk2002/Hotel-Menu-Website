"use client"

import { motion } from "motion/react"
import Accordion from "../ui/Accordion"
import Card from "../ui/Card"
import { MENU } from "../data/menu"

export default function MenuSection() {
  return (
    <div className="px-2 space-y-4">
      {MENU.map((section) => (
        <Accordion key={section.title} title={section.title}>
          <div className="space-y-6">
            {section.items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
              >
                <Card {...item} />
              </motion.div>
            ))}
          </div>
        </Accordion>
      ))}
    </div>
  )
}
