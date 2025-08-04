import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  // Base styles matching your current pattern
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        // Primary style (matches your current buttons)
        primary:
          "border border-primary bg-primary text-white hover:bg-white hover:text-black",

        // Secondary/outline style
        secondary:
          "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",

        // Ghost style (like your menu buttons)
        ghost: "hover:bg-slate-200 text-gray-700 hover:text-black",

        // Destructive style
        destructive:
          "border border-red-500 bg-red-500 text-white hover:bg-red-600",

        // Disabled style
        disabled:
          "opacity-50 cursor-not-allowed bg-gray-300 text-gray-500 border-gray-300",
      },
      size: {
        // Default size (matches your py-2 px-6)
        default: "py-2 px-6",

        // Small size (like your py-2 px-4)
        sm: "py-2 px-4",

        // Large size (like your py-3 px-4)
        lg: "py-3 px-4",

        // Full width (like your w-full buttons)
        full: "w-full py-2 px-6",

        // Full width large
        fullLg: "w-full py-3 px-4",

        // Icon only (like your menu buttons)
        icon: "size-12 p-2",

        // Round icon (for circular buttons)
        roundIcon: "size-12 p-2 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  disabled = false,
  loading = false,
  children,
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  // Handle loading and disabled states
  const isDisabled = disabled || loading;
  const finalVariant = isDisabled ? "disabled" : variant;

  return (
    <Comp
      className={cn(buttonVariants({ variant: finalVariant, size, className }))}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          {children}
        </>
      ) : (
        children
      )}
    </Comp>
  );
}

export { Button };
