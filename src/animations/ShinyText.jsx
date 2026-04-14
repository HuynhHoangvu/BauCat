import { useMemo } from 'react';

const ShinyText = ({ 
  text, 
  disabled = false, 
  speed = 5, 
  className = "" 
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
      style={{
        animationDuration: animationDuration,
      }}
    >
      {text}
      <style>{`
        .shiny-text {
          color: #b5b5b522;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 60%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          display: inline-block;
          animation: shiny-text-animation linear infinite;
        }

        .shiny-text.disabled {
          animation: none;
        }

        @keyframes shiny-text-animation {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }
      `}</style>
    </span>
  );
};

export default ShinyText;
