import React, {
  FC,
  HtmlHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import EyeOpen from "../assets/EyeOpen.";
import EyeSlash from "../assets/EyeSlash";

interface ButtonProps extends HtmlHTMLAttributes<HTMLInputElement> {
  RightIcon?: React.ComponentType<any>;
}
const Input: FC<ButtonProps> = ({ placeholder, ...prop }) => {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<any>();
  const [isInputValue, setIsInputValue] = useState(false);
  useEffect(() => {
    if (inputRef) {
      if (inputRef?.current?.value) {
        setIsInputValue(true);
      } else {
        setIsInputValue(false);
      }
    }
  }, [inputRef, focus]);
  return (
    <div
      onFocus={() => setFocus(true)}
      onMouseOver={() => setFocus(true)}
      onMouseOut={() => setFocus(false)}
      onBlur={() => setFocus(false)}
      className="flex flex-col px-4 transition-all ease-in-out duration-500 h-14 justify-center py-1 border border-light-neutral-4 rounded-lg"
    >
      <p
        className={`${
          (isInputValue || focus )  ? "translate-y-0 text-[13px]" : "translate-y-3 text-base"
        } transition-all ease-in-out text-light-neutral-5 `}
      >
        {placeholder}
      </p>
      <input
        ref={inputRef}
        className={`${
          (isInputValue || focus ) ? "opacity-1" : "opacity-0"
        } w-full  focus:outline-none bg-transparent text-dark-1`}
      />
    </div>
  );
};

export const PasswordInput: FC<ButtonProps> = ({ placeholder, ...prop }) => {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<any>();
  const [show, setShow] = useState(false);
  const [isInputValue, setIsInputValue] = useState(false);
  useEffect(() => {
    if (inputRef) {
      if (inputRef?.current?.value) {
        setIsInputValue(true);
      } else {
        setIsInputValue(false);
      }
    }
  }, [inputRef, focus]);
  return (
    <div
      onFocus={() => setFocus(true)}
      onMouseOver={() => setFocus(true)}
      onMouseOut={() => setFocus(false)}
      onBlur={() => setFocus(false)}
      className="flex flex-col px-4 transition-all ease-in-out duration-500 h-14 justify-center py-1 border border-light-neutral-4 rounded-lg"
    >
      <p
        className={`${
          (isInputValue || focus )  ? "translate-y-0 text-[13px]" : "translate-y-3 text-base"
        } transition-all ease-in-out text-light-neutral-5 `}
      >
        {placeholder}
      </p>
      <div
        className={` ${
          (isInputValue || focus )  ? "opacity-1" : "opacity-0"
        } flex  justify-between items-center  `}
      >
        <input
        ref={inputRef}
          type={show ? "text" : "password"}
          className={`${
            (isInputValue || focus )  ? "opacity-1" : "opacity-0"
          } w-full  focus:outline-none bg-transparent text-dark-1`}
        />
        {show ? (
          <EyeOpen className="cursor-pointer" onClick={() => setShow(false)} />
        ) : (
          <EyeSlash className="cursor-pointer" onClick={() => setShow(true)} />
        )}
      </div>
    </div>
  );
};
export default Input;
