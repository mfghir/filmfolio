const GradientDefs = () => (
    <svg width="0" height="0">
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#8E2DE2", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#4A00E0", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
  
  const GradientIcon = ({ IconComponent, ...props }: { IconComponent: React.ReactElement, props: any }) => (
    <>
      <GradientDefs />
      {React.cloneElement(IconComponent, {
        ...props,
        stroke: "url(#iconGradient)", // or fill: "url(#iconGradient)"
        width: 24,
        height: 24,
      })}
    </>
  );
  
//   // Example usage with icons:
//   import { IconMessageCircle, IconStar, IconGrid } from '@tabler/icons-react';
  
//   const YourComponent = () => (
//     <div className="flex space-x-4">
//       <div className="flex items-center space-x-1">
//         <GradientIcon IconComponent={<IconGrid />} />
//         <span>فیلم ها</span>
//       </div>
//       <div className="flex items-center space-x-1">
//         <GradientIcon IconComponent={<IconMessageCircle />} />
//         <span>نظر ها</span>
//       </div>
//       <div className="flex items-center space-x-1">
//         <GradientIcon IconComponent={<IconStar />} />
//         <span>امتیاز</span>
//       </div>
//     </div>
//   );
  