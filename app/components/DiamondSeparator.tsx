interface DiamondSeparatorProps {
  className?: string;
}

export default function DiamondSeparator({ className = "" }: DiamondSeparatorProps) {
  const separatorId = "diamond-separator-pattern";
  
  return (
    <div className={`w-full h-[16px] ${className}`}>
      <svg x="0px" y="0px" width="100%" height="16px" className="w-full h-full" shapeRendering="crispEdges">
        <defs>
          <pattern id={separatorId} x="0" y="0" width="15" height="16" patternUnits="userSpaceOnUse">
            <path fillRule="evenodd" clipRule="evenodd" fill="#076993" d="M7.5,0 L15,8 L7.5,16 L0,8 L7.5,0 Z" vectorEffect="non-scaling-stroke"></path>
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="16" fill={`url(#${separatorId})`}></rect>
      </svg>
    </div>
  );
}
