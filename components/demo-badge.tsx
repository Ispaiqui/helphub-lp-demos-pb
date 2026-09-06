import Link from "next/link";

type DemoBadgeProps = {
  packageName: string;
};

export function DemoBadge({ packageName }: DemoBadgeProps) {
  return (
    <div className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
        <p className="label text-gray-600">
          Demo HelpHub · Pacote {packageName}
        </p>
        <Link
          href="/"
          className="text-xs text-gray-500 underline-offset-4 transition-colors hover:text-ink hover:underline"
        >
          ← Pacotes
        </Link>
      </div>
    </div>
  );
}
