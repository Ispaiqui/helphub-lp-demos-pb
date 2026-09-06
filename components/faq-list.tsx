import { faqs } from "@/lib/content";
import { cn } from "@/lib/utils";

type FaqListProps = {
  className?: string;
  items?: typeof faqs;
};

export function FaqList({ className, items = faqs }: FaqListProps) {
  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item) => (
        <details key={item.q} className="group py-4">
          <summary className="cursor-pointer list-none text-base font-medium text-ink transition-colors duration-200 marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-4">
              {item.q}
              <span
                aria-hidden
                className="mt-0.5 font-mono text-xs text-gray-400 transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
