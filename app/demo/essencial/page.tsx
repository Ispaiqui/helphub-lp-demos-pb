import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { DemoBadge } from "@/components/demo-badge";
import { FaqList } from "@/components/faq-list";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { benefits, testimonial } from "@/lib/content";

export const metadata: Metadata = {
  title: "Oficina Norte — Pacote Essencial",
  description:
    "Demo do pacote Essencial: página direta da Oficina Norte, manutenção e reparo de ar-condicionado na Zona Norte de São Paulo. Hero, benefícios, depoimento, FAQ e WhatsApp.",
};

export default function EssencialPage() {
  return (
    <div className="min-h-full bg-white">
      <DemoBadge packageName="Essencial" />

      <main>
        <section className="mx-auto max-w-xl px-4 pb-16 pt-12 sm:px-6 sm:pt-16">
          <p className="label text-gray-500">
            Oficina Norte · Zona Norte · São Paulo
          </p>
          <h1 className="mt-5 text-[2rem] font-medium leading-[1.15] tracking-tight sm:text-4xl">
            Ar-condicionado parado? A gente vai até você hoje.
          </h1>
          <p className="mt-5 text-base leading-7 text-gray-600">
            Manutenção preventiva e reparo residencial e comercial. Técnico
            certificado, horário combinado no WhatsApp, garantia por escrito.
            Sem enrolação.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppLink>Chamar no WhatsApp</WhatsAppLink>
            <a
              href="#contato"
              className="inline-flex h-11 items-center justify-center border border-ink px-5 text-sm font-medium transition-colors duration-200 hover:bg-ink hover:text-paper"
            >
              Pedir orçamento
            </a>
          </div>
        </section>

        <section className="border-y border-line">
          <div className="mx-auto max-w-xl px-4 py-12 sm:px-6">
            <h2 className="text-xl font-medium tracking-tight">
              O que você contrata
            </h2>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {benefits.map((item) => (
                <li key={item.n} className="grid grid-cols-[3rem_1fr] gap-3 py-6">
                  <span className="font-mono text-xs text-gray-400">
                    {item.n}
                  </span>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-xl px-4 py-12 sm:px-6">
          <blockquote className="border-l-2 border-ink pl-5">
            <p className="text-lg leading-8 text-ink">
              “{testimonial.quote}”
            </p>
            <footer className="mt-4 text-sm text-gray-500">
              {testimonial.name}, {testimonial.role} · {testimonial.place}
            </footer>
          </blockquote>
        </section>

        <section className="mx-auto max-w-xl px-4 py-4 sm:px-6">
          <h2 className="mb-4 text-xl font-medium tracking-tight">
            Perguntas frequentes
          </h2>
          <FaqList />
        </section>

        <section
          id="contato"
          className="mx-auto max-w-xl px-4 pb-20 pt-12 sm:px-6"
        >
          <h2 className="text-xl font-medium tracking-tight">
            Fale com a oficina
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            WhatsApp é o caminho mais rápido. Se preferir, deixe nome,
            telefone e o que o aparelho está fazendo.
          </p>
          <div className="mt-6">
            <WhatsAppLink className="w-full sm:w-auto">
              Abrir WhatsApp
            </WhatsAppLink>
          </div>
          <ContactForm className="mt-10" submitLabel="Enviar mensagem" />
        </section>
      </main>

      <footer className="border-t border-line px-4 py-8 text-center text-xs text-gray-500">
        Oficina Norte · demo HelpHub Essencial · wa.me/5511999999999
      </footer>
    </div>
  );
}
