import { useMemo } from 'react';
import { motion } from 'framer-motion';

const SplitText = ({ 
  text, 
  className = "", 
  delay = 0,
  animationProps = {
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, ease: [0.2, 0, 0.2, 1] }
  }
}) => {
  const letters = useMemo(() => text.split(""), [text]);

  return (
    <span className={`inline-block ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={animationProps.initial}
          whileInView={animationProps.animate}
          viewport={{ once: true }}
          transition={{
            ...animationProps.transition,
            delay: delay + index * 0.03
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
};

export default SplitText;
