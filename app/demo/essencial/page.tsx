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
    <div className="min-h-full bg-paper">
      <DemoBadge packageName="Essencial" />

      <main>
        <section className="bg-white">
          <div className="mx-auto max-w-2xl px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20">
            <p className="label text-gray-500">
              Oficina Norte · Zona Norte · São Paulo
            </p>
            <h1 className="mt-6 text-4xl font-medium leading-[1.08] tracking-tight sm:text-[2.75rem] sm:leading-[1.1]">
              Ar-condicionado parado? A gente vai até você hoje.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Manutenção preventiva e reparo residencial e comercial. Técnico
              certificado, horário combinado no WhatsApp, garantia por escrito.
              Sem enrolação.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <WhatsAppLink size="lg">Chamar no WhatsApp</WhatsAppLink>
              <a
                href="#contato"
                className="inline-flex h-12 items-center justify-center border border-ink px-6 text-sm font-medium transition-colors duration-200 hover:bg-ink hover:text-paper"
              >
                Pedir orçamento
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-line">
          <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
            <h2 className="text-2xl font-medium tracking-tight sm:text-[1.75rem]">
              O que você contrata
            </h2>
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {benefits.map((item) => (
                <li
                  key={item.n}
                  className="grid grid-cols-[3.5rem_1fr] gap-4 py-8"
                >
                  <span className="pt-1 font-mono text-xs text-gray-400">
                    {item.n}
                  </span>
                  <div>
                    <p className="text-lg font-medium tracking-tight">
                      {item.title}
                    </p>
                    <p className="mt-2.5 text-sm leading-7 text-gray-600">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
            <blockquote className="border-l-2 border-ink pl-6 sm:pl-8">
              <p className="text-xl leading-8 tracking-tight sm:text-2xl sm:leading-9">
                “{testimonial.quote}”
              </p>
              <footer className="mt-6 text-sm leading-6 text-gray-500">
                {testimonial.name}, {testimonial.role} · {testimonial.place}
              </footer>
            </blockquote>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="mb-8 text-2xl font-medium tracking-tight sm:text-[1.75rem]">
            Perguntas frequentes
          </h2>
          <FaqList />
        </section>

        <section id="contato" className="border-t border-line bg-white">
          <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
            <h2 className="text-2xl font-medium tracking-tight sm:text-[1.75rem]">
              Fale com a oficina
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-gray-600 sm:text-base">
              WhatsApp é o caminho mais rápido. Se preferir, deixe nome,
              telefone e o que o aparelho está fazendo.
            </p>
            <div className="mt-8">
              <WhatsAppLink className="w-full sm:w-auto" size="lg">
                Abrir WhatsApp
              </WhatsAppLink>
            </div>
            <ContactForm className="mt-12" submitLabel="Enviar mensagem" />
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-5 py-10 text-center text-xs leading-5 text-gray-500 sm:px-8">
        Oficina Norte · demo HelpHub Essencial · wa.me/5511999999999
      </footer>
    </div>
  );
}
