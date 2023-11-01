import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ICatCardAnimationOnScrollProps {
  children: ReactNode
}

export default function CatCardAnimationOnScroll({
  children,
}: Readonly<ICatCardAnimationOnScrollProps>) {
  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.8, y: 100 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
