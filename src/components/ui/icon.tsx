
import React from "react";
import * as LucideIcons from "lucide-react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  fallback?: string;
}

const Icon = ({
  name,
  color,
  size = 24,
  strokeWidth = 2,
  fallback = "CircleAlert",
  ...props
}: IconProps) => {
  // @ts-ignore - LucideIcons has dynamic keys
  const LucideIcon = LucideIcons[name] || LucideIcons[fallback];

  return (
    <LucideIcon
      color={color}
      size={size}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
};

export default Icon;
