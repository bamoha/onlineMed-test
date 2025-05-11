import * as React from "react";
import { SVGProps } from "react";

interface CheckIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const CheckIcon: React.FC<CheckIconProps> = ({
  height = 24,
  width = 24,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.118}
      d="m1.154 6.059 2.824 2.823 7.058-7.058"
    />
  </svg>
);
export default CheckIcon;
