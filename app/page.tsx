import type { Metadata } from "next";
import Link from "next/link";
import { packages } from "@/lib/content";

export const metadata: Metadata = {
  title: "HelpHub — Demos dos pacotes de landing page",
  description:
    "Índice das quatro demos HelpHub. Mesmo negócio (Oficina Norte), quatro níveis de craft: Essencial, Plus, Avançado e Premium. Preto, branco e cinza de propósito.",
};

export default function HubPage() {
  return (
    <div className="min-h-full bg-paper">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-5xl items-baseline justify-between px-4 py-5 sm:px-6">
          <p className="text-lg font-medium tracking-tight">HelpHub</p>
          <p className="label text-gray-500">Pacotes · demo para cliente</p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20">
        <p className="label text-gray-500">Landing pages em pacotes</p>
        <h1 className="mt-4 max-w-3xl text-[2rem] font-medium leading-[1.15] tracking-tight sm:text-5xl">
          Quatro páginas.
          <br />
          Um único negócio.
          <br />
          Quatro níveis de entrega.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
          Abra cada rota e compare o que o cliente recebe. A oficina é a
          mesma — ar-condicionado na Zona Norte de São Paulo. O que muda é
          densidade, copy e craft. Cores só em preto, branco e cinza: estas
          demos não usam a identidade do cliente.
        </p>

        <ol className="mt-14 divide-y divide-line border-y border-line">
          {packages.map((pkg, index) => (
            <li key={pkg.slug}>
              <Link
                href={pkg.href}
                className="group grid gap-3 py-7 transition-colors duration-200 sm:grid-cols-[4rem_1fr_auto] sm:items-end sm:gap-8 sm:py-9"
              >
                <span className="font-mono text-sm text-gray-400">
                  0{index + 1}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
                      {pkg.name}
                    </h2>
                    <span className="font-mono text-sm text-gray-600">
                      {pkg.price}
                    </span>
                  </div>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
                    {pkg.positioning}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">{pkg.density}</p>
                </div>
                <span className="text-sm text-gray-500 underline-offset-4 transition-all duration-200 group-hover:text-ink group-hover:underline">
                  Ver demo →
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <aside className="mt-14 grid gap-8 border border-line bg-white p-6 sm:grid-cols-2 sm:p-8">
          <div>
            <p className="label text-gray-500">Negócio das demos</p>
            <p className="mt-3 text-xl font-medium tracking-tight">
              Oficina Norte
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Manutenção preventiva e reparo de ar-condicionado residencial e
              comercial na Zona Norte de São Paulo. Fictício, mas concreto — o
              tipo de oferta que um síndico entende em cinco segundos.
            </p>
          </div>
          <div>
            <p className="label text-gray-500">Como usar com o cliente</p>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Envie o repositório ou o preview. Peça para abrir o celular e
              passar pelas quatro rotas. A conversa deixa de ser “o que vem
              no site” e vira “em qual faixa a gente entra”.
            </p>
          </div>
        </aside>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-xs text-gray-500 sm:flex-row sm:justify-between sm:px-6">
          <p>HelpHub · demos neutras, sem cor de marca.</p>
          <p>WhatsApp das páginas: wa.me/5511999999999 (placeholder).</p>
        </div>
      </footer>
    </div>
  );
}
