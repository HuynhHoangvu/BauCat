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
        backgroundImage: 'linear-gradient(120deg, rgba(234, 179, 8, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(234, 179, 8, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        display: 'inline-block',
      }}
    >
      {text}
      <style>{`
        .shiny-text-root {
          color: #eab308; /* Màu vàng cơ bản của logo */
          animation: shiny-text-flow linear infinite;
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