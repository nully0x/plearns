import * as React from "react";
import { SVGProps } from "react";
const TransactionInactive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    {...props}
  >
    <path
      d="M15 12.5L20 8.5L15 4.5V7.499H2V9.499H15V12.5ZM22 15.5H9V12.5L4 16.5L9 20.5V17.5H22V15.5Z"
      fill="#404040"
    />
  </svg>
);
export default TransactionInactive;
