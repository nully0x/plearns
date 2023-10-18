import React, { FC, HtmlHTMLAttributes } from "react";

interface ButtonProps extends HtmlHTMLAttributes<HTMLDivElement> {
    RightIcon?: React.ComponentType<any>;
}
export const FilledButton: FC<ButtonProps> = ({children,RightIcon,
  ...props
}) => {
  return (
    <div role="button" className="bg-primary-green text-white" {...props}>
      <p>{children}</p>
        {RightIcon && <RightIcon/>}
    </div>
  );
};
