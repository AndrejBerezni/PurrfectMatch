import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface IFadeInAnimationProps {
  children: ReactNode
}

export default function FadeInAnimation({
  children,
}: Readonly<IFadeInAnimationProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  )
}
