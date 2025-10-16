interface BottomSeparatorProps {
  color?: string;
  className?: string;
  overlay?: boolean;
}

export default function BottomSeparator({ 
  color = "#076993", 
  className = "",
  overlay = false
}: BottomSeparatorProps) {
  const separatorId = "row-bottom-separator_461";
  
  return (
    <div className={`w-full h-[8px] ${overlay ? 'absolute z-10' : ''} bottom-0 ${className}`}>
      <svg x="0px" y="0px" width="100%" height="8px" className="w-full h-full" shapeRendering="crispEdges">
        <defs>
          <pattern id={separatorId} x="0" y="0" width="15" height="8" patternUnits="userSpaceOnUse">
            <path fillRule="evenodd" clipRule="evenodd" fill={color} d="M0,8 L15,8 L7.5,0 Z" vectorEffect="non-scaling-stroke"></path>
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="8" fill={`url(#${separatorId})`}></rect>
      </svg>
    </div>
  );
}
