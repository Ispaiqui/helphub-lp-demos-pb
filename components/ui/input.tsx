import { cn } from "@/lib/utils";

export function Input({
  className,
  "aria-invalid": ariaInvalid,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      aria-invalid={ariaInvalid}
      className={cn(
        "h-11 w-full border border-line bg-white px-3 text-base text-ink placeholder:text-gray-400 transition-colors duration-200 focus-visible:border-ink focus-visible:outline-none",
        ariaInvalid && "border-ink ring-1 ring-ink",
        className,
      )}
      {...props}
    />
  );
}
