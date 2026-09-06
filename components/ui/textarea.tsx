import { cn } from "@/lib/utils";

export function Textarea({
  className,
  "aria-invalid": ariaInvalid,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      aria-invalid={ariaInvalid}
      className={cn(
        "min-h-28 w-full resize-y border border-line bg-white px-3 py-2.5 text-base text-ink placeholder:text-gray-400 transition-colors duration-200 focus-visible:border-ink focus-visible:outline-none",
        ariaInvalid && "border-ink ring-1 ring-ink",
        className,
      )}
      {...props}
    />
  );
}
