import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { DemoBadge } from "@/components/demo-badge";
import { FaqList } from "@/components/faq-list";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { neighborhoods, steps, testimonial } from "@/lib/content";

export const metadata: Metadata = {
  title: "Oficina Norte — Pacote Plus",
  description:
    "Demo do pacote Plus: Oficina Norte com passo a passo, bairros da Zona Norte, depoimento, FAQ e WhatsApp. Confiança de bairro, ainda só com transições CSS.",
};

export default function PlusPage() {
  return (
    <div className="min-h-full bg-paper pb-20 sm:pb-0">
      <DemoBadge packageName="Plus" />

      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-1.5 px-5 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:px-8">
          <p className="text-lg font-medium tracking-tight">Oficina Norte</p>
          <p className="text-xs leading-5 text-gray-500">
            Ar-condicionado · Zona Norte · SP · atendimento no mesmo dia*
          </p>
        </div>
      </header>

      <main>
        <section className="border-b border-line bg-white">
          <div className="mx-auto grid max-w-5xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-16">
            <div>
              <p className="label text-gray-500">Santana e arredores</p>
              <h1 className="mt-5 text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl sm:leading-[1.05] lg:text-[3.25rem]">
                Ar-condicionado na Zona Norte, sem espera e sem enrolação.
              </h1>
            </div>
            <div>
              <p className="text-base leading-7 text-gray-600 sm:leading-8">
                Manutenção preventiva e reparo para casa, apartamento e
                comércio. Técnico certificado, horário combinado, garantia por
                escrito. Síndico e dono de ponto falam com o mesmo time.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppLink size="lg">Chamar no WhatsApp</WhatsAppLink>
                <a
                  href="#contato"
                  className="inline-flex h-12 items-center justify-center border border-ink px-6 text-sm font-medium transition-colors duration-200 hover:bg-ink hover:text-paper"
                >
                  Escrever para a oficina
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="label text-gray-500">Como funciona</p>
          <h2 className="mt-4 max-w-xl text-2xl font-medium tracking-tight sm:text-3xl">
            Três passos. Nada de formulário eterno.
          </h2>
          <ol className="mt-12 grid gap-0 border border-line bg-white md:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.n}
                className={`p-7 transition-colors duration-200 hover:bg-gray-50 sm:p-8 ${
                  index < steps.length - 1 ? "md:border-r md:border-line" : ""
                } ${index > 0 ? "border-t border-line md:border-t-0" : ""}`}
              >
                <p className="font-mono text-xs text-gray-400">{step.n}</p>
                <h3 className="mt-5 text-xl font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-xs leading-5 text-gray-500">
            *Mesmo dia sujeito a vaga na agenda do dia.
          </p>
        </section>

        <section className="border-y border-line bg-white">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-start lg:gap-16">
              <div>
                <p className="label text-gray-500">Área de atendimento</p>
                <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
                  Zona Norte, no mapa de quem mora aqui.
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-7 text-gray-600">
                  Não atendemos “São Paulo inteiro”. Atendemos a faixa norte —
                  o técnico sai de base perto de Santana e chega sem cruzar a
                  cidade no horário de pico.
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-x-8 border-t border-line pt-8 text-sm sm:grid-cols-3">
                {neighborhoods.map((name) => (
                  <li
                    key={name}
                    className="border-b border-line py-3 text-gray-700"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <figure className="grid gap-8 border border-line bg-white p-7 sm:p-12 md:grid-cols-[2fr_1fr] md:gap-10">
            <blockquote>
              <p className="text-xl leading-8 tracking-tight sm:text-2xl sm:leading-9">
                “{testimonial.quote}”
              </p>
            </blockquote>
            <figcaption className="self-end text-sm leading-6 text-gray-500 md:border-l md:border-line md:pl-10">
              <p className="font-medium text-ink">{testimonial.name}</p>
              <p className="mt-1">
                {testimonial.role} · {testimonial.place}
              </p>
              <p className="mt-3">Santana, Zona Norte</p>
            </figcaption>
          </figure>
        </section>

        <section className="mx-auto max-w-5xl px-5 pb-4 sm:px-8">
          <h2 className="mb-8 text-2xl font-medium tracking-tight sm:text-3xl">
            Perguntas frequentes
          </h2>
          <FaqList className="bg-white px-1" />
        </section>

        <section
          id="contato"
          className="mx-auto grid max-w-5xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
              Combina um horário.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
              Diga o bairro, o tipo de aparelho e o que está acontecendo.
              Confirmamos visita — no mesmo dia, se couber.
            </p>
            <WhatsAppLink className="mt-8" size="lg">
              Chamar no WhatsApp
            </WhatsAppLink>
          </div>
          <ContactForm tone="panel" submitLabel="Pedir visita" />
        </section>
      </main>

      <footer className="border-t border-line bg-white px-5 py-10 text-center text-xs leading-5 text-gray-500 sm:px-8">
        Oficina Norte · demo HelpHub Plus · wa.me/5511999999999
      </footer>
      <StickyWhatsApp variant="bar" />
    </div>
  );
}
