import { forwardRef } from "react";

type ButtonProps = React.ComponentProps<"button"> & { fullWidth?: boolean };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, fullWidth, ...buttonProps }, ref) => {
    let classes =
      "p-2 cursor-pointer bg-yellow disabled:bg-slate-300 disabled:cursor-default " +
      buttonProps.className;

    if (fullWidth) {
      classes += " w-full";
    }

    return (
      <button ref={ref} {...buttonProps} className={classes}>
        {children}
      </button>
    );
  },
);

export default Button;
