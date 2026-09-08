"use client";

import Link from "next/link";
import { ThemeProvider, Button } from "@helphub/design-system";
import "./hub.css";
import { packages } from "@/lib/content";

export default function HubPage() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="helphub-hub-theme">
      <div className="hub-shell min-h-screen bg-background text-foreground">
        <header className="border-b border-primary/15">
          <div className="mx-auto flex max-w-5xl items-baseline justify-between px-4 py-5 sm:px-6">
            <p className="text-lg font-semibold tracking-tight text-primary">
              HelpHub
            </p>
            <p className="label text-primary/80">Pacotes · demo para cliente</p>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20">
          <p className="label text-primary/80">Landing pages em pacotes</p>
          <h1 className="mt-4 max-w-3xl text-[2rem] font-medium leading-[1.15] tracking-tight text-primary sm:text-5xl">
            Quatro páginas.
            <br />
            Um único negócio.
            <br />
            Quatro níveis de entrega.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-foreground sm:text-lg">
            Abra cada rota e compare o que o cliente recebe. A empresa é a
            mesma. O que muda é densidade, copy e craft. Cores só em preto,
            branco e cinza: estas demos não usam a identidade do cliente.
          </p>

          <ol className="mt-14 divide-y divide-border border-y border-primary/15">
            {packages.map((pkg, index) => (
              <li key={pkg.slug}>
                <div className="grid gap-3 py-7 sm:grid-cols-[4rem_1fr_auto] sm:items-end sm:gap-8 sm:py-9">
                  <span className="font-mono text-sm text-muted-foreground">
                    0{index + 1}
                  </span>
                  <Link
                    href={pkg.href}
                    className="group transition-colors duration-200"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h2 className="text-2xl font-medium tracking-tight text-primary transition-colors group-hover:text-primary-hover sm:text-3xl">
                        {pkg.name}
                      </h2>
                      <span className="font-mono text-sm text-muted-foreground">
                        {pkg.price}
                      </span>
                    </div>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                      {pkg.positioning}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {pkg.density}
                    </p>
                  </Link>
                  <Link href={pkg.href}>
                    <Button size="sm">Ver demo</Button>
                  </Link>
                </div>
              </li>
            ))}
          </ol>

          <aside className="mt-14 grid gap-8 border border-primary/15 bg-card p-6 text-card-foreground sm:grid-cols-2 sm:p-8">
            <div>
              <p className="label text-primary/80">Negócio das demos</p>
              <p className="mt-3 text-xl font-medium tracking-tight text-primary">
                Empresa
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Atendimento e serviço para quem precisa de resposta rápida,
                horário combinado e garantia por escrito. Fictício, mas concreto
                — o tipo de oferta que se entende em cinco segundos.
              </p>
            </div>
            <div>
              <p className="label text-primary/80">Como usar com o cliente</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Envie o repositório ou o preview. Peça para abrir o celular e
                passar pelas quatro rotas. A conversa deixa de ser “o que vem
                no site” e vira “em qual faixa a gente entra”.
              </p>
            </div>
          </aside>
        </main>

        <footer className="border-t border-primary/15">
          <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
            <p>HelpHub · demos neutras, sem cor de marca.</p>
            <p>WhatsApp das páginas: wa.me/5511999999999 (placeholder).</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
