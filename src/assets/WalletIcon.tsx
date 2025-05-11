import * as React from "react";
import { SVGProps } from "react";
const WalletIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
    {...props}
  >
    <path
      stroke="#808897"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.933}
      d="M1.167 5.245h11.666M3.5 9.912h1.167M6.125 9.912h2.333"
    />
    <path
      stroke="#808897"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.933}
      d="M3.757 2.328h6.48c2.077 0 2.596.514 2.596 2.561v4.79c0 2.047-.519 2.56-2.59 2.56H3.757c-2.071.006-2.59-.507-2.59-2.555V4.89c0-2.047.519-2.56 2.59-2.56Z"
    />
  </svg>
);
export default WalletIcon;
