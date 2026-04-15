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
        /* Đổi gradient: Base vàng (#eab308) -> Sáng trắng (#ffffff) -> Base vàng (#eab308) */
        backgroundImage: 'linear-gradient(120deg, #eab308 40%, #ffffff 50%, #eab308 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        /* Bắt buộc phải có 2 dòng dưới để chữ trong suốt, lộ background lấp lánh lên */
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        display: 'inline-block',
      }}
    >
      {text}
      <style>{`
        .shiny-text-root {
          /* Không dùng color ở đây nữa, và tách thuộc tính animation để không ghi đè duration */
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