import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { DemoBadge } from "@/components/demo-badge";
import { FaqList } from "@/components/faq-list";
import {
  FloatCta,
  Reveal,
  RuleGrow,
  Stagger,
  StaggerItem,
} from "@/components/motion/premium-motion";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { offerItems, proofPoints, testimonial } from "@/lib/content";

export const metadata: Metadata = {
  title: "Oficina Norte — Pacote Premium",
  description:
    "Demo do pacote Premium: Oficina Norte em arco editorial — tipografia expressiva, assimetria, prova, oferta e CTAs em cascata. Ar-condicionado na Zona Norte de São Paulo.",
};

export default function PremiumPage() {
  return (
    <div className="min-h-full bg-paper">
      <DemoBadge packageName="Premium" />

      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-baseline justify-between px-4 py-5 sm:px-6">
          <p className="font-serif text-xl tracking-tight">Oficina Norte</p>
          <p className="label text-gray-500">Zona Norte · São Paulo</p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pb-8 pt-10 sm:px-6 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="label text-gray-500">Uma terça em Santana</p>
            <h1 className="mt-5 font-serif text-[2.7rem] leading-[0.95] tracking-tight sm:text-6xl lg:text-[5.25rem]">
              O ar parou.
              <br />
              A gente chega.
            </h1>
          </div>
          <Reveal immediate delay={0.1} className="lg:col-span-4 lg:pb-2">
            <p className="max-w-sm text-base leading-7 text-gray-600">
              Manutenção e reparo de ar-condicionado para quem administra
              imóvel — síndico, dono de casa, loja na Casa Verde. Sem hype.
              Horário no WhatsApp. Garantia no papel.
            </p>
          </Reveal>
        </div>
        <RuleGrow className="mt-10" />
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-12">
        <Reveal immediate className="lg:col-span-7">
          <Image
            src="/fig-facade.svg"
            alt="Fachada esquemática de um prédio na Zona Norte, com splits marcados sob as janelas."
            width={640}
            height={800}
            priority
            unoptimized
            className="h-auto w-full border border-line"
          />
        </Reveal>
        <div className="flex flex-col justify-between gap-8 lg:col-span-5">
          <Reveal delay={0.1}>
            <p className="font-serif text-2xl leading-snug tracking-tight sm:text-3xl">
              No Residencial Aurora o split da sala parou de gelar no meio da
              reunião de condomínio. Duas horas depois, o técnico já tinha
              ido embora — e o piso estava seco.
            </p>
            <p className="mt-5 text-sm leading-7 text-gray-600">
              Esse é o padrão que a Oficina Norte se propõe a repetir: alguém
              no WhatsApp, uma janela de chegada, um técnico com certificação
              de gases, e o que foi feito escrito. Residência e comércio, da
              Tucuruvi à Vila Maria.
            </p>
          </Reveal>
          <FloatCta className="border border-ink bg-white p-6">
            <p className="label text-gray-500">Primeiro chamado</p>
            <p className="mt-3 font-serif text-2xl leading-tight">
              Manda o bairro e o que o aparelho está fazendo.
            </p>
            <WhatsAppLink className="mt-5 w-full">Abrir WhatsApp</WhatsAppLink>
            <a
              href="#contato"
              className="mt-3 inline-flex h-11 w-full items-center justify-center text-sm underline-offset-4 hover:underline"
            >
              ou deixar recado no formulário
            </a>
          </FloatCta>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <p className="label text-gray-400">A dor, sem metáfora</p>
            <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-[1.15] sm:text-5xl">
              Sala quente. Loja fechando mais cedo. Grupo do prédio pedindo
              “previsão”.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-sm leading-7 text-gray-300">
              A oficina que “passa aí essa semana” não serve para síndico nem
              para comércio. O que serve é alguém que confirma hoje, chega na
              janela combinada e não some quando precisa trocar uma peça.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="label text-gray-500">A solução</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight">
              Uma oficina de Zona Norte, para a Zona Norte.
            </h2>
            <p className="mt-5 text-sm leading-7 text-gray-600">
              Não prometemos a cidade inteira. O técnico sai de base perto de
              Santana. Preventiva, diagnóstico e reparo — split, janela,
              cassete. Peça só depois do seu sim.
            </p>
            <WhatsAppLink className="mt-8" variant="outline">
              Combinar horário
            </WhatsAppLink>
          </Reveal>
          <Stagger className="grid gap-px bg-line lg:col-span-7">
            {proofPoints.map((point) => (
              <StaggerItem
                key={point.title}
                className="bg-paper px-5 py-6 sm:px-7"
              >
                <h3 className="font-serif text-2xl leading-snug">
                  {point.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
                  {point.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal className="lg:max-w-3xl">
            <p className="font-serif text-[2rem] leading-[1.2] sm:text-5xl">
              “{testimonial.quote}”
            </p>
            <p className="mt-8 label text-gray-500">
              {testimonial.name} · {testimonial.role} · {testimonial.place}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Image
              src="/fig-north.svg"
              alt="Mapa esquemático da Zona Norte de São Paulo, com norte marcado."
              width={640}
              height={480}
              unoptimized
              className="h-auto w-full border border-line"
            />
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="label text-gray-500">A oferta</p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight">
                O que você pede. O que a gente faz.
              </h2>
            </Reveal>
            <div className="mt-10">
              {offerItems.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 0.08}
                  className="grid gap-3 border-t border-ink py-6 last:border-b sm:grid-cols-[12rem_1fr]"
                >
                  <h3 className="font-serif text-2xl">{item.title}</h3>
                  <p className="self-center text-sm leading-6 text-gray-600">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Valor da visita no WhatsApp. Aparelho, andares e horário mudam o
              trabalho — por isso não há tabela genérica nesta página.
            </p>
            <WhatsAppLink className="mt-8">Pedir visita hoje</WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h2 className="mb-6 font-serif text-3xl tracking-tight">
          Perguntas que o síndico faz
        </h2>
        <FaqList className="bg-white px-2" />
      </section>

      <section
        id="contato"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="grid gap-12 border-t border-ink pt-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label text-gray-500">Último chamado</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Escreva para a oficina.
            </h2>
            <p className="mt-5 text-sm leading-7 text-gray-600">
              Nome, telefone e o que está acontecendo. Esta demo só valida e
              confirma na tela. No site entregue, o recado segue o mesmo fluxo
              do WhatsApp.
            </p>
            <WhatsAppLink variant="outline" className="mt-8">
              Preferir WhatsApp
            </WhatsAppLink>
          </div>
          <ContactForm
            className="lg:col-span-7"
            tone="editorial"
            submitLabel="Enviar recado"
          />
        </div>
      </section>

      <footer className="border-t border-ink bg-ink text-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6">
          <div>
            <p className="font-serif text-3xl">Oficina Norte</p>
            <p className="mt-2 text-sm text-gray-400">
              Demo HelpHub Premium · wa.me/5511999999999
            </p>
          </div>
          <WhatsAppLink variant="invert">Chamar agora</WhatsAppLink>
        </div>
      </footer>
      <StickyWhatsApp variant="float" />
    </div>
  );
}
