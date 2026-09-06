import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { DemoBadge } from "@/components/demo-badge";
import { FaqList } from "@/components/faq-list";
import { FadeUp, ProofCard } from "@/components/motion/avancado-motion";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { offerItems, proofPoints, testimonial } from "@/lib/content";

export const metadata: Metadata = {
  title: "Oficina Norte — Pacote Avançado",
  description:
    "Demo do pacote Avançado: arco de conversão da Oficina Norte — dor, solução, prova, oferta, FAQ e WhatsApp. Microinterações com framer-motion. São Paulo, Zona Norte.",
};

export default function AvancadoPage() {
  return (
    <div className="min-h-full bg-white">
      <DemoBadge packageName="Avançado" />

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="label text-gray-400">O problema · Zona Norte</p>
          <h1 className="mt-5 max-w-3xl text-[2.2rem] font-medium leading-[1.1] tracking-tight sm:text-5xl">
            Split pingando, sala quente, síndico cobrando — e a última oficina
            só apareceu no terceiro dia.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-300">
            Comércio fecha a porta. Morador reclama no grupo. Você precisa de
            alguém que confirme horário hoje, entre com certificado e saia com
            o serviço no papel.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <FadeUp>
            <p className="label text-gray-500">A solução</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
              Oficina Norte agenda no WhatsApp, chega com técnico certificado
              e deixa o serviço por escrito.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
              Manutenção preventiva e reparo, residencial e comercial, na Zona
              Norte. Você descreve o aparelho. A gente confirma a janela.
              Peça só com o seu ok.
            </p>
            <WhatsAppLink className="mt-8">Chamar no WhatsApp agora</WhatsAppLink>
          </FadeUp>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <FadeUp>
            <p className="label text-gray-500">Prova</p>
            <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
              Quem já recebeu o técnico.
            </h2>
          </FadeUp>

          <FadeUp delay={0.08} className="mt-8 border border-line bg-white p-6 sm:p-8">
            <blockquote className="text-xl leading-8">
              “{testimonial.quote}”
            </blockquote>
            <p className="mt-4 text-sm text-gray-500">
              {testimonial.name}, {testimonial.role} · {testimonial.place}
            </p>
          </FadeUp>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {proofPoints.map((point, index) => (
              <ProofCard key={point.title} delay={index * 0.08}>
                <p className="font-mono text-xs text-gray-400">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-medium leading-6">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {point.body}
                </p>
              </ProofCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <FadeUp>
            <p className="label text-gray-500">A oferta</p>
            <h2 className="mt-3 max-w-xl text-2xl font-medium tracking-tight sm:text-3xl">
              Visita, preventiva ou reparo. Residência e comércio.
            </h2>
          </FadeUp>
          <div className="mt-10 divide-y divide-line border border-line">
            {offerItems.map((item, index) => (
              <FadeUp
                key={item.title}
                delay={index * 0.06}
                className="grid gap-2 px-5 py-6 sm:grid-cols-[14rem_1fr] sm:px-6"
              >
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm leading-6 text-gray-600">{item.body}</p>
              </FadeUp>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Valor da visita combinado no WhatsApp. Sem tabela genérica no site
            — o aparelho e o acesso mudam o trabalho.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="mb-6 text-2xl font-medium tracking-tight">
          Antes de chamar
        </h2>
        <FaqList />
      </section>

      <section id="contato" className="bg-ink text-paper">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-medium tracking-tight">
              Manda a foto do split e o bairro.
            </h2>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              Respondemos no WhatsApp com horário. Se preferir deixar recado
              aqui, a demo só valida o formulário — no site entregue, o aviso
              cai no mesmo canal da oficina.
            </p>
            <WhatsAppLink variant="invert" className="mt-8">
              Abrir WhatsApp
            </WhatsAppLink>
          </div>
          <div className="bg-paper p-5 text-ink sm:p-6">
            <ContactForm submitLabel="Pedir retorno" />
          </div>
        </div>
      </section>

      <footer className="border-t border-line px-4 py-8 text-center text-xs text-gray-500">
        Oficina Norte · demo HelpHub Avançado · wa.me/5511999999999
      </footer>
      <StickyWhatsApp variant="float" />
    </div>
  );
}
