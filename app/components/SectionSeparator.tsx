interface TopSeparatorProps {
  color?: string;
  className?: string;
  overlay?: boolean;
}

export default function TopSeparator({ 
  color = "#076993", 
  className = "",
  overlay = false
}: TopSeparatorProps) {
  const separatorId = "row-top-separator_461";
  
  return (
    <div className={`w-full h-[7.5px] ${overlay ? 'absolute z-10' : ''} top-0 ${className}`}>
      <svg x="0px" y="0px" width="100%" height="7.5px" className="w-full h-full">
        <defs>
          <pattern id={separatorId} x="0" y="0" width="15" height="7.5" patternUnits="userSpaceOnUse">
            <path fillRule="evenodd" clipRule="evenodd" fill={color} d="M0,0 L15,0 L7.5,7.5 Z"></path>
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="7.5" fill={`url(#${separatorId})`}></rect>
      </svg>
    </div>
  );
}
