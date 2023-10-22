import * as React from "react";
import { SVGProps } from "react";
const NotificationInactive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    {...props}
  >
    <path
      d="M19 14.086V10.5C19 7.283 16.815 4.573 13.855 3.758C13.562 3.02 12.846 2.5 12 2.5C11.154 2.5 10.438 3.02 10.145 3.758C7.185 4.574 5 7.283 5 10.5V14.086L3.293 15.793C3.19996 15.8857 3.12617 15.9959 3.07589 16.1172C3.0256 16.2386 2.99981 16.3687 3 16.5V18.5C3 18.7652 3.10536 19.0196 3.29289 19.2071C3.48043 19.3946 3.73478 19.5 4 19.5H20C20.2652 19.5 20.5196 19.3946 20.7071 19.2071C20.8946 19.0196 21 18.7652 21 18.5V16.5C21.0002 16.3687 20.9744 16.2386 20.9241 16.1172C20.8738 15.9959 20.8 15.8857 20.707 15.793L19 14.086ZM19 17.5H5V16.914L6.707 15.207C6.80004 15.1143 6.87383 15.0041 6.92412 14.8828C6.9744 14.7614 7.00019 14.6313 7 14.5V10.5C7 7.743 9.243 5.5 12 5.5C14.757 5.5 17 7.743 17 10.5V14.5C17 14.766 17.105 15.02 17.293 15.207L19 16.914V17.5ZM12 22.5C12.6193 22.5008 13.2235 22.3086 13.7285 21.9502C14.2335 21.5917 14.6143 21.0849 14.818 20.5H9.182C9.38566 21.0849 9.76648 21.5917 10.2715 21.9502C10.7765 22.3086 11.3807 22.5008 12 22.5Z"
      fill="#404040"
    />
  </svg>
);
export default NotificationInactive;
