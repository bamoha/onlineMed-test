import * as React from "react"
import { SVGProps } from "react"
const CameraIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      stroke="#A4ABB8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.667 8.333h-6.672a2 2 0 0 0-1.414.586l-2.162 2.162a2 2 0 0 1-1.414.586H5.333a2 2 0 0 0-2 2V33a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V20m-5-11.667h10m-5 5v-10M18.333 30a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333Z"
    />
  </svg>
)
export default CameraIcon