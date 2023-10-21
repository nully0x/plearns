import * as React from "react";
import { SVGProps } from "react";
const PasswordLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={40} height={40} rx={20} fill="#3498DB" fillOpacity={0.1} />
    <path
      d="M20 12C21.654 12 23 13.346 23 15H25C25 12.243 22.757 10 20 10C17.243 10 15 12.243 15 15V17H14C12.897 17 12 17.897 12 19V28C12 29.103 12.897 30 14 30H26C27.103 30 28 29.103 28 28V19C28 17.897 27.103 17 26 17H17V15C17 13.346 18.346 12 20 12ZM26.002 28H21V25.722C21.595 25.375 22 24.737 22 24C22 22.897 21.103 22 20 22C18.897 22 18 22.897 18 24C18 24.736 18.405 25.375 19 25.722V28H14V19H26L26.002 28Z"
      fill="#3498DB"
    />
  </svg>
);
export default PasswordLock;
