const ShinyText = ({ 
  text, 
  disabled = false, 
  speed = 4, 
  className = "" 
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`shiny-text-root ${disabled ? "disabled" : ""} ${className}`}
      style={{
        animationDuration: animationDuration,
        backgroundImage: 'linear-gradient(120deg, #eab308 40%, #ffffff 50%, #eab308 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        display: 'inline-block',
      }}
    >
      {text}
      <style>{`
        .shiny-text-root {
          animation-name: shiny-text-flow;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .shiny-text-root.disabled {
          animation: none;
        }

        @keyframes shiny-text-flow {
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