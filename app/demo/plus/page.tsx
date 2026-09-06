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
    <div className="min-h-full bg-paper pb-16 sm:pb-0">
      <DemoBadge packageName="Plus" />

      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:px-6">
          <p className="text-base font-medium tracking-tight">Oficina Norte</p>
          <p className="text-xs text-gray-500">
            Ar-condicionado · Zona Norte · SP · atendimento no mesmo dia*
          </p>
        </div>
      </header>

      <main>
        <section className="border-b border-line bg-white">
          <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <p className="label text-gray-500">Santana e arredores</p>
              <h1 className="mt-4 text-[2.1rem] font-medium leading-[1.12] tracking-tight sm:text-5xl">
                Ar-condicionado na Zona Norte, sem espera e sem enrolação.
              </h1>
            </div>
            <div>
              <p className="text-base leading-7 text-gray-600">
                Manutenção preventiva e reparo para casa, apartamento e
                comércio. Técnico certificado, horário combinado, garantia por
                escrito. Síndico e dono de ponto falam com o mesmo time.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <WhatsAppLink>Chamar no WhatsApp</WhatsAppLink>
                <a
                  href="#contato"
                  className="inline-flex h-11 items-center justify-center border border-ink px-5 text-sm font-medium transition-colors duration-200 hover:bg-ink hover:text-paper"
                >
                  Escrever para a oficina
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <p className="label text-gray-500">Como funciona</p>
          <h2 className="mt-3 text-2xl font-medium tracking-tight">
            Três passos. Nada de formulário eterno.
          </h2>
          <ol className="mt-10 grid gap-0 border border-line bg-white md:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.n}
                className={`p-6 transition-colors duration-200 hover:bg-gray-50 ${
                  index < steps.length - 1 ? "md:border-r md:border-line" : ""
                } ${index > 0 ? "border-t border-line md:border-t-0" : ""}`}
              >
                <p className="font-mono text-xs text-gray-400">{step.n}</p>
                <h3 className="mt-3 text-lg font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-gray-500">
            *Mesmo dia sujeito a vaga na agenda do dia.
          </p>
        </section>

        <section className="border-y border-line bg-white">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
              <div>
                <p className="label text-gray-500">Área de atendimento</p>
                <h2 className="mt-3 text-2xl font-medium tracking-tight">
                  Zona Norte, no mapa de quem mora aqui.
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600">
                  Não atendemos “São Paulo inteiro”. Atendemos a faixa norte —
                  o técnico sai de base perto de Santana e chega sem cruzar a
                  cidade no horário de pico.
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-line pt-6 text-sm sm:grid-cols-3">
                {neighborhoods.map((name) => (
                  <li
                    key={name}
                    className="border-b border-line py-2 text-gray-700"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <figure className="grid gap-6 border border-line bg-white p-6 sm:p-10 md:grid-cols-[2fr_1fr]">
            <blockquote>
              <p className="text-xl leading-8 tracking-tight">
                “{testimonial.quote}”
              </p>
            </blockquote>
            <figcaption className="self-end text-sm text-gray-500 md:border-l md:border-line md:pl-8">
              <p className="font-medium text-ink">{testimonial.name}</p>
              <p>
                {testimonial.role} · {testimonial.place}
              </p>
              <p className="mt-2">Santana, Zona Norte</p>
            </figcaption>
          </figure>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-6 sm:px-6">
          <h2 className="mb-4 text-2xl font-medium tracking-tight">
            Perguntas frequentes
          </h2>
          <FaqList className="bg-white px-1" />
        </section>

        <section
          id="contato"
          className="mx-auto grid max-w-5xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2"
        >
          <div>
            <h2 className="text-2xl font-medium tracking-tight">
              Combina um horário.
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Diga o bairro, o tipo de aparelho e o que está acontecendo.
              Confirmamos visita — no mesmo dia, se couber.
            </p>
            <WhatsAppLink className="mt-6">Chamar no WhatsApp</WhatsAppLink>
          </div>
          <ContactForm tone="panel" submitLabel="Pedir visita" />
        </section>
      </main>

      <footer className="border-t border-line bg-white px-4 py-8 text-center text-xs text-gray-500">
        Oficina Norte · demo HelpHub Plus · wa.me/5511999999999
      </footer>
      <StickyWhatsApp variant="bar" />
    </div>
  );
}
