const Loading = ({
  size = 'md',
  label = 'Loading',
  fullScreen = false,
  className = '',
}) => {
  const sizes = {
    sm: { wrapper: 'h-6 w-6', ring: 'border-2', dot: 'h-1.5 w-1.5' },
    md: { wrapper: 'h-12 w-12', ring: 'border-[3px]', dot: 'h-2.5 w-2.5' },
    lg: { wrapper: 'h-16 w-16', ring: 'border-4', dot: 'h-3.5 w-3.5' },
  };

  const currentSize = sizes[size] || sizes.md;

  const spinner = (
    <div
      role="status"
      aria-live="polite"
      className={`inline-flex flex-col items-center justify-center gap-4 ${className}`}
    >
      {/* Layered animated spinner */}
      <div className={`relative flex items-center justify-center ${currentSize.wrapper}`}>
        {/* Outer red glow pulse */}
        <span
          className="absolute inset-0 rounded-full bg-red-600/20 animate-ping"
          aria-hidden="true"
        />

        {/* Spinning red ring */}
        <span
          className={`absolute inset-0 rounded-full border-neutral-800 border-t-red-600 border-r-red-500/50 animate-spin ${currentSize.ring}`}
          aria-hidden="true"
        />

        {/* Inner pulsing core */}
        <span
          className={`rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)] animate-pulse ${currentSize.dot}`}
          aria-hidden="true"
        />
      </div>

      {/* Animated label with bouncing dots */}
      {label && (
        <div className="flex items-center gap-1 text-sm font-semibold tracking-widest uppercase text-red-500 animate-pulse">
          <span>{label}</span>
          <span className="inline-flex gap-0.5">
            <span className="animate-bounce [animation-delay:-0.3s]">.</span>
            <span className="animate-bounce [animation-delay:-0.15s]">.</span>
            <span className="animate-bounce">.</span>
          </span>
        </div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
        {spinner}
      </div>
    );
  }

  return (
    <div className="inline-flex items-center justify-center rounded-xl bg-neutral-950 p-6 border border-red-900/40 shadow-lg shadow-red-950/30">
      {spinner}
    </div>
  );
};

export default Loading;