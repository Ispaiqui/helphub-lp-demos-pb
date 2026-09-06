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

      <header className="border-b border-line bg-paper">
        <div className="mx-auto flex max-w-6xl items-baseline justify-between px-5 py-6 sm:px-8">
          <p className="font-serif text-2xl tracking-tight">Oficina Norte</p>
          <p className="label text-gray-500">Zona Norte · São Paulo</p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-10 pt-14 sm:px-8 sm:pb-12 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-8">
            <p className="label text-gray-500">Uma terça em Santana</p>
            <h1 className="mt-6 font-serif text-[3rem] leading-[0.92] tracking-tight sm:text-7xl lg:text-[5.75rem]">
              O ar parou.
              <br />
              A gente chega.
            </h1>
          </div>
          <Reveal immediate delay={0.1} className="lg:col-span-4 lg:pb-3">
            <p className="max-w-sm text-base leading-8 text-gray-600">
              Manutenção e reparo de ar-condicionado para quem administra
              imóvel — síndico, dono de casa, loja na Casa Verde. Sem hype.
              Horário no WhatsApp. Garantia no papel.
            </p>
          </Reveal>
        </div>
        <RuleGrow className="mt-14" />
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-12 lg:gap-16">
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
        <div className="flex flex-col justify-between gap-12 lg:col-span-5">
          <Reveal delay={0.1}>
            <p className="font-serif text-2xl leading-snug tracking-tight sm:text-[2rem] sm:leading-[1.2]">
              No Residencial Aurora o split da sala parou de gelar no meio da
              reunião de condomínio. Duas horas depois, o técnico já tinha
              ido embora — e o piso estava seco.
            </p>
            <p className="mt-6 text-sm leading-7 text-gray-600">
              Esse é o padrão que a Oficina Norte se propõe a repetir: alguém
              no WhatsApp, uma janela de chegada, um técnico com certificação
              de gases, e o que foi feito escrito. Residência e comércio, da
              Tucuruvi à Vila Maria.
            </p>
          </Reveal>
          <FloatCta className="border border-ink bg-ink p-8 text-paper sm:p-9">
            <p className="label text-gray-400">Primeiro chamado</p>
            <p className="mt-4 font-serif text-2xl leading-tight sm:text-[1.75rem]">
              Manda o bairro e o que o aparelho está fazendo.
            </p>
            <WhatsAppLink variant="invert" className="mt-7 w-full" size="lg">
              Abrir WhatsApp
            </WhatsAppLink>
            <a
              href="#contato"
              className="mt-4 inline-flex h-11 w-full items-center justify-center text-sm text-gray-300 underline-offset-4 hover:text-paper hover:underline"
            >
              ou deixar recado no formulário
            </a>
          </FloatCta>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="label text-gray-400">A dor, sem metáfora</p>
            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.12] sm:text-5xl lg:text-[3.5rem]">
              Sala quente. Loja fechando mais cedo. Grupo do prédio pedindo
              “previsão”.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
              A oficina que “passa aí essa semana” não serve para síndico nem
              para comércio. O que serve é alguém que confirma hoje, chega na
              janela combinada e não some quando precisa trocar uma peça.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="label text-gray-500">A solução</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Uma oficina de Zona Norte, para a Zona Norte.
            </h2>
            <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Não prometemos a cidade inteira. O técnico sai de base perto de
              Santana. Preventiva, diagnóstico e reparo — split, janela,
              cassete. Peça só depois do seu sim.
            </p>
            <WhatsAppLink className="mt-10" variant="outline" size="lg">
              Combinar horário
            </WhatsAppLink>
          </Reveal>
          <Stagger className="grid gap-px bg-line lg:col-span-7">
            {proofPoints.map((point) => (
              <StaggerItem
                key={point.title}
                className="bg-paper px-6 py-8 sm:px-9 sm:py-10"
              >
                <h3 className="font-serif text-2xl leading-snug sm:text-[1.75rem]">
                  {point.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
                  {point.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal className="lg:max-w-4xl">
            <p className="font-serif text-[2.15rem] leading-[1.18] sm:text-5xl sm:leading-[1.15]">
              “{testimonial.quote}”
            </p>
            <p className="mt-10 label text-gray-500">
              {testimonial.name} · {testimonial.role} · {testimonial.place}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
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
              <h2 className="mt-5 font-serif text-4xl tracking-tight sm:text-5xl">
                O que você pede. O que a gente faz.
              </h2>
            </Reveal>
            <div className="mt-12">
              {offerItems.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 0.08}
                  className="grid gap-4 border-t border-ink py-8 last:border-b sm:grid-cols-[14rem_1fr] sm:gap-10"
                >
                  <h3 className="font-serif text-2xl leading-snug sm:text-[1.75rem]">
                    {item.title}
                  </h3>
                  <p className="self-center text-sm leading-7 text-gray-600">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-xs leading-5 text-gray-500">
              Valor da visita no WhatsApp. Aparelho, andares e horário mudam o
              trabalho — por isso não há tabela genérica nesta página.
            </p>
            <WhatsAppLink className="mt-10" size="lg">
              Pedir visita hoje
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <h2 className="mb-8 font-serif text-3xl tracking-tight sm:text-4xl">
          Perguntas que o síndico faz
        </h2>
        <FaqList className="bg-white px-2" />
      </section>

      <section
        id="contato"
        className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="grid gap-14 border-t border-ink pt-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="label text-gray-500">Último chamado</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Escreva para a oficina.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Nome, telefone e o que está acontecendo. Esta demo só valida e
              confirma na tela. No site entregue, o recado segue o mesmo fluxo
              do WhatsApp.
            </p>
            <WhatsAppLink variant="outline" className="mt-10" size="lg">
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
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:py-16">
          <div>
            <p className="font-serif text-4xl leading-none">Oficina Norte</p>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              Demo HelpHub Premium · wa.me/5511999999999
            </p>
          </div>
          <WhatsAppLink variant="invert" size="lg">
            Chamar agora
          </WhatsAppLink>
        </div>
      </footer>
      <StickyWhatsApp variant="float" />
    </div>
  );
}
