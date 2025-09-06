import { cn } from "./cn";

export const TravelIcon = ({ icon: Icon, className, size = 28 }) => {
  return (
    <div
      className={cn(
        "p-4 rounded-full bg-white relative inline-block",
        "hover:animate-pulse-glow",
        className
      )}
    >
      <Icon
        size={size}
        className={cn(
          "stroke-[url(#gradient)]", // Reference the gradient below
          "relative z-10",
          className
        )}
      />
      {/* Gradient overlay for the icon */}
      <svg width="0" height="0">
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </svg>

      <div className="absolute inset-0 sparkle-overlay animate-sparkle"></div>
    </div>
  );
};

export default TravelIcon;