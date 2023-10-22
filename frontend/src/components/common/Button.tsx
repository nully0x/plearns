import React, { FC, HtmlHTMLAttributes } from "react";

interface ButtonProps extends HtmlHTMLAttributes<HTMLDivElement> {
    RightIcon?: React.ComponentType<any>;
}
export const FilledButton: FC<ButtonProps> = ({children,RightIcon, className,
  ...props
}) => {
  return (
    <div role="button" className={`bg-primary-green text-white text-sm hover:opacity-[0.92] 
    focus:opacity-[0.88] active:opacity-[0.88] disabled:opacity-[0.5] font-medium
      h-10 flex items-center gap-2 rounded-lg px-4 shadow-button ${className}`} {...props}>
      <p className="whitespace-nowrap">{children}</p>
        {RightIcon && <RightIcon/>}
    </div>
  );
};

export const OutlinedButton: FC<ButtonProps> = ({children,RightIcon, className,
  ...props
}) => {
  return (
    <div role="button" className={`border border-light-neutral-4 text-sm hover:bg-light-neutral-2 active:bg-light-neutral-2  text-primary-green 
    focus:opacity-[0.88] active:opacity-[0.88] disabled:opacity-[0.5] font-medium disabled:bg-light-neutral-2 
      h-10 flex items-center gap-2 rounded-lg px-4  ${className}`} {...props}>
      <p>{children}</p>
        {RightIcon && <RightIcon/>}
    </div>
  );
};

export const GhostButton: FC<ButtonProps> = ({children,RightIcon, className,
  ...props
}) => {
  return (
    <div role="button" className={` text-sm text-primary-green 
    focus:opacity-[0.88] active:opacity-[0.88] disabled:opacity-[0.5] font-medium 
      h-10 flex items-center gap-2 rounded-lg px-4  ${className}`} {...props}>
      <p>{children}</p>
        {RightIcon && <RightIcon/>}
    </div>
  );
};
