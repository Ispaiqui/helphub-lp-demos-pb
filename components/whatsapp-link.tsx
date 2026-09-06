import { buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappHref } from "@/lib/content";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

type WhatsAppLinkProps = {
  children: React.ReactNode;
  className?: string;
  message?: string;
} & VariantProps<typeof buttonVariants>;

export function WhatsAppLink({
  children,
  className,
  message,
  variant = "solid",
  size = "md",
}: WhatsAppLinkProps) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant, size }), className)}
    >
      <WhatsAppIcon className="size-4" />
      {children}
    </a>
  );
}
