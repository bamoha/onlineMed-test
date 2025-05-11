import * as React from "react"
import { SVGProps } from "react"
const BackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.333 28.333 5 20m0 0 8.333-8.333M5 20h30"
    />
  </svg>
)
export default BackIcon